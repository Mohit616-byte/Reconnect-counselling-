import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const trustIndicators = [
  { emoji: '🏆', label: '5+ Years Experience' },
  { emoji: '💻', label: 'Virtual & Personal Consultations' },
  { emoji: '🔒', label: 'Confidential Sessions' },
  { emoji: '🌿', label: 'Holistic Healing Approach' },
]

const Hero = () => {
  return (
    <section id="home" className="min-h-screen gradient-hero">
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-lavender-100 text-lavender-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                ✨ Welcome to Your Healing Journey
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-sage-800 leading-tight"
            >
              Compassionate Guidance for Emotional Healing, Inner Balance & Personal Transformation
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-sage-600/80 mt-6"
            >
              Mental Health Expert | Counseling Psychologist | Holistic Wellness Guide | Psychiatry Nutrition Specialist
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="gradient-cta text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-shadow cursor-pointer inline-block"
              >
                Book a Session
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-sage-400 text-sage-700 rounded-full px-8 py-4 text-lg font-medium hover:bg-sage-50 transition-colors cursor-pointer inline-block"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            >
              {trustIndicators.map((item) => (
                <div
                  key={item.label}
                  className="glass p-4 text-center rounded-2xl"
                >
                  <span className="text-2xl block mb-1">{item.emoji}</span>
                  <span className="text-sm text-sage-700 font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            {/* Decorative Floating Elements */}
            <div className="float-element absolute -top-6 -left-4 w-16 h-16 bg-lavender-200 rounded-full opacity-60" />
            <div className="float-element absolute top-20 -right-6 w-12 h-12 bg-sage-200 rounded-full opacity-60" style={{ animationDelay: '1s' }} />
            <div className="float-element absolute bottom-16 -left-8 w-10 h-10 bg-sage-200 rounded-full opacity-50" style={{ animationDelay: '2s' }} />
            <div className="float-element absolute -bottom-4 right-8 w-14 h-14 bg-lavender-200 rounded-full opacity-50" style={{ animationDelay: '3s' }} />
            <div className="float-element absolute top-1/2 -right-10 w-8 h-8 bg-beige-200 rounded-full opacity-40" style={{ animationDelay: '4s' }} />

            {/* Portrait */}
            <div className="aspect-[3/4] max-w-md w-full mx-auto rounded-3xl shadow-xl relative overflow-hidden ring-4 ring-sage-200/50 ring-offset-4 ring-offset-beige-50">
              <img
                src="/prithika-portrait.jpg"
                alt="Prithika Sharma — Counseling Psychologist"
                className="w-full h-full object-cover object-top"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
