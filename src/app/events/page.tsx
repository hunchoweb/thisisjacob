'use client';

import Header from "../components/Header"
import EventCalendar from "../components/event-calendar"
import Link from "next/link"
import Image from "next/image"
import Footer from "../components/Footer"

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-[80vh]">
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
          <Header currentPage="events" />

          {/* Hero Content */}
          <div className="relative pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Events
                  </h1>
                  <div className="mt-6">
                    <p className="text-gray-400">Upcoming Event</p>
                    <h2 className="text-2xl text-white font-bold mt-2">
                      Men&apos;s Bible Study
                      <span className="block text-xl font-normal mt-1">
                        - Driven by faith
                      </span>
                    </h2>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="#calendar"
                      className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Events"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <section className="py-20 bg-white" id="calendar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-4">Calendar of Events</h2>
            <p className="text-gray-600 mb-8">
              Here you will find information on upcoming gatherings, retreats, conferences and more. Check back regularly or sign-up for the email newsletter to be the first to know!
            </p>
            <EventCalendar />
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>
    </main>
  )
}
