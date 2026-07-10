import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiMessageCircle } from 'react-icons/fi'

// WhatsApp target phone number (with country code, no + or spaces)
// Update this value to change the recipient number
const WHATSAPP_PHONE_NUMBER = '917417293592'

const BookingModal = ({ isOpen, onClose, session }) => {
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [errors, setErrors] = useState({})

  // Reset form when modal opens with a new session
  useEffect(() => {
    if (isOpen) {
      setCustomerName('')
      setCustomerPhone('')
      setErrors({})
    }
  }, [isOpen])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  const validate = () => {
    const newErrors = {}
    if (!customerName.trim()) {
      newErrors.name = 'Please enter your name'
    }
    if (!customerPhone.trim()) {
      newErrors.phone = 'Please enter your phone number'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePaymentComplete = () => {
    if (!validate()) return

    const message = `Hello Prithika Sharma,

I've completed the payment for a therapy session. Here are my details:

Session: ${session.title}
Price: ${session.price}
${session.duration ? `Duration: ${session.duration}\n` : ''}
Customer Name: ${customerName.trim()}
Customer Phone: ${customerPhone.trim()}

I will attach the payment screenshot in the next message.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    onClose()
  }

  if (!session) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 hover:bg-sage-200 transition-colors z-10 cursor-pointer"
              aria-label="Close modal"
            >
              <FiX size={18} />
            </button>

            {/* Header */}
            <div className="p-6 pb-0">
              <h3 className="font-heading text-xl font-semibold text-sage-800 pr-8">
                Book Session
              </h3>
              <p className="text-sage-500 text-sm mt-1">
                Complete payment and confirm via WhatsApp
              </p>
            </div>

            {/* Session Details */}
            <div className="mx-6 mt-4 p-4 bg-sage-50 rounded-xl">
              <p className="font-heading font-semibold text-sage-800">
                {session.title}
              </p>
              <div className="flex items-center gap-3 mt-2">
                {session.duration && (
                  <span className="bg-white text-sage-600 rounded-full px-3 py-0.5 text-sm">
                    {session.duration}
                  </span>
                )}
                {session.sessions && (
                  <span className="bg-white text-sage-600 rounded-full px-3 py-0.5 text-sm">
                    {session.sessions}
                  </span>
                )}
                <span className="font-heading text-xl font-bold text-sage-700">
                  {session.price}
                </span>
              </div>
            </div>

            {/* QR Code */}
            <div className="px-6 mt-4">
              <p className="text-sm font-medium text-sage-700 mb-2">
                Scan to pay via GPay / UPI
              </p>
              <div className="bg-sage-50 rounded-xl p-4 flex flex-col items-center">
                <img
                  src="/gpay-qr.jpeg"
                  alt="GPay QR Code - Scan to pay"
                  className="w-56 h-auto rounded-lg"
                />
                <p className="text-sage-500 text-xs mt-2 text-center">
                  UPI ID: jainpritika826@okhdfcbank
                </p>
              </div>
              <div className="mt-3 p-3 bg-lavender-50 rounded-xl">
                <p className="text-sage-700 text-sm leading-relaxed">
                  <strong>Instructions:</strong> Scan the QR code above with any UPI app (GPay, PhonePe, Paytm) and pay <strong>{session.price}</strong>. After payment, fill in your details below and click the button to confirm on WhatsApp. Please attach your payment screenshot.
                </p>
              </div>
            </div>

            {/* Customer Details Form */}
            <div className="px-6 mt-4 space-y-3">
              <div>
                <label
                  htmlFor="booking-name"
                  className="text-sm font-medium text-sage-700 mb-1 block"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="booking-name"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value)
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }))
                  }}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.name
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
                      : 'border-sage-200 focus:border-sage-400 focus:ring-sage-200'
                    } focus:ring-2 outline-none transition bg-sage-50/50 font-body text-sm`}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="booking-phone"
                  className="text-sm font-medium text-sage-700 mb-1 block"
                >
                  Your Phone
                </label>
                <input
                  type="tel"
                  id="booking-phone"
                  value={customerPhone}
                  onChange={(e) => {
                    setCustomerPhone(e.target.value)
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }))
                  }}
                  placeholder="+91 XXXXX XXXXX"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.phone
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
                      : 'border-sage-200 focus:border-sage-400 focus:ring-sage-200'
                    } focus:ring-2 outline-none transition bg-sage-50/50 font-body text-sm`}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>
                )}
              </div>
            </div>

            {/* Action Button */}
            <div className="p-6">
              <motion.button
                onClick={handlePaymentComplete}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-full font-medium text-white text-sm inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
                style={{ backgroundColor: '#25D366' }}
              >
                <FiMessageCircle size={18} />
                I've Completed Payment — Confirm on WhatsApp
              </motion.button>
              <p className="text-sage-400 text-xs text-center mt-3">
                You'll be redirected to WhatsApp to send your payment confirmation
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BookingModal
