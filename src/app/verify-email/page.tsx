"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSignUp } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { AlertCircle } from "lucide-react"

export default function VerifyEmailPage() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isLoaded) return

    try {
      setIsLoading(true)
      setError("")

      const result = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId })
        router.push("/")
      } else {
        setError("Verification failed. Please try again.")
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong. Please try again.")
      } else {
        setError("Something went wrong. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Panel */}
      <div className="relative bg-black p-8 flex flex-col">
        {/* Background Pattern */}
       <Image
              src="/Layer.png"
              alt="Layered graphic"
              fill
              className="absolute top-0 left-0 w-full h-auto z-10 pointer-events-none select-none"
              style={{ objectFit: 'cover' }}
              priority
            />

        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Image src="/placeholder.svg" alt="Logo" width={120} height={40} className="brightness-0 invert" />
        </Link>

        {/* Content */}
        <div className="flex-1 flex flex-col items-start justify-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Almost there!</h1>
          <p className="text-gray-400 mb-8">Please verify your email to complete your registration.</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4">Verify your email</h2>
          <p className="text-gray-600 mb-8">
            We&apos;ve sent a verification code to your email address. Please enter it below to complete your registration.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Verification code"
                className="w-full bg-gray-100 rounded-lg py-3 px-4"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify Email"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Didn&apos;t receive a code?{" "}
              <button
                className="text-amber-600 hover:text-amber-700 font-medium"
                onClick={async () => {
                  if (!isLoaded) return
                  try {
                    await signUp.prepareEmailAddressVerification({
                      strategy: "email_code",
                    })
                  } catch (err) {
                    console.error(err)
                  }
                }}
              >
                Resend code
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

