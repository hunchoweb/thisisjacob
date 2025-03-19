import Image from "next/image"
import Link from "next/link"

const initiatives = [
  {
    title: "Training Programs",
    description:
      "Our training programs are designed to equip men with practical and spiritual skills for leadership development here. We aim to empower individuals to lead purpose-driven lives, build stronger communities, and positively impact society. Join us and take the first step toward personal growth and transformation.",
    image: "/placeholder.svg",
    link: "/charity/training",
  },
  {
    title: "Education & Scholarships",
    description:
      "Empowering men through access to education and vocational training. Our scholarship program provides opportunities for personal growth, leadership development, and skill-building, helping men thrive in their communities and beyond.",
    image: "/placeholder.svg",
    link: "/charity/education",
  },
  {
    title: "Food Bank",
    description:
      "Supporting families in need by providing essential food supplies and nourishment. Our food bank initiative helps combat hunger and ensure no one goes without. Join us in making a difference in our community.",
    image: "/placeholder.svg",
    link: "/charity/food-bank",
  },
  {
    title: "Rehabilitation Program",
    description:
      "Empowering men to rebuild their lives through spiritual support, counseling, and self-development. Our program offers guidance for overcoming addiction, trauma, and personal challenges. Join us to start your journey toward healing and growth.",
    image: "/placeholder.svg",
    link: "/charity/rehabilitation",
  },
]

export default function CharityInitiatives() {
  return (
    <section className="py-20 bg-white" id="initiatives">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Charity Initiatives</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Jacob Global Men&apos;s Fellowship, we believe in giving back. Our charity initiatives are designed to uplift
            and transform communities through support, education, and empowerment.
          </p>
        </div>

        <div className="space-y-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{initiative.title}</h3>
                  <p className="text-gray-600 mb-6">{initiative.description}</p>
                  <div>
                    <Link
                      href={initiative.link}
                      className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors"
                    >
                      Get involved
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

