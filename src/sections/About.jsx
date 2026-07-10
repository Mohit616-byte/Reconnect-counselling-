import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const tags = [
  'Emotional Resilience',
  'Inner Clarity',
  'Personal Growth',
  'Mental Wellness',
  'Self-Love',
  'Authentic Living',
]

const About = () => {
  return (
    <section id="about" className="gradient-lavender">
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <SectionHeading
          title="About PRITIKA SHARMA"
          subtitle="A journey of compassion, healing, and transformation"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column — Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-md w-full mx-auto rounded-3xl shadow-xl overflow-hidden ring-4 ring-lavender-200/50 ring-offset-4 ring-offset-lavender-50">
              <img
                src="/prithika-portrait.jpg"
                alt="Pritika Sharma — About"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Overlapping accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:right-4 glass rounded-2xl px-6 py-4 shadow-lg"
            >
              <span className="text-2xl block mb-1">💜</span>
              <span className="text-sage-800 font-heading font-semibold text-lg">
                5+ Years of Healing
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <p className="text-sage-700 leading-relaxed text-lg">
              Pritika Sharma is a compassionate Mental Health Expert, Counseling
              Psychologist, Holistic Wellness Guide, and Psychiatry Nutrition
              Specialist with over 5 years of experience supporting individuals
              through emotional challenges, anxiety, relationship concerns, stress,
              life transitions, self-discovery, and personal growth.
            </p>

            <p className="text-sage-700 leading-relaxed text-lg">
              Her approach combines psychological expertise, emotional
              understanding, holistic wellness practices, mindfulness, healing
              techniques, and spiritual guidance to create a safe, empowering, and
              transformative healing experience.
            </p>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-2xl p-6 border-l-4 border-sage-500"
            >
              <h3 className="font-heading text-xl font-semibold text-sage-800 mb-3">
                My Mission
              </h3>
              <p className="text-sage-600 leading-relaxed">
                To empower every individual with emotional resilience, inner clarity,
                and personal growth — nurturing mental wellness, self-love, and the
                courage to live authentically. I believe healing is not just about
                overcoming struggles, but about discovering your truest self and
                building a life rooted in purpose and peace.
              </p>
            </motion.div>

            {/* Tag Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-sage-100 text-sage-700 rounded-full px-3 py-1 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
