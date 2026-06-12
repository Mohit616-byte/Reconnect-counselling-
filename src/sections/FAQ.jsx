import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { faqs } from '../data/faq'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="faq" className="gradient-sage py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about your healing journey"
        />

        <motion.div
          className="max-w-3xl mx-auto mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="bg-white rounded-2xl mb-4 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between cursor-pointer"
              >
                <span className="font-heading text-lg font-medium text-sage-800 pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sage-500 flex-shrink-0"
                >
                  <FiChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sage-600/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
