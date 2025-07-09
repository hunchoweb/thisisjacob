'use client';

import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import CharityInitiatives from "../components/charity-initiatives"
import WhyWeGive from "../components/why-we-give"
import Footer from "../components/Footer"

export default function CharityPage() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Hero Section */}
        <div className="relative min-h-[80vh]">
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
          <Header currentPage="charity" />

          {/* Hero Content */}
          <div className="relative pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">Charity</h1>
                  <p className="mt-6 text-xl text-gray-300">
                    Making a difference through training, education, food banks, and more. Be part of our charitable
                    efforts to transform lives.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="#initiatives"
                      className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors"
                    >
                      Get Involved
                    </Link>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                  <Image src="/assets/Charity.jpg" alt="Charity" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charity Initiatives Section */}
        <CharityInitiatives />

        {/* Why We Give Section */}
        <WhyWeGive />

        {/* Footer Section */}
        <Footer />
      </div>
    </main>
  )
}

