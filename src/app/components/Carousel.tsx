"use client"; // Add this line to mark the file as a client component
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'


const slides = [
  {
    desktopImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook%20Pro%2014_%20-%2013-pnYiuZO5d1aIxzgU0NFxLegMrzrSor.png",
    mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobil2-MQB3QS4K88v93EnopMygqt91SVXHst.png",
    text: "Proverbs 18:24 \"One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother\"",
  },
  {
    desktopImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook%20Pro%2014_%20-%2012-1JKiqplAgH74f9zXEA0Grfjt0zv7Ub.png",
    mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobil3-CYy2gfWiAuKZ6dgXNTRK8c9WkDgHqd.png",
    text: "Isaiah 2:2-3 \"In the last days, the Lord’s house will be established and nations will say, ‘Come, let us go to the house of the Lord to learn His ways..\"",
  },
  {
    desktopImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook%20Pro%2014_%20-%2014-ZW1RA6Pdy7gqQaVzcGdApAsA5KEmz4.png",
    mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobil1-UgVQCK12GbzzhKLDPKXq7vw5Dc7C4V.png",
    text: "Luke 18:1 \"Men ought always to pray\"",
  },
]

const ComingSoonPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [email, setEmail] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const [dialogMessage, setDialogMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (!isPaused) {
      timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
      }, 10000)
    }
    return () => clearInterval(timer)
  }, [isPaused])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const username = email.split('@')[0]
    try {
      await emailjs.send(
        'service_j16tolt',
        'template_5ic5yma',
        { 
          email: email,
          username: username
        },
        'bHTieYJggI062Gapw'
      )
      setDialogMessage(`Hello ${username}! Thank you for subscribing. We'll notify you when our website launches.`)
    } catch (error) {
      console.error('Error sending email:', error)
      setDialogMessage('Failed to send notification. Please try again.')
    } finally {
      setShowDialog(true)
      setIsLoading(false)
      setEmail('')
    }
  }

  return (
    <div className={`relative h-screen w-full overflow-hidden bg-black`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-3000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transition: 'opacity 1s ease-in-out', // 1s transition with ease-in-out effect
          }}
        >
          <Image 
            src={slide.desktopImage} 
            alt={`Slide ${index + 1}`} 
            layout="fill" 
            objectFit="cover" 
            className="hidden sm:block h-full w-full object-cover" 
          />
          <Image 
            src={slide.mobileImage} 
            alt={`Mobile Slide ${index + 1}`} 
            layout="fill" 
            objectFit="cover" 
            className="block sm:hidden h-full w-full object-cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}
      <div className="absolute md:inset-0 flex flex-col items-center md:items-start justify-between md:mt-0 mt-10 p-6 md:p-16">
        <div className="w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primary_Logo-hss9H0MyWCUXMOApZcNcepFIv83s2R.png"
            alt="This is Jacob Logo"
            width={150}
            height={75}
            className="w-auto h-12 md:h-16"
          />
        </div>
        <div className="w-full max-w-md md:text-left text-center mt-20">
          <h1 className="mb-4 md:text-6xl text-5xl font-bold text-white">Our Website is coming soon.</h1>
          <div className="h-16 mb-8">
            <p className="text-sm text-white md:text-base">{slides[currentSlide].text}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full gap-2 text-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <input
              type="email"
              placeholder="Please Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-white rounded-full px-6 py-3 text-black placeholder-black placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button 
              type="submit" 
              className="bg-yellow-400 text-black text-sm font-semibold rounded-full px-6 py-3 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Notify me'}
            </button>
          </form>
        </div>
      </div>
      {showDialog && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-8 text-center text-black">
            <h2 className="mb-4 text-2xl font-bold">Notification</h2>
            <p>{dialogMessage}</p>
            <button onClick={() => setShowDialog(false)} className="mt-4 rounded-full bg-yellow-400 px-4 py-2 text-black transition-colors hover:bg-yello-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ComingSoonPage
