'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroBanner() {
  return (
    <div className="relative h-[60vh] min-h-[400px]">
      <Image
        src="/images/hero-banner.jpg"
        alt="Voices of Change"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <motion.div 
          className="text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Voices of Change for a Better India</h1>
          <p className="text-xl md:text-2xl">Together, we can make a difference</p>
          <motion.button
            className="mt-8 bg-secondary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-secondary-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}