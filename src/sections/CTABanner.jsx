import { motion } from 'framer-motion'

const CTABanner = () => {
  return (
    <section className="gradient-cta py-20 px-4 relative overflow-hidden">
      {/* Decorative Floating Circles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-10 left-[10%] w-16 h-16 rounded-full bg-white/10"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-12 right-[15%] w-10 h-10 rounded-full bg-white/10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-[5%] w-8 h-8 rounded-full bg-white/10"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-8 right-[8%] w-6 h-6 rounded-full bg-white/10"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-8 left-[30%] w-12 h-12 rounded-full bg-white/10"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="max-w-7xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
          Ready to Transform Your Life?
        </h2>
        <p className="text-white/80 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          Take the first step towards emotional wellness. Book your session
          today and begin your journey to inner peace.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-sage-700 rounded-full px-8 py-4 text-lg font-medium mt-8 hover:bg-beige-50 transition shadow-lg cursor-pointer"
        >
          Book Your Session
        </motion.a>
      </motion.div>
    </section>
  )
}

export default CTABanner
