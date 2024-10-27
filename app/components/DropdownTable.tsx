'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface Service {
  title: string
  description: string
}

const services: Service[] = [
  { 
    title: "Training for Public Speaking and Communication", 
    description: "Enhance your public speaking skills and communication abilities through our comprehensive training programs. Our expert-led sessions cover topics such as body language, voice modulation, and audience engagement."
  },
  { 
    title: "Mentoring for Entrance Examination", 
    description: "Get expert guidance and personalized mentoring to excel in various entrance examinations. Our experienced mentors provide tailored strategies, practice materials, and mock tests to boost your confidence and performance."
  },
  { 
    title: "Career Counselling For Students", 
    description: "Receive tailored career advice and guidance to help you make informed decisions about your future. Our counselors assess your strengths, interests, and goals to recommend suitable career paths and educational opportunities."
  },
  { 
    title: "Advanced Training on International Debating", 
    description: "Learn advanced techniques and strategies for excelling in international debate competitions. Our program covers research methods, argument construction, rebuttal strategies, and cross-examination skills."
  },
  { 
    title: "Academic Curriculum Building", 
    description: "Collaborate with experts to develop comprehensive and effective academic curricula for various educational levels. We focus on creating engaging, inclusive, and up-to-date content that aligns with modern educational standards."
  },
  { 
    title: "Model United Nations Training", 
    description: "Prepare for Model UN conferences and improve your diplomatic skills through our specialized training programs. Learn about international relations, negotiation techniques, and resolution drafting in an immersive environment."
  },
]

export default function DropdownTable() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto mt-16 mb-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Services</h2>
      <div className="grid gap-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full text-left p-4 flex justify-between items-center bg-primary-light hover:bg-primary hover:text-white transition-colors duration-300"
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
              aria-controls={`content-${index}`}
            >
              <span className="font-semibold text-lg">{service.title}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`content-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700">{service.description}</p>
                    <motion.button
                      className="mt-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-secondary-dark transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}