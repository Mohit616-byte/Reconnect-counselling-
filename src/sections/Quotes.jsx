import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { quotes } from '../data/quotes'

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
}

const Quotes = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 1])

  const paginate = useCallback(
    (newDirection) => {
      setCurrentIndex(([prev]) => {
        const next =
          newDirection > 0
            ? (prev + 1) % quotes.length
            : (prev - 1 + quotes.length) % quotes.length
        return [next, newDirection]
      })
    },
    []
  )

  // Auto-cycle every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(interval)
  }, [paginate])

  const goToSlide = (index) => {
    setCurrentIndex(([prev]) => [index, index > prev ? 1 : -1])
  }

  return (
    <section className="gradient-warm py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sage-500 font-heading text-lg tracking-wide">
            Words of Wisdom
          </span>
        </motion.div>

        {/* Quote Card */}
        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="glass rounded-3xl p-10 md:p-14 text-center max-w-3xl w-full shadow-lg relative">
                {/* Decorative quotation mark */}
                <span className="absolute top-4 left-6 text-8xl text-sage-200 font-heading leading-none select-none pointer-events-none">
                  &ldquo;
                </span>

                <p className="font-heading italic text-2xl md:text-3xl text-sage-700 leading-relaxed relative z-10 mb-6 pt-6">
                  {quotes[currentIndex].text}
                </p>

                <span className="text-sage-500 font-medium text-base">
                  — {quotes[currentIndex].author}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to quote ${index + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? 'w-8 h-3 bg-sage-500'
                  : 'w-3 h-3 bg-sage-300 hover:bg-sage-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Quotes
