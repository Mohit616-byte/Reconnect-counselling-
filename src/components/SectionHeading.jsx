import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-sage-800">
        {title}
      </h2>

      {/* Decorative gradient line */}
      <div
        className={`w-20 h-1 rounded-full mt-4 bg-gradient-to-r from-sage-400 to-lavender-400 ${
          centered ? 'mx-auto' : ''
        }`}
      />

      {subtitle && (
        <p
          className={`text-lg text-sage-600/80 mt-4 max-w-2xl ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
