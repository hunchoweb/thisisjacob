import Image from "next/image"
import Link from "next/link"

// Mock data for previous sermons
const previousSermons = [
  { id: 1, title: "Sermon name", thumbnail: "/placeholder.svg" },
  { id: 2, title: "Sermon name", thumbnail: "/placeholder.svg" },
  { id: 3, title: "Sermon name", thumbnail: "/placeholder.svg" },
  { id: 4, title: "Sermon name", thumbnail: "/placeholder.svg" },
  { id: 5, title: "Sermon name", thumbnail: "/placeholder.svg" },
  { id: 6, title: "Sermon name", thumbnail: "/placeholder.svg" },
  { id: 7, title: "Sermon name", thumbnail: "/placeholder.svg" },
  { id: 8, title: "Sermon name", thumbnail: "/placeholder.svg" },
  { id: 9, title: "Sermon name", thumbnail: "/placeholder.svg" },
  { id: 10, title: "Sermon name", thumbnail: "/placeholder.svg" },
  { id: 11, title: "Sermon name", thumbnail: "/placeholder.svg" },
]

export default function PreviousSermons() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Previous Sermons</h2>
          <div className="mt-4 w-24 sm:w-48 border-b-2 border-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {previousSermons.map((sermon) => (
            <div key={sermon.id} className="space-y-4">
              <Link href={`/sermons/${sermon.id}`} className="group">
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src={sermon.thumbnail || "/placeholder.svg"}
                    alt={sermon.title}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-lg sm:text-xl font-semibold group-hover:text-amber-500 transition-colors">
                  {sermon.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

