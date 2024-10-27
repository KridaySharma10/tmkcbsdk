import Image from 'next/image'
import AnimatedSection from '../../components/AnimatedSection'

export default function InclusiveEducation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection
        className="text-4xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Inclusive Education Initiative</h1>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/inclusive-education.jpg"
            alt="Inclusive Education"
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
            Our inclusive education initiative aims to ensure that all children, regardless of their abilities or backgrounds, have access to quality education. We focus on creating supportive learning environments for children with special needs.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Key Focus Areas</h2>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li>Training teachers in inclusive education practices</li>
            <li>Developing adaptive learning materials and technologies</li>
            <li>Advocating for inclusive education policies</li>
            <li>Creating awareness about the importance of inclusive education</li>
          </ul>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
            Learn More
          </button>
        </AnimatedSection>
      </div>
    </div>
  )
}