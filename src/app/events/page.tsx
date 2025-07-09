import Header from "../components/Header"
import Link from "next/link"
import Image from "next/image"
import Footer from "../components/Footer"
import ClientEventCalendar from "../components/client-event-calendar"

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-[80vh]">
          {/* Dark Background with Pattern */}
          <div className="absolute inset-0 bg-black">
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
          <Header currentPage="events" />

          {/* Hero Content */}
          <div className="relative pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="flex flex-col justify-center items-center h-full min-h-[400px] text-center md:items-start md:text-left">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Events
                  </h1>
                  <div className="mt-6">
                    <p className="text-gray-400">Upcoming Event</p>
                    <h2 className="text-3xl text-white font-bold mt-2">
                      Men&apos;s Bible Study
                      <span className="text-2xl font-normal mt-1 block md:inline md:ml-2">
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
                {/* <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Events"
                    fill
                    className="object-cover"
                  />
                </div> */}
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
            <ClientEventCalendar />
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>
    </main>
  )
}
