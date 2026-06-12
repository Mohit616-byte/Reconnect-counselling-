import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      {hovered && (
        <motion.span
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 8 }}
          className="bg-white text-sage-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
        >
          Chat with us
        </motion.span>
      )}

      {/* Button */}
      <motion.a
        href="https://wa.me/7417293592"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <FiMessageCircle className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
}
