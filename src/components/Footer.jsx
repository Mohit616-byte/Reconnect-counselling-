import { FiPhone, FiMail, FiMessageCircle, FiInstagram, FiLinkedin } from 'react-icons/fi';
import Logo from './Logo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Individual Therapy',
  'Couples Counseling',
  'Anxiety & Stress Management',
  'Depression Support',
  'Career Counseling',
  'Mindfulness & Wellness',
];

const socials = [
  {
    icon: FiInstagram,
    href: 'https://www.instagram.com/onairpritika?utm_source=qr&igsh=bThiaGs2b3R4M251',
    label: 'Instagram',
  },
  {
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/pritika-sharma-5b4758213/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bfc7AAPynSe2eNqwxYIiS2g%3D%3D',
    label: 'LinkedIn',
  },
];

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ───── Column 1 · Brand ───── */}
          <div className="space-y-5">
            <div>
              <a href="#home">
                <Logo className="h-10 w-auto" variant="light" />
              </a>
              <p className="text-sage-300 text-sm mt-2">Counseling Psychologist</p>
            </div>

            <p className="text-sage-300/90 text-sm leading-relaxed">
              Empowering individuals to discover inner resilience and lead a
              balanced, fulfilling life through compassionate guidance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-sage-600 flex items-center justify-center text-sage-300 hover:bg-white hover:text-sage-800 hover:border-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ───── Column 2 · Quick Links ───── */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sage-300 hover:text-white hover:pl-1 transition-all duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ───── Column 3 · Services ───── */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sage-300 hover:text-white hover:pl-1 transition-all duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ───── Column 4 · Contact ───── */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiPhone className="w-5 h-5 text-sage-400 mt-0.5 shrink-0" />
                <span className="text-sage-300 text-sm">[+91 7417293592]</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="w-5 h-5 text-sage-400 mt-0.5 shrink-0" />
                <span className="text-sage-300 text-sm">[jainpritika826@gmail.com]</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMessageCircle className="w-5 h-5 text-sage-400 mt-0.5 shrink-0" />
                <span className="text-sage-300 text-sm">[+91 7417293592]</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ───── Divider + Copyright ───── */}
        <div className="border-t border-sage-700 mt-12 pt-8 text-center">
          <p className="text-sage-400 text-sm">
            © 2026 Reconnect Counselling. All Rights Reserved. | Designed and developed by <a href="https://monkovatechnologies.com/">Monkova Technologies</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
