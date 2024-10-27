'use client'

import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'

export default function GetInvolved() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ name, email, interest, message })
    alert('Thank you for your interest! We will get back to you soon.')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection
        className="text-4xl font-bold mb-8 text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Get Involved</h1>
      </AnimatedSection>
      <AnimatedSection
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="interest" className="block text-gray-700 font-bold mb-2">Area of Interest</label>
            <select
              id="interest"
              className="w-full px-3 py-2 border rounded-md"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              required
            >
              <option value="">Select an area</option>
              <option value="renewable-energy">Renewable Energy</option>
              <option value="womens-safety">Women's Safety</option>
              <option value="inclusive-education">Inclusive Education</option>
              <option value="equality">Equality</option>
              <option value="sports">Sports</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded-md"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
            Submit
          </button>
        </form>
      </AnimatedSection>
    </div>
  )
}