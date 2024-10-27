import Image from 'next/image'
import AnimatedSection from '../../components/AnimatedSection'

export default function RenewableEnergy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection
        className="text-4xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Renewable Energy Initiative</h1>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/renewable-energy.jpg"
            alt="Renewable Energy"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </AnimatedSection>
        <AnimatedSection
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="mb-4 text-gray-700">
            Our renewable energy initiative aims to promote sustainable and clean energy solutions across India. We focus on solar, wind, and hydroelectric power to reduce our carbon footprint and create a greener future.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Key Objectives</h2>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li>Educating communities about renewable energy benefits</li>
            <li>Partnering with local governments to implement green energy policies</li>
            <li>Supporting research and development in renewable technologies</li>
            <li>Facilitating the adoption of solar panels in rural areas</li>
          </ul>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
            Get Involved
          </button>
        </AnimatedSection>
      </div>
    </div>
  )
}