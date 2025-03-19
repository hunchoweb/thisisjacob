import { type NextRequest, NextResponse } from "next/server"
import { clerkClient } from "@clerk/nextjs/server"
import { getAuth } from "@clerk/nextjs/server"

// Initialize Paystack transaction
export async function POST(request: NextRequest) {
  try {
    const { userId } = await getAuth(request)
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { email } = await request.json()

    // Paystack API requires an email, amount (in kobo), and reference
    const amount = 25000000 // 250,000 Naira in kobo (smallest currency unit)
    const reference = `sub_${userId}_${Date.now()}`

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount,
        reference,
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/paystack/callback`,
        metadata: {
          userId,
          subscriptionType: "monthly",
          price: 250000, // 250,000 Naira
        },
      }),
    })

    const data = await response.json()

    if (!data.status) {
      return NextResponse.json({ error: data.message }, { status: 400 })
    }

    // Store the pending transaction in user metadata
    const client = await clerkClient()
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        pendingSubscription: {
          reference,
          amount: 250000,
          date: new Date().toISOString(),
        },
      },
    })

    return NextResponse.json(data)
  } catch (error) {
    console.error("Paystack initialization error:", error)
    return NextResponse.json({ error: "Failed to initialize payment" }, { status: 500 })
  }
}

