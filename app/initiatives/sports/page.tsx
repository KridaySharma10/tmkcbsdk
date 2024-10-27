import Image from 'next/image'
import AnimatedSection from '../../components/AnimatedSection'

export default function Sports() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection
        className="text-4xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Increased Engagement in Sports Initiative</h1>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/sports.jpg"
            alt="Sports"
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
            Our sports initiative aims to increase engagement in sports and physical activities across India. We believe that promoting sports can lead to better health, discipline, and national unity.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Key Programs</h2>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li>Organizing grassroots sports events in communities</li>
            <li>Providing sports equipment and facilities to schools</li>
            <li>Offering training programs for aspiring athletes</li>
            <li>Advocating for increased investment in sports infrastructure</li>
          </ul>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
            Get Involved
          </button>
        </AnimatedSection>
      </div>
    </div>
  )
}