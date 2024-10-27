import AnimatedSection from '../components/AnimatedSection'

const stories = [
  { 
    title: 'Solar-Powered Village', 
    description: 'How a small village in Rajasthan became energy independent through our solar power initiative.',
    impact: '500 households now have access to clean, renewable energy.'
  },
  { 
    title: 'Women Entrepreneurs', 
    description: 'A group of women in Mumbai started their own businesses with the help of our skill development program.',
    impact: '50 new women-led businesses created, employing over 200 people.'
  },
  { 
    title: 'Inclusive School Model', 
    description: 'A school in Chennai implemented our inclusive education model, becoming a beacon for others.',
    impact: '100% increase in enrollment of children with special needs.'
  },
  { 
    title: 'Sports for All', 
    description: 'A rural community in Bihar embraced our sports initiative, leading to the discovery of young talents.',
    impact: '5 athletes selected for state-level competitions.'
  },
]

export default function SuccessStories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection
        className="text-4xl font-bold mb-8 text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Success Stories</h1>
      </AnimatedSection>
      <div className="grid gap-8">
        {stories.map((story, index) => (
          <AnimatedSection
            key={story.title}
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-secondary">{story.title}</h2>
            <p className="mb-4 text-gray-700">{story.description}</p>
            <div className="bg-primary-light p-4 rounded-md">
              <h3 className="font-semibold text-primary mb-2">Impact:</h3>
              <p className="text-gray-800">{story.impact}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}