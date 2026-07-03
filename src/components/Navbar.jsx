import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ───── Logo ───── */}
          <a href="#home" className="flex items-center group">
            <Logo className="h-11 w-auto" />
          </a>

          {/* ───── Desktop Links ───── */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-sage-700 hover:text-sage-600 transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-sage-400 after:transition-all after:duration-300 after:rounded-full"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="gradient-cta rounded-full text-white text-sm font-medium px-6 py-2.5 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book a Session
            </a>
          </div>

          {/* ───── Mobile Hamburger ───── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 rounded-full bg-sage-800 transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full bg-sage-800 transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''
                }`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full bg-sage-800 transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
            />
          </button>
        </div>
      </div>

      {/* ───── Mobile Menu Overlay ───── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 top-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                className="text-2xl font-heading font-semibold text-sage-800 hover:text-sage-600 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * navLinks.length }}
              className="mt-4 gradient-cta rounded-full text-white font-medium px-8 py-3 shadow-lg text-lg"
            >
              Book a Session
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
