import Image from 'next/image'
import AnimatedSection from '../../components/AnimatedSection'

export default function WomensSafety() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection
        className="text-4xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Women's Safety Initiative</h1>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/womens-safety.jpg"
            alt="Women's Safety"
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
            Our women's safety initiative is dedicated to creating a safer environment for women across India. We work on various fronts to address issues of gender-based violence and promote women's empowerment.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Approach</h2>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li>Conducting safety awareness workshops in communities</li>
            <li>Collaborating with law enforcement to improve response to women's safety issues</li>
            <li>Providing self-defense training programs</li>
            <li>Advocating for stronger laws and policies to protect women</li>
          </ul>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
            Support Our Cause
          </button>
        </AnimatedSection>
      </div>
    </div>
  )
}