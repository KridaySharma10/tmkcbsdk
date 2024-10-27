import HeroBanner from './components/HeroBanner'
import DropdownTable from './components/DropdownTable'
import AnimatedSection from './components/AnimatedSection'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <AnimatedSection
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">Welcome to Voices of Change</h2>
        <p className="text-xl text-gray-700 text-center mb-8">
          We are a collective of passionate individuals working towards a better India. Our initiatives span across various sectors, aiming to create positive change and empower communities.
        </p>
        <div className="flex justify-center">
          <Link href="/initiatives" className="bg-secondary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-secondary-dark transition-colors">
            Explore Our Initiatives
          </Link>
        </div>
      </AnimatedSection>
      <DropdownTable />
      <AnimatedSection
        className="bg-primary-light py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Join the Movement</h2>
          <p className="text-xl text-gray-700 text-center mb-8">
            Your voice matters. Together, we can create the change we want to see in our society. Join us in our mission to build a better India.
          </p>
          <div className="flex justify-center">
            <Link href="/get-involved" className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors">
              Get Involved
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}