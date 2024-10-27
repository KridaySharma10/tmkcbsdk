import Image from 'next/image'
import AnimatedSection from '../../components/AnimatedSection'

export default function Equality() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection
        className="text-4xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Equality for Backward Classes Initiative</h1>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/equality.jpg"
            alt="Equality"
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
            Our equality initiative is dedicated to promoting equal opportunities and social justice for backward classes in India. We work towards eliminating discrimination and ensuring fair representation in various sectors.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Efforts</h2>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li>Providing educational scholarships and support</li>
            <li>Organizing skill development programs</li>
            <li>Advocating for policy changes to ensure equal opportunities</li>
            <li>Raising awareness about the rights of backward classes</li>
          </ul>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
            Join Our Cause
          </button>
        </AnimatedSection>
      </div>
    </div>
  )
}