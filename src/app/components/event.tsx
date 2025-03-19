import React from 'react'

function Event() {
  return (
    <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
      Upcoming Event
      <div className="mx-auto mt-2 w-48 h-0.5 bg-black"></div>
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Event Card 1 */}
      <div className="relative group overflow-hidden rounded-lg">
        <div className="aspect-[4/3] bg-gray-200 w-full" /> {/* Placeholder for event image */}
        <div className="absolute bottom-0 left-0 right-0 bg-black p-6">
          <div className="text-yellow-400 mb-2">OCT 9 | 6:30pm</div>
          <div className="flex items-center justify-between">
            <h3 className="text-white text-xl font-bold">
              Men&apos;s Bible Study - <span className="font-normal">Driven by faith</span>
            </h3>
            <button className="bg-yellow-400 px-4 py-2 rounded-full text-black text-sm font-medium hover:bg-yellow-300 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Event Card 2 */}
      <div className="relative group overflow-hidden rounded-lg">
        <div className="aspect-[4/3] bg-gray-200 w-full" /> {/* Placeholder for event image */}
        <div className="absolute bottom-0 left-0 right-0 bg-black p-6">
          <div className="text-yellow-400 mb-2">OCT 27 | 8:00am</div>
          <div className="flex items-center justify-between">
            <h3 className="text-white text-xl font-bold">
              &quot;This is Jacobs&quot; Conference
            </h3>
            <button className="bg-yellow-400 px-4 py-2 rounded-full text-black text-sm font-medium hover:bg-yellow-300 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Event