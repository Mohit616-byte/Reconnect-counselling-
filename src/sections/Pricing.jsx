import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BookingModal from '../components/BookingModal'
import {
  quickSessions,
  standardSessions,
  deepSessions,
  premiumSessions,
  addOnServices,
  packages,
} from '../data/pricing'

const tabs = [
  { key: 'quick', label: 'Quick Support', data: quickSessions },
  { key: 'standard', label: 'Standard Therapy', data: standardSessions },
  { key: 'deep', label: 'Deep Healing', data: deepSessions },
  { key: 'premium', label: 'Premium Intensive', data: premiumSessions },
  { key: 'addons', label: 'Add-Ons', data: addOnServices },
  { key: 'packages', label: 'Packages', data: packages },
]

const contentVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: 'easeOut' },
  }),
}

/* Helpers for package styling */
const getPackageStyles = (title) => {
  if (title.includes('Silver'))
    return {
      border: 'border-sage-300',
      badge: 'bg-sage-100 text-sage-700',
      tag: null,
    }
  if (title.includes('Gold'))
    return {
      border: 'border-gold-400',
      badge: 'bg-gold-100 text-gold-700',
      tag: 'Popular',
    }
  if (title.includes('Platinum'))
    return {
      border: 'border-lavender-400',
      badge: 'bg-lavender-100 text-lavender-700',
      tag: 'Best Value',
      gradient: true,
    }
  return { border: 'border-sage-100', badge: 'bg-sage-100 text-sage-700', tag: null }
}

/* ── Session Card ──────────────────────────────────────────── */
const SessionCard = ({ item, index, onBook }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    className="bg-white rounded-2xl p-6 card-hover shadow-sm border border-sage-100 flex flex-col"
  >
    <h3 className="font-heading text-lg font-semibold text-sage-800">
      {item.title}
    </h3>

    {item.duration && (
      <span className="bg-sage-50 text-sage-600 rounded-full px-3 py-1 text-sm inline-block mt-2 w-fit">
        {item.duration}
      </span>
    )}

    <p className="font-heading text-3xl font-bold text-sage-700 mt-4">
      {item.price}
    </p>

    <p className="text-sage-600/70 text-sm mt-2 leading-relaxed flex-1">
      {item.description}
    </p>

    <button
      onClick={() => onBook(item)}
      className="block w-full mt-4 py-2.5 rounded-full border-2 border-sage-300 text-sage-600 hover:bg-sage-50 font-medium text-sm text-center transition-colors cursor-pointer"
    >
      Book Now
    </button>
  </motion.div>
)

/* ── Add-on Card ───────────────────────────────────────────── */
const AddOnCard = ({ item, index, onBook }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    className="bg-white rounded-2xl p-6 card-hover shadow-sm border border-sage-100 flex flex-col"
  >
    <h3 className="font-heading text-lg font-semibold text-sage-800">
      {item.title}
    </h3>

    <p className="font-heading text-3xl font-bold text-sage-700 mt-4">
      {item.price}
    </p>

    <p className="text-sage-600/70 text-sm mt-2 leading-relaxed flex-1">
      {item.description}
    </p>

    <button
      onClick={() => onBook(item)}
      className="block w-full mt-4 py-2.5 rounded-full border-2 border-sage-300 text-sage-600 hover:bg-sage-50 font-medium text-sm text-center transition-colors cursor-pointer"
    >
      Book Now
    </button>
  </motion.div>
)

/* ── Package Card ──────────────────────────────────────────── */
const PackageCard = ({ item, index, onBook }) => {
  const styles = getPackageStyles(item.title)

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`bg-white rounded-2xl p-6 card-hover shadow-sm border-2 ${styles.border} flex flex-col relative overflow-hidden ${
        styles.gradient
          ? 'ring-2 ring-lavender-200 ring-offset-2'
          : ''
      }`}
    >
      {/* Tag badge */}
      {styles.tag && (
        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${styles.badge}`}
        >
          {styles.tag}
        </span>
      )}

      <h3 className="font-heading text-lg font-semibold text-sage-800 pr-20">
        {item.title}
      </h3>

      {item.sessions && (
        <span
          className={`${styles.badge} rounded-full px-3 py-1 text-sm inline-block mt-2 w-fit font-medium`}
        >
          {item.sessions}
        </span>
      )}

      <p className="font-heading text-3xl font-bold text-sage-700 mt-4">
        {item.price}
      </p>

      <p className="text-sage-600/70 text-sm mt-2 leading-relaxed flex-1">
        {item.description}
      </p>

      <button
        onClick={() => onBook(item)}
        className={`block w-full mt-4 py-2.5 rounded-full font-medium text-sm text-center transition-colors cursor-pointer ${
          styles.tag === 'Popular'
            ? 'bg-sage-600 text-white hover:bg-sage-700'
            : 'border-2 border-sage-300 text-sage-600 hover:bg-sage-50'
        }`}
      >
        Get Started
      </button>
    </motion.div>
  )
}

/* ── Main Pricing Section ──────────────────────────────────── */
const Pricing = () => {
  const [activeTab, setActiveTab] = useState('quick')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedSession, setSelectedSession] = useState(null)

  const currentTab = tabs.find((t) => t.key === activeTab)

  const handleBook = (session) => {
    setSelectedSession(session)
    setModalOpen(true)
  }

  return (
    <section id="pricing" className="gradient-warm py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Session Fees"
          subtitle="Invest in your mental wellness with transparent, value-driven pricing"
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-sage-600 text-white shadow-md'
                  : 'bg-white text-sage-600 hover:bg-sage-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentTab.data.map((item, index) => {
                if (activeTab === 'packages') {
                  return (
                    <PackageCard key={item.id} item={item} index={index} onBook={handleBook} />
                  )
                }
                if (activeTab === 'addons') {
                  return (
                    <AddOnCard key={item.id} item={item} index={index} onBook={handleBook} />
                  )
                }
                return (
                  <SessionCard key={item.id} item={item} index={index} onBook={handleBook} />
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        session={selectedSession}
      />
    </section>
  )
}

export default Pricing
