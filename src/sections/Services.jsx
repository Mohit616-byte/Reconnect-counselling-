import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/services'

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

const Services = () => {
  return (
    <section id="services" className="gradient-sage py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Healing Services"
          subtitle="Comprehensive therapeutic approaches tailored to your unique journey"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 card-hover shadow-sm"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-sage-50 flex items-center justify-center text-2xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-semibold text-sage-800 mt-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sage-600/80 text-sm mt-2 leading-relaxed">
                {service.description}
              </p>

              {/* Benefits */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2">
                  Benefits
                </p>
                <ul className="space-y-1.5">
                  {service.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-sage-600/80"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitable For */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-sage-700 uppercase tracking-wider mb-1">
                  Suitable for
                </p>
                <p className="text-sage-500 text-sm italic">
                  {service.suitableFor.join(', ')}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-sage-800">
            Ready to Begin Your Healing Journey?
          </h3>
          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3.5 rounded-full bg-sage-600 text-white font-medium hover:bg-sage-700 transition-colors shadow-lg shadow-sage-600/20"
          >
            Book a Session
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
