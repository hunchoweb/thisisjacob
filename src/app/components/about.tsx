import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16 relative inline-block">
                About Us
                <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 -mb-2"></div>
              </h2>
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md leading-relaxed">
                  This is Jacob Global Men&apos;s Fellowship is a non-denominational, globally inclusive organization dedicated to empowering men to become transformational leaders in their communities and beyond. Focused on spiritual growth and leadership development, the Fellowship provides a platform for men of all backgrounds to come together, united by a shared purpose of strengthening their relationship with God through prayer, worship, and mentorship.
                </p>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md leading-relaxed">
                  By fostering a supportive and faith-driven environment, This is Jacob Global Men&apos;s Fellowship aims to equip men with the tools they need to lead with integrity, inspire positive change, and fulfill their divine potential.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden relative aspect-square w-full max-w-xl h-[400px] sm:h-[490px]">
              <Image
                src="/assets/About-Us.jpg"
                alt="About Jacob Global Men's Fellowship"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
    </section>
  )
}

export default About