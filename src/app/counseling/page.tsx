'use client';

import Image from "next/image";
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
            <Image
          src="/Layer.png"
          alt="Layered graphic"
          fill
          className="absolute top-0 left-0 w-full h-auto z-10 pointer-events-none select-none"
          style={{ objectFit: 'cover' }}
          priority
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

