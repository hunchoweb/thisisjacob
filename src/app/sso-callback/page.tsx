"use client";

import { useEffect, useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SSOCallbackPage() {
  const {
    isLoaded: isSignInLoaded,
    signIn,
    setActive: setSignInActive,
  } = useSignIn();
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isSignInLoaded) return;

    async function handleCallback() {
      try {
        // For OAuth callbacks, we need to handle the redirect response
        // Clerk should automatically process the OAuth callback from the URL

        // Try to get the current session
        if (signIn && signIn.status === "needs_first_factor") {
          // OAuth callback was successful, try to complete the sign-in
          const signInResult = await signIn.attemptFirstFactor({
            strategy: "email_code",
            code: "",
          });

          if (signInResult.status === "complete") {
            await setSignInActive({ session: signInResult.createdSessionId });
            router.push("/");
            return;
          }
        }

        // If we reach here, the OAuth callback wasn't processed properly
        // Redirect to home page instead of sign-in
        router.push("/");
      } catch (error) {
        console.error("Error during OAuth callback:", error);
        setError("Authentication failed. Please try again.");
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    }

    handleCallback();
  }, [isSignInLoaded, signIn, setSignInActive, router]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-2 text-red-600">
            Authentication Error
          </h2>
          <p className="text-gray-600">{error}</p>
          <p className="text-sm text-gray-500 mt-2">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold mb-2">Creating your account...</h2>
        <p className="text-gray-600">
          Please wait while we set up your account with Google.
        </p>
      </div>
    </div>
  );
}
