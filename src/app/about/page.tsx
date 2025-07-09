import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header currentPage="about" />
      {/* Hero/About Section */}
      <section className="relative w-full h-[80vh] bg-black pt-32 pb-20 text-white overflow-hidden">
        <Image
          src="/Layer.png"
          alt="Layered graphic"
          fill
          className="absolute top-0 left-0 w-full h-auto z-10 pointer-events-none select-none"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 ">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-base sm:text-lg text-gray-300 mb-4 max-w-lg">
              This is Jacob Global Men&apos;s Fellowship is a non-denominational, globally inclusive organization dedicated to empowering men to become transformational leaders in their communities and beyond.
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-lg">
              Focused on spiritual growth and leadership development, the fellowship provides a platform for men of all backgrounds to come together, united by a shared purpose of strengthening their relationship with God through prayer, worship, and mentorship.
            </p>
          </div>
          <div className="hidden flex-1 sm:flex justify-center items-center">
            <div className="w-full sm:max-w-md h-64 sm:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
              <Image src="/assets/About-Us.jpg" alt="About" width={400} height={300} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Heading (white background) */}
      <section className="bg-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold  mt-16 mb-2">Meet Our Founder & Spiritual Head</h2>
          <div className="h-[2px] w-48 bg-yellow-400 mb-5" />
        </div>
      </section>

      {/* Isi Igenegba Card + Details (gray background) */}
      <section className="bg-[#D9D9D9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Heading + 3 paragraphs */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-3">Apostle Isibhakhomen Igenegba</h3>
              <div className="h-[2px] w-36 bg-black mb-5" />
              <p className="text-gray-700 mb-4">
                Isi Igenegba is a visionary leader and transformational voice committed to rebuilding lives, nurturing purpose, and raising generations of God-centered, impactful leaders. As the Founder and Spiritual Head of This is Jacob Global Men&apos;s Fellowship, she brings deep expertise in spiritual mentorship, leadership development, and global outreach to empower men to live with integrity, influence, and purpose.
              </p>
              <p className="text-gray-700 mb-4">
                Her leadership journey is marked by pioneering initiatives such as the People of Influence Network, Isi Benedicte Institute, and A Million Women Global. Through platforms like Deborah&apos;s Impact Projects Africa (DIPA) and the Mantle of Deborah, Isi has driven programs that promote spiritual growth, financial empowerment, and holistic transformation across continents.
              </p>
              <p className="text-gray-700 mb-4">
                Under Isi&apos;s direction, This is Jacob becomes a dynamic space for men to be mentored, equipped, and challenged by seasoned leaders and societal influencers. Her approach blends deep spiritual insight with strategic action, creating a fellowship where men grow not just in faith, but in character, leadership, and community impact.
              </p>
            </div>
            {/* Right: Founder Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md h-100 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                <Image src="/assets/Isi-Igenegba.png" alt="Isi Igenegba" width={320} height={400} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          {/* Full width: the rest of the founder content */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-1">A Legacy of Leadership & Global Impact</h3>
              <div className="h-[2px] w-36 bg-black mb-5" />
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>Founder, People of Influence Network – A global ministry network registered in Nigeria, the UK, and the USA, committed to spiritual and societal transformation.</li>
                <li>Global Reach – Her work spans Africa, Europe, and North America, with programs that have impacted thousands.</li>
                <li>Mentorship & Leadership Development – Through the Influence Academy and other platforms, Isi continues to shape the next generation of changemakers.</li>
                <li>Holistic Empowerment – From the Wholeness Center to Children of Influence, she has built safe spaces that address spiritual, emotional, and professional growth.</li>
                <li>Socioeconomic Transformation – Her work with DIPA uplifts African women and communities through education, mentorship, and sustainable development.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">A Vision for Men’s Renewal & Leadership</h3>
              <div className="h-[2px] w-36 bg-black mb-5" />
              <p className="text-gray-700">
                Driven by a desire to see men thrive spiritually, emotionally, and socially, Isi envisions This is Jacob as a launchpad for kingdom-minded, purpose-driven leaders. Through mentorship, worship, workshops, and strategic engagement, the fellowship aims to raise men who will transform families, communities, and nations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">A Life Committed to Legacy</h3>
              <div className="h-[2px] w-36 bg-black mb-5" />
              <p className="text-gray-700">
                As a certified coach, seasoned speaker, and consultant, Isi Igenegba’s influence continues to break boundaries. This is Jacob Global Men’s Fellowship is a continuation of her legacy, a bold movement designed to empower men to rise in strength, purpose, and divine identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold  mt-16 mb-2">Meet Our Visionary Director</h2>
          <div className="h-[2px] w-48 bg-yellow-400 mb-5" />
        </div>
      </section>

      {/* Adolphus Bobby Igenegba Card + Details (gray background) */}
      <section className="bg-[#D9D9D9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Heading + 3 paragraphs */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-3">Adolphus Bobby Igenegba</h3>
              <div className="h-[2px] w-36 bg-black mb-5" />
              <p className="text-gray-700 mb-4">
                Adolphus Bobby Igenegba is a strategic leader, faith-driven mentor, and philanthropist with a deep passion for helping young people discover and fulfill their divine potential. As Visionary Director of This is Jacob Global Men’s Fellowship, he brings a rare blend of spiritual insight, business acumen, and compassionate leadership to the mission of raising transformational men across the globe.
              </p>
              <p className="text-gray-700 mb-4">
                With over two decades of experience spanning the oil and gas, energy, and power sectors in Africa, Bobby has built a reputation for excellence, innovation, and impact. Yet beyond his corporate achievements, he is a man deeply committed to kingdom values, consistently giving of himself to support widows, feed the poor, and provide practical help to those in need. His life reflects a calling to serve both in boardrooms and on the frontlines of human need.
              </p>
              <p className="text-gray-700 mb-4">
                He holds a Bachelor’s degree in Philosophy from the University of Benin, Nigeria, and is a certified member of both the Chartered Institute of Management (CIM) and the Chartered Institute of Personnel Management (CIPM). With a strong background in leadership and organizational development, he continues to mentor young professionals and contribute to the growth of purpose-driven institutions rooted in integrity, sustainability, and social impact.
              </p>
              <p className="text-gray-700 mb-4">
                A man of quiet strength and enduring generosity, Bobby has attended several spiritual leadership trainings and continues to grow in the knowledge of God. His role in This is Jacob reflects his heart, to see men become pillars in their families, their communities, and their nations.
              </p>
            </div>
            {/* Right: Founder Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md h-100 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                <Image src="/assets/Bobby.jpg" alt="Isi Igenegba" width={320} height={400} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold  mt-16 mb-2">Meet Our Board Chairman</h2>
          <div className="h-[2px] w-48 bg-yellow-400 mb-5" />
        </div>
      </section>

      {/* Isi Igenegba Card + Details (gray background) */}
      <section className="bg-[#D9D9D9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Heading + 3 paragraphs */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-3">Kemela Okara</h3>
              <div className="h-[2px] w-36 bg-black mb-5" />
              <p className="text-gray-700 mb-4">
                Mr. Kemela Okara is a visionary leader deeply committed to the spiritual, social, and economic transformation of Nigeria. With over a decade of distinguished service in government, he brings a wealth of experience in leadership, public policy, and nation-building. His guiding principle “Politics is the business of giving every man, woman, and child a fair opportunity to succeed in life” has shaped his journey in governance and beyond.
              </p>
              <p className="text-gray-700 mb-4">
                Kemela has served in multiple senior government roles, including Secretary to the Bayelsa State Government and Commissioner for Trade, Industry, and Investment. He is currently the Pro-Chancellor of the University of Africa, Toru Orua, and serves as a Non-Executive Director at Benel Energy Resources Limited. He is also Of Counsel at Vale Partners law firm and the founder of the Africa School of Government and Politics (ASGP).
              </p>
              <p className="text-gray-700 mb-4">
                A trained lawyer called to both the English and Nigerian Bars in 1989, Kemela co-founded the leading law firm Streamsowers & Köhn. He holds an LLB (Hons) from Middlesex University, London, and is a member of the Honourable Society of Gray’s Inn.
              </p>
              <p className="text-gray-700 mb-4">
                Beyond his professional and political life, Kemela is passionate about mentorship, faith, and education. He established the Kemela Okara Foundation, which sponsors university scholarships for indigent students in Engineering, Medicine, Nursing, and Law across Nigeria. He is also an elder, teacher, and former trustee with deep roots in Freedom Foundation and This Present House Church.
              </p>
              <p className="text-gray-700 mb-4">
                He is the author of “Open Windows in Babylon,” a reflective book on prayer and spiritual insight.
              </p>
              <p className="text-gray-700 mb-4">
                Kemela has been happily married to Chineze Okara for over 29 years. Together, they are proud parents to three wonderful children: Ebitimi, Pereowei, and Tamarapreye.
              </p>
            </div>
            {/* Right: Founder Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md h-100 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                <Image src="/assets/Kemela-Okara.JPG" alt="Isi Igenegba" width={320} height={400} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          {/* Full width: the rest of the founder content */}
          <div className="space-y-10">
            <div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      {/* <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Our Team</h2>
          <div className="h-1 w-24 bg-yellow-400 mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {TEAM.map((member, idx) => (
              <Card key={idx} className="bg-white rounded-xl shadow-lg flex flex-col items-center p-6">
                <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-200 mb-4 flex items-center justify-center">
                  <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <CardContent className="flex flex-col items-center p-0">
                  <h3 className="text-lg font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}