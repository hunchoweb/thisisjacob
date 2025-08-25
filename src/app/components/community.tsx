import React from "react";
import Image from "next/image";
import Link from "next/link";

function CoreValue() {
  return (
    <section className="py-24">
      {/* Header before the strips */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16 relative inline-block">
          Community
          <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 -mb-2"></div>
        </h2>
      </div>
      {/* Main container for rest of content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Cards */}
        <div className="space-y-8">
          {/* EDUCATION */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/assets/Nourish Your Spirit.PNG"
                  alt="Nourish Your Spirit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md">
                  Support Nigeria’s educational development goals through
                  collaboration with key education leaders and stakeholders for
                  student development. Our emphasis is on raising the standard
                  of teachers training through collaborative strategic framework
                  where we train, equip and prepare teachers for their role.{" "}
                  <br />
                  Deliver leadership and civic education modules that promote
                  values, discipline, and student responsibility by aligning
                  programs with national priorities to foster ethical
                  decision-making, leadership development and community
                  engagement.
                </p>
                <Link
                  href="/counseling"
                  className="bg-yellow-400 px-6 py-2 rounded-full text-black font-medium hover:bg-yellow-300 transition-colors w-fit"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          {/* HEALTHCARE */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/assets/Receive Spiritual Guidance 2.jpg"
                  alt="Receive Spiritual Guidance"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Healthcare</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md">
                  Empower communities through health and wellness for all. Build
                  a healthier future together. Provide Healthcare facilities and
                  train grassroot medical practitioners. Preventive care, health
                  awareness, and community outreach. <br /> We partner with
                  renowned professionals to deliver continuous training to
                  medical professionals in rural areas.
                </p>
                <Link
                  href="/counseling"
                  className="bg-yellow-400 px-6 py-2 rounded-full text-black font-medium hover:bg-yellow-300 transition-colors w-fit"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreValue;
