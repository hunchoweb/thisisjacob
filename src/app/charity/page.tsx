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
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: "400px 400px",
              }}
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
                  <Image src="/placeholder.svg" alt="Charity" fill className="object-cover" />
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

