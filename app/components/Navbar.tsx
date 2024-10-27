'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      className="bg-primary text-white p-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Voices of Change</Link>
        <div className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/initiatives">Initiatives</NavLink>
          <NavLink href="/success-stories">Success Stories</NavLink>
          <NavLink href="/get-involved">Get Involved</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/initiatives">Initiatives</NavLink>
          <NavLink href="/success-stories">Success Stories</NavLink>
          <NavLink href="/get-involved">Get Involved</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </motion.div>
      )}
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="block py-2 hover:text-secondary transition-colors">
      {children}
    </Link>
  )
}