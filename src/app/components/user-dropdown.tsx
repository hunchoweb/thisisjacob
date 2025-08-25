"use client"

import type React from "react"

import { useState } from "react"
import { useClerk, useUser } from "@clerk/nextjs"
import { X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

interface Subscription {
  active: boolean;
  // Add other properties if needed
}

export default function UserDropdown() {
  const { user } = useUser()
  const { openUserProfile, signOut } = useClerk()
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!user) return null

  // Check if user has an active subscription
  const subscription = user.publicMetadata?.subscription as Subscription
  const hasActiveSubscription = subscription?.active === true

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Initialize Paystack transaction
      const response = await fetch("/api/paystack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to initialize payment")
      }

      // Redirect to Paystack checkout page
      window.location.href = data.data.authorization_url
    } catch (err) {
      console.error("Payment error:", err)
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancelSubscription = async () => {
    if (!confirm("Are you sure you want to cancel your subscription?")) {
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/paystack/cancel", {
        method: "POST",
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to cancel subscription")
      }

      // Refresh user data to update UI
      user.reload()
      alert("Subscription cancelled successfully")
    } catch (err) {
      console.error("Cancellation error:", err)
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="focus:outline-none">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {user?.imageUrl ? (
              <Image src={user.imageUrl || "/placeholder.svg"} alt="" width={40} height={40} className="w-full h-full object-cover" />
            ) : (
              <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            )}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[300px] max-w-[90vw] p-4 sm:p-6 bg-white rounded-xl">
        <div className="relative">
          {/* Close button */}
          <button onClick={() => setIsOpen(false)} className="absolute right-0 top-0 text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>

          {/* Profile section */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-3">
              {user?.imageUrl ? (
                <Image
                  src={user.imageUrl || "/placeholder.svg"}
                  alt=""
                  width={80}
                  height={80}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              )}
            </div>
            <button onClick={() => openUserProfile()} className="text-black hover:underline font-medium">
              Manage profile
            </button>
          </div>

          {/* Error message */}
          {error && <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">{error}</div>}

          {/* Subscription section */}
          {hasActiveSubscription ? (
            <div className="text-center mb-4">
              <div className="bg-green-100 text-green-700 p-2 rounded-lg mb-3 text-sm">
                You have an active subscription
              </div>
              <button
                onClick={handleCancelSubscription}
                disabled={isLoading}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-black rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
              >
                {isLoading ? "Processing..." : "Cancel Subscription"}
              </button>
            </div>
          ) : (
            /* Subscribe form */
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="text-center mb-2 text-sm text-gray-600">Subscribe for ₦250,000/month</div>
              <input
                type="email"
                placeholder="Enter email to subscribe"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 bg-amber-400 hover:bg-amber-500 text-black rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
              >
                {isLoading ? "Processing..." : "Subscribe"}
              </button>
            </form>
          )}

          {/* Sign out section */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => signOut()}
              className="px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}



