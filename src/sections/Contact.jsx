import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

// WhatsApp target phone number (with country code, no + or spaces)
// Update this value to change the recipient number
const WHATSAPP_PHONE_NUMBER = '917417293592'

const contactCards = [
  {
    icon: FiPhone,
    title: '+91 7417293592',
    description: 'Call for immediate support',
  },
  {
    icon: FiMail,
    title: 'jainpritika826@gmail.com',
    description: 'Write to us anytime',
  },

]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) return

    const whatsappMessage = `Hello Prithika Sharma,

New Therapy Inquiry

Name: ${formData.name.trim()}
Email: ${formData.email.trim()}
Phone: ${formData.phone.trim()}

Message:
${formData.message.trim()}`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setFormData({ name: '', email: '', phone: '', message: '' })
    setErrors({})
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
  }

  const inputClasses =
    'w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-200 outline-none transition bg-sage-50/50 font-body'

  const errorInputClasses =
    'w-full px-4 py-3 rounded-xl border border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition bg-sage-50/50 font-body'

  return (
    <section id="contact" className="gradient-warm py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Begin Your Journey"
          subtitle="Take the first step towards emotional wellness and inner peace"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <h3 className="font-heading text-2xl text-sage-800 mb-4">
              Let's Connect
            </h3>
            <p className="text-sage-600/80 leading-relaxed mb-8">
              Whether you're ready to book a session or simply want to learn
              more, we're here for you. Reach out through any of the channels
              below, and we'll respond with warmth and care.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactCards.map((card, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center text-sage-600 flex-shrink-0">
                    <card.icon size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-sage-800">{card.title}</p>
                    <p className="text-sm text-sage-500">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://wa.me/7417293592"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white rounded-full px-6 py-3 font-medium inline-flex items-center gap-2 shadow-md"
              >
                <FiMessageCircle size={18} />
                WhatsApp
              </motion.a>
              <motion.a
                href="tel:+917417293592"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sage-600 text-white rounded-full px-6 py-3 font-medium inline-flex items-center gap-2 shadow-md"
              >
                <FiPhone size={18} />
                Call Now
              </motion.a>
              <motion.a
                href="mailto:hello@prithikasharma.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lavender-600 text-white rounded-full px-6 py-3 font-medium inline-flex items-center gap-2 shadow-md"
              >
                <FiMail size={18} />
                Email Us
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            custom={2}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm"
              noValidate
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-sage-700 mb-1.5 block"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={errors.name ? errorInputClasses : inputClasses}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-sage-700 mb-1.5 block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={errors.email ? errorInputClasses : inputClasses}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-sage-700 mb-1.5 block"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={errors.phone ? errorInputClasses : inputClasses}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-sage-700 mb-1.5 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={4}
                    className={`${errors.message ? errorInputClasses : inputClasses} resize-none`}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full gradient-cta text-white rounded-full py-3.5 font-medium text-lg mt-2 shadow-md cursor-pointer"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
