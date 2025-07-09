import Image from "next/image"

export default function MissionVision() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Mission Column */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md">
              To raise men of prayer and purity to sit at the gate of nations
            </p>
            <div className="w-full max-w-md h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/assets/Our-Mission.PNG"
                alt="Our Mission"
                width={400}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Vision Column */}
          <div className="flex flex-col items-center text-center mt-12 md:mt-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md">
              Raising Transformational Leaders with a passion for the things of God
            </p>
            <div className="w-full max-w-md h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/assets/Our-Vision.jpg"
                alt="Our Vision"
                width={400}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

