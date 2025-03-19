'use client';

import Image from "next/image"
import Header from "../components/Header"
import ContactForm from "../components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Hero Section */}
        <div className="relative bg-black min-h-[60vh]">
          {/* Dark Background with Pattern */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: "400px 400px",
              }}
            />
          </div>

          {/* Navbar */}
          <Header currentPage="contact" />

          {/* Hero Content */}
          <div className="relative pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  We&apos;re here to help
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section with Form and Image */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Large Image - Positioned to overlap hero and form sections */}
            <div className="hidden lg:block absolute right-8 -top-48 w-[600px] aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg" alt="Contact Us" fill className="object-cover" />
            </div>

            {/* Form Section */}
            <div className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold mb-4">Connect with us</h2>
                <div className="w-32 h-1 bg-amber-400 mb-8"></div>
                <p className="text-gray-600 mb-8">
                  If you&apos;d like more information on the program, brotherhood, partnerships, news, sponsorship or
                  anything else, fill out the form below and get back to you as soon as possible. Thank you!
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

