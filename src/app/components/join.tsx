import React from 'react'
import Link from 'next/link';


function Join() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Become part of something greater</h2>
          <div className="mt-4 w-full max-w-md mx-auto border-b-2 border-gray-300"></div>
        </div>

        <div className="bg-black rounded-2xl p-6 sm:p-10 md:p-16">
          <div className="max-w-3xl">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">JOIN US TODAY</h3>
            <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10">
              Become part of a global community dedicated to spiritual growth, leadership, and service. Through prayer,
              events, and charity, Jacob Global Men&apos;s Fellowship empowers men to live with purpose and make a lasting
              impact.
            </p>
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors"
            >
              Join now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join