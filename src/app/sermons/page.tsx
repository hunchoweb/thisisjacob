'use client';

import Link from "next/link"
import { Play } from "lucide-react"
import Header from "../components/Header"
import PreviousSermons from "../components/previous-sermons";
import Footer from "../components/Footer";

export default function SermonsPage() {
  return (
    
    <main className="min-h-screen">
      <div className="relative">
        {/* Hero Section */}
        <div className="relative min-h-screen">
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

