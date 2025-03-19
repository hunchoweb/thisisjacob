"use client"

import { useEffect, useState } from "react"
import { useSignIn, useSignUp } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export default function SSOCallbackPage() {
  const { isLoaded: isSignInLoaded, signIn, setActive: setSignInActive } = useSignIn()
  const { isLoaded: isSignUpLoaded, signUp, setActive: setSignUpActive } = useSignUp()
  const router = useRouter()
  const [verificationCode, setVerificationCode] = useState("")

  useEffect(() => {
    if (!isSignInLoaded || !isSignUpLoaded) return

    async function handleCallback() {
      try {
        // Try to handle the callback with signIn
        if (signIn) {
          const signInResult = await signIn.attemptFirstFactor({
            strategy: "email_code",
            code: verificationCode,
          })

          if (signInResult.status === "complete") {
            await setSignInActive({ session: signInResult.createdSessionId })
            router.push("/")
            return
          }
        }
      } catch (error) {
        console.error("Error during sign-in:", error)
        // Handle error appropriately, e.g., show a message to the user
      }
    }

    handleCallback()
  }, [isSignInLoaded, isSignUpLoaded, signIn, signUp, setSignInActive, setSignUpActive, router, verificationCode])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold mb-2">Completing authentication...</h2>
        <p className="text-gray-600">Please wait while we complete your sign-in process.</p>
      </div>
      <input
        type="text"
        placeholder="Enter verification code"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        required
      />
    </div>
  )
}

