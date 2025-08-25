"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Ibrahim O. Famakinde",
    quote:
      "Joining Jacob Global Men's Fellowship has completely transformed my prayer life and leadership skills. I feel more connected to God and have grown in ways I never thought possible.",
  },
  {
    name: "Michael A. Koyinsola",
    quote:
      "This fellowship has been a true blessing. The teachings and prayers have guided me through some of the most challenging moments in my life, and my personal growth has been remarkable.",
  }
  // Add more testimonials as needed
]

export default function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMounted, setIsMounted] = useState(false)

    // Add this useEffect to handle client-side initialization
  useEffect(() => {
    setIsMounted(true)
  }, [])


  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative h-[90vh] px-8 bg-white">
        <div className="absolute inset-0 -skew-y-3 bg-black" />
        {/* Layer.png overlay */}
        <Image
          src="/Layer.png"
          alt="Layered graphic"
          fill
          className="absolute top-0 left-0 w-full h-auto z-10 pointer-events-none select-none"
          style={{ objectFit: 'cover' }}
          priority
        />
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center py-16 sm:py-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-amber-400 mb-10 sm:mb-16">Testimonial</h2>
          
          {isMounted ? (
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-4 sm:p-8 transition-opacity duration-300 ${
                    index === currentIndex || index === currentIndex + 1 ? "opacity-100" : "opacity-0 hidden md:block"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center sm:text-left">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.quote}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          ): (
            <div className="text-center p-8">Loading testimonials...</div>
          )}
        </div>
      </div>
    </section>
  )
}