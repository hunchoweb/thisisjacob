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
              <Image src="/assets/contact-us.jpg" alt="Contact Us" fill className="object-cover" />
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

