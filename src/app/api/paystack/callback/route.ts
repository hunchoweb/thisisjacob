import { type NextRequest, NextResponse } from "next/server"
import { clerkClient } from "@clerk/nextjs/server"
// import { getAuth } from "@clerk/nextjs/server" // Removed unused import

// Handle Paystack callback after payment
export async function GET(request: NextRequest) {
  // const { userId } = await getAuth(request) // Removed unused variable

  try {
    const { searchParams } = new URL(request.url)
    const reference = searchParams.get("reference")

    if (!reference) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/payment-failed?error=missing-reference`)
    }

    // Verify the transaction with Paystack
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    })

    const data = await response.json()

    if (!data.status || data.data.status !== "success") {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/payment-failed?reference=${reference}`)
    }

    // Extract user ID from metadata or reference
    const userIdFromData = data.data.metadata?.userId || reference.split("_")[1]

    if (!userIdFromData) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/payment-failed?error=user-not-found`)
    }

    // Update user metadata with subscription information
    const client = await clerkClient()
    const nextRenewalDate = new Date()
    nextRenewalDate.setMonth(nextRenewalDate.getMonth() + 1)

    await client.users.updateUserMetadata(userIdFromData, {
      publicMetadata: {
        subscription: {
          active: true,
          plan: "monthly",
          amount: 250000,
          currency: "NGN",
          startDate: new Date().toISOString(),
          nextRenewalDate: nextRenewalDate.toISOString(),
          reference,
          paymentMethod: "paystack",
        },
        pendingSubscription: null,
      },
    })

    // Example usage of userId
    // const user = await client.users.getUser(userId) // Removed unused variable
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/payment-success`)
  } catch (error) {
    console.error("Paystack callback error:", error)
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/payment-failed?error=server-error`)
  }
}

