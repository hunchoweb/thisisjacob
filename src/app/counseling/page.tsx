'use client';

import Footer from "../components/Footer"
import Header from "../components/Header"
import CounselingForm from "../components/counseling-form"
import CounselingSteps from "../components/counseling-steps"

export default function CounselingPage() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Hero Section */}
        <div className="relative min-h-[60vh]">
          {/* Dark Background with Pattern */}
          <div className="absolute inset-0 bg-black">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: "400px 400px",
              }}
            />
          </div>

          {/* Navbar */}
          <Header currentPage="counseling" />

          {/* Hero Content */}
          <div className="relative pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Left Column - Text Content */}
                <div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Need someone to talk to?
                  </h1>
                  <p className="mt-6 text-lg sm:text-xl text-gray-300">
                    Have something on your mind you need to talk to someone about?
                  </p>
                </div>

                {/* Right Column - Form will be positioned absolutely */}
                <div className="hidden md:block">{/* This is just a spacer */}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section with Form and Steps side by side */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Steps Section - Left Column */}
              <div className="pt-12 sm:pt-20 pb-12 sm:pb-20 md:-mt-0 order-2 md:order-1">
                <CounselingSteps />
              </div>

              {/* Form Section - Right Column */}
              <div className="relative z-10 -mt-10 sm:-mt-20 md:-mt-40 order-1 md:order-2">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                  <p className="text-base sm:text-lg mb-6">
                    Send us a message about what you&apos;d love to get counsel about, and we&apos;ll get back to you after{" "}
                    <span className="font-semibold">24hrs</span>
                  </p>
                  <CounselingForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </main>
  )
}

