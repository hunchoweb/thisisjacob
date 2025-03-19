import Link from "next/link"
import { XCircle } from "lucide-react"

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <XCircle className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Payment Failed</h1>
          <p className="text-gray-600 mb-6">
            We couldn&apos;t process your payment. Please try again or contact support if the problem persists.
          </p>
          <div className="space-y-4 w-full">
            <Link
              href="/"
              className="block w-full px-6 py-2 bg-amber-400 hover:bg-amber-500 text-black rounded-full font-medium text-center transition-colors"
            >
              Return to Home
            </Link>
            <Link
              href="/contact"
              className="block w-full px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full font-medium text-center transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

