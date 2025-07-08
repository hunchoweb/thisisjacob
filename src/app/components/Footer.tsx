"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <Image
          src="/Layer.png"
          alt="Layered graphic"
          fill
          className="absolute top-0 left-0 w-full h-auto z-10 pointer-events-none select-none"
          style={{ objectFit: 'cover' }}
          priority
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
              <p>+234 809 420 5582</p>
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
              <p>7b Bunmi Olowude Oniru</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">Sign up with your email address to recieve updates from us</p>
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

