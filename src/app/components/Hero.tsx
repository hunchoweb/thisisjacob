import Link from 'next/link';
import Footer from './Footer';
import MissionVision from './mission-vission';
import About from './about';
import CoreValue from './coreValue';
import Event from './event';
import Join from './join';
import ClientTestimonial from "../components/client-testimonial"

function Hero() {
    
  return (
    <div>
      <div className="relative h-[100vh] bg-black">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-32 pb-20 min-h-screen flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                This is Jacob&apos;s Global Men&apos;s Fellowship
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 mb-8">
                Join a global fellowship of men striving to make decrees for God at the gates of nations.
              </p>
              <div className="mt-8">
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors"
                >
                  Join the Fellowship
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path d="M0 200L1440 0V200H0Z" fill="white" />
            </svg>
          </div>

      </div>

      <MissionVision />

      <About />

      <CoreValue />

      <Event />

      <ClientTestimonial />

      <Join />    

      <Footer />

    </div>
  )
}

export default Hero