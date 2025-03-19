import React from 'react'

function CoreValue() {
  return (
    <section className="py-24">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Our Core Values</h2>
    
    {/* Values Banner */}
    <div className="relative overflow-hidden bg-yellow-400 -mx-4 mb-16">
      <div className="py-4 relative" style={{ transform: 'rotate(-2deg) scale(1.1)' }}>
        <div className="flex items-center justify-center space-x-4 text-black font-medium">
          {['PRAYER', 'GODLINESS', 'PURITY', 'CHARACTER REFORMATION', 'MEEKNESS', 'TRUTH', 'RECONCILIATION', 'HOLINESS'].map((value, index) => (
            <div key={index} className="flex items-center">
              <span>{value}</span>
              {index < 7 && <span className="mx-2">•</span>}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Cards */}
    <div className="space-y-8">
      {/* Nourish Your Spirit */}
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="bg-gray-200 aspect-square rounded-lg" /> {/* Placeholder for image */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Nourish Your Spirit</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md">
              Access powerful sermons that inspire and guide you on your spiritual journey. Dive deep into teachings that strengthen your faith and equip you to live a purpose-driven life. Stay connected with God&apos;s word and experience transformation through these valuable resources.
            </p>
            <button className="bg-yellow-400 px-6 py-2 rounded-full text-black font-medium hover:bg-yellow-300 transition-colors w-fit">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Receive Spiritual Guidance */}
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="bg-gray-200 aspect-square rounded-lg" /> {/* Placeholder for image */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Receive Spiritual Guidance</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md">
              Find clarity, healing, and direction for your spiritual journey. Connect with seasoned mentors for personalized counseling and empowering teachings tailored to your needs. Let us help you align your path with divine purpose.
            </p>
            <button className="bg-yellow-400 px-6 py-2 rounded-full text-black font-medium hover:bg-yellow-300 transition-colors w-fit">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Lend a Hand */}
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="bg-gray-200 aspect-square rounded-lg" /> {/* Placeholder for image */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Lend a Hand, Change a Life</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md">
              Your involvement can make a lasting impact on those in need. Whether through donations, volunteering, or participating in our community events, you have the power to create real change as we work to uplift individuals and families, providing them with the support and resources they need to thrive. Together, we can foster hope, strengthen communities, and build a brighter, more compassionate future. Every act of kindness brings us one step closer to transforming lives. Make your mark today.
            </p>
            <button className="bg-yellow-400 px-6 py-2 rounded-full text-black font-medium hover:bg-yellow-300 transition-colors w-fit">
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

export default CoreValue