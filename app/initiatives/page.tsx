import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '../components/AnimatedSection'

const initiatives = [
  { title: 'Renewable Energy', path: '/initiatives/renewable-energy', image: '/images/renewable-energy.jpg' },
  { title: 'Women\'s Safety', path: '/initiatives/womens-safety', image: '/images/womens-safety.jpg' },
  { title: 'Inclusive Education', path: '/initiatives/inclusive-education', image: '/images/inclusive-education.jpg' },
  { title: 'Equality', path: '/initiatives/equality', image: '/images/equality.jpg' },
  { title: 'Sports', path: '/initiatives/sports', image: '/images/sports.jpg' },
]

export default function Initiatives() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection
        className="text-4xl font-bold mb-8 text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Our Initiatives</h1>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((initiative, index) => (
          <AnimatedSection
            key={initiative.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={initiative.path} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-primary">{initiative.title}</h2>
                  <p className="text-gray-600">Learn more about our {initiative.title.toLowerCase()} initiative.</p>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}