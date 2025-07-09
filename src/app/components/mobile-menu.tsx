"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { SignInButton, useUser } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import UserDropdown from "./user-dropdown"

interface MobileMenuProps {
  currentPage?: string
}

export default function MobileMenu({ currentPage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { isSignedIn } = useUser()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="text-white p-2 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90">
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-white p-2 focus:outline-none" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col items-center justify-center space-y-6 p-4">
              <Link
                href="/"
                className={cn(
                  "text-white text-xl hover:text-amber-300 transition-colors",
                  currentPage === "home" && "text-amber-400",
                )}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  "text-white text-xl hover:text-amber-300 transition-colors",
                  currentPage === "sermons" && "text-amber-400",
                )}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/counseling"
                className={cn(
                  "text-white text-xl hover:text-amber-300 transition-colors",
                  currentPage === "counseling" && "text-amber-400",
                )}
                onClick={toggleMenu}
              >
                Counseling
              </Link>
              <Link
                href="/charity"
                className={cn(
                  "text-white text-xl hover:text-amber-300 transition-colors",
                  currentPage === "charity" && "text-amber-400",
                )}
                onClick={toggleMenu}
              >
                Charity
              </Link>
              <Link
                href="/events"
                className={cn(
                  "text-white text-xl hover:text-amber-300 transition-colors",
                  currentPage === "events" && "text-amber-400",
                )}
                onClick={toggleMenu}
              >
                Events
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-white text-xl hover:text-amber-300 transition-colors",
                  currentPage === "contact" && "text-amber-400",
                )}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>

            {/* Auth Button */}
            <div className="p-6 flex justify-center">
              {isSignedIn ? (
                <UserDropdown />
              ) : (
                <SignInButton mode="modal">
                  <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors">
                    Login
                  </button>
                </SignInButton>
              )}
            </div>
            
          </div>
        </div>
      )}
    </div>
  )
}

