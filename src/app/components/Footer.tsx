"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "400px 400px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Contact Section */}
          <div>
            <div className="mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primary_Logo-hss9H0MyWCUXMOApZcNcepFIv83s2R.png"
                alt="This is Jacob"
                width={180}
                height={60}
                className="w-auto h-12 md:h-16 mb-6 sm:mb-8"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <p>+234 12-345-6789</p>
              <p>ThisIsJacob@gmail.com</p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://facebook.com" className="text-amber-400 hover:text-amber-300">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://instagram.com" className="text-amber-400 hover:text-amber-300">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <p>This is Jacob Fellowship Center</p>
              <p>704 11th Ave</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">Sign up with your email addree to recieve updates from us</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-full bg-white text-black"
                required
              />
              <button
                type="submit"
                className="px-6 sm:px-8 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="pt-6 sm:pt-8">
          <ul className="flex flex-wrap gap-4 sm:gap-8">
            <li>
              <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base">
                Home
              </Link>
            </li>
            <li>
              <Link href="/worship" className="text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base">
                Worship
              </Link>
            </li>
            <li>
              <Link href="/counseling" className="text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base">
                Counseling
              </Link>
            </li>
            <li>
              <Link href="/charity-events" className="text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base">
                Charity & Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

