"use client"

import dynamic from "next/dynamic"

const Testimonial = dynamic(() => import("./testimonial"), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading testimonials...</div>,
})

export default function ClientTestimonial() {
  return <Testimonial />
}

