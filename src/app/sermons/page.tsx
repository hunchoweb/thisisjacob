'use client';

import Link from "next/link"
import { Play } from "lucide-react"
import Header from "../components/Header"
import PreviousSermons from "../components/previous-sermons";
import Footer from "../components/Footer";
import Image from "next/image";

export default function SermonsPage() {
  return (
    
    <main className="min-h-screen">
      <div className="relative">
        {/* Hero Section */}
        <div className="relative min-h-screen">
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
          <Header currentPage="sermons" />

          {/* Hero Content */}
          <div className="relative pt-48 sm:pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Column - Text Content */}
                <div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Learn the Word of God
                  </h1>
                  <p className="mt-6 text-lg sm:text-xl text-gray-300">Watch the sermon for this week.</p>
                  <div className="mt-8">
                    <Link
                      href="https://youtube.com"
                      target="_blank"
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors"
                    >
                      Watch on Youtube
                    </Link>
                  </div>
                </div>

                {/* Right Column - Video Player */}
                <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden mt-8 md:mt-0">
                  <button
                    className="absolute inset-0 w-full h-full flex items-center justify-center group"
                    aria-label="Play video"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Sermons Section */}
        <PreviousSermons />

        {/* Footer Section */}
        <Footer />
      </div>
    </main>
  )
}

