import { NextRequest, NextResponse } from "next/server"
import { clerkClient } from "@clerk/nextjs/server"
import { getAuth } from "@clerk/nextjs/server"

interface Subscription {
  active: boolean;
  // Add other properties if needed
}

// Cancel subscription
export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req)
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get user data to check if they have an active subscription
    const client = await clerkClient()
    const user = await client.users.getUser(userId)
    const subscription = user.publicMetadata?.subscription as Subscription

    if (!subscription || !subscription.active) {
      return NextResponse.json({ error: "No active subscription found" }, { status: 400 })
    }

    // Update user metadata to cancel subscription
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        subscription: {
          ...subscription,
          active: false,
          cancelledAt: new Date().toISOString(),
        },
      },
    })

    return NextResponse.json({ success: true, message: "Subscription cancelled successfully" })
  } catch (error) {
    console.error("Subscription cancellation error:", error)
    return NextResponse.json({ error: "Failed to cancel subscription" }, { status: 500 })
  }
}

