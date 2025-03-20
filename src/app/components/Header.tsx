"use client"

import Link from "next/link"
import { useUser } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import Image from "next/image"
import UserDropdown from "./user-dropdown"
import MobileMenu from "./mobile-menu"


interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage }: NavbarProps) {
  const { isSignedIn } = useUser()

  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative">
                {/* Placeholder for logo */}
                <div className="w-full">
                    <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primary_Logo-hss9H0MyWCUXMOApZcNcepFIv83s2R.png"
                        alt="This is Jacob Logo"
                        width={150}
                        height={75}
                        className="w-auto h-12 md:h-16"
                    />
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/"
              className={cn(
                "text-white hover:text-amber-300 transition-colors",
                currentPage === "home" && "border-b-2 border-amber-400",
              )}
            >
              Home
            </Link>
            <Link
              href="/sermons"
              className={cn(
                "text-white hover:text-amber-300 transition-colors",
                currentPage === "sermons" && "border-b-2 border-amber-400",
              )}
            >
              Sermons
            </Link>
            <Link
              href="/counseling"
              className={cn(
                "text-white hover:text-amber-300 transition-colors",
                currentPage === "counseling" && "border-b-2 border-amber-400",
              )}
            >
              Counseling
            </Link>
            <Link
              href="/charity"
              className={cn(
                "text-white hover:text-amber-300 transition-colors",
                currentPage === "charity" && "border-b-2 border-amber-400",
              )}
            >
              Charity
            </Link>
            <Link
              href="/events"
              className={cn(
                "text-white hover:text-amber-300 transition-colors",
                currentPage === "events" && "border-b-2 border-amber-400",
              )}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-white hover:text-amber-300 transition-colors",
                currentPage === "contact" && "border-b-2 border-amber-400",
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Auth Button */}
          <div>
            {isSignedIn ? (
              <UserDropdown />
            ) : (
              <Link href="/sign-up">
                <button className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <MobileMenu currentPage={currentPage} />
        </div>
      </div>
    </header>
  )
}







                