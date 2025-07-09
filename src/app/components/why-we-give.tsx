export default function WhyWeGive() {
  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Decorative Shape */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-white transform skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Why we give</h2>
          <div className="w-32 h-1 bg-amber-400 mb-12"></div>

          <div className="space-y-12">
            {/* Point 1 */}
            <div className="flex gap-4">
              <div className="flex-none mt-2">
                <div className="w-4 h-4 rounded-full bg-amber-400"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">To Support Transformative Community Initiatives</h3>
                <p className="text-gray-600">
                  Giving allows us to run impactful programs, from food banks to scholarship funds, that uplift
                  individuals and families in need. By supporting these initiatives, we help provide access to
                  essentials like food, education, and resources that foster both spiritual and personal growth.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-4">
              <div className="flex-none mt-2">
                <div className="w-4 h-4 rounded-full bg-amber-400"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">To Enable Spiritual and Vocational Training</h3>
                <p className="text-gray-600">
                  Donations empower us to conduct workshops, counseling, and training sessions that equip men with the
                  skills and faith they need to grow in success. Through our dedication to both spiritual development,
                  your contributions aid in building a community of men ready to make positive changes in their
                  families, workplaces, and society.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-4">
              <div className="flex-none mt-2">
                <div className="w-4 h-4 rounded-full bg-amber-400"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">To Build a Legacy of Faith and Service</h3>
                <p className="text-gray-600">
                  Giving is an act of faith, supporting a mission that goes beyond just meeting immediate needs. At This is
                  Jacob Global Men&apos;s Fellowship, our charitable initiatives help inspire future generations, reinforcing
                  values of compassion, integrity, and service to God and others, creating a lasting impact within our
                  communities and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

