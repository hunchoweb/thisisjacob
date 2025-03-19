import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for subscribing to Jacob&apos;s Global Men&apos;s Fellowship. Your subscription is now active.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg w-full mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Plan:</span>
              <span className="font-medium">Monthly Subscription</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium">₦250,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="text-green-600 font-medium">Active</span>
            </div>
          </div>
          <Link
            href="/"
            className="px-6 py-2 bg-amber-400 hover:bg-amber-500 text-black rounded-full font-medium transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

