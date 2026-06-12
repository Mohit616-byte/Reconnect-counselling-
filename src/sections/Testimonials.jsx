import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data/testimonials'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false)

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 6)

  return (
    <section id="testimonials" className="gradient-lavender py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Client Stories"
          subtitle="Hear from those who have experienced transformation"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {visibleTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 card-hover shadow-sm flex flex-col"
            >
              {/* Decorative Quote */}
              <span className="text-4xl text-lavender-200 font-heading leading-none select-none">
                &ldquo;
              </span>

              {/* Testimonial Text */}
              <p className="text-sage-600/80 italic leading-relaxed text-sm flex-1 -mt-2">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-sage-100">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage-300 to-lavender-300 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  {testimonial.avatar}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sage-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-sage-500 truncate">
                    {testimonial.sessionType}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex text-gold-400 text-sm shrink-0">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More / View Less */}
        {testimonials.length > 6 && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-8 py-3 rounded-full border-2 border-lavender-300 text-lavender-600 hover:bg-lavender-50 font-medium text-sm transition-colors cursor-pointer"
            >
              {showAll ? 'View Less' : 'View More'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
