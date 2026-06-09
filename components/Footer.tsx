import Link from 'next/link'
import Image from 'next/image'
import { Star, MapPin, Phone, Mail, Clock } from 'lucide-react'

const services = [
  'Dental Implants', 'Invisalign', 'Teeth Whitening',
  'Veneers', 'Crowns & Bridges', 'Wisdom Tooth Removal',
  'Root Canal', 'Children\'s Dentistry',
]

const practiceLinks = [
  { href: '/team',     label: 'Our Doctors' },
  { href: '/about',    label: 'Our Practice' },
  { href: '/services', label: 'All Services' },
  { href: '/faq',      label: 'FAQ' },
  { href: '/contact',  label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="rounded-full overflow-hidden flex-shrink-0" style={{ width: 36, height: 36 }}>
                <Image
                  src="/logo.png"
                  alt="G Dental"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="font-bold text-lg" style={{ color: '#C8A96E' }}>G Dental</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Gentle, expert dental care in Singapore. No guilt, no judgement — just exceptional dentistry.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#C8A96E" color="#C8A96E" />
              ))}
              <span className="text-white/50 text-xs ml-2">5.0 · reviews</span>
            </div>
          </div>

          <div>
            <p className="section-label mb-5">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/50 hover:text-white text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-5">Practice</p>
            <ul className="space-y-2.5">
              {practiceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">
                  Camden Medical Centre<br />
                  1 Orchard Blvd, #02-01<br />
                  Singapore 248649
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">
                  25 Ghim Moh Link<br />
                  #01-04/05<br />
                  Singapore 270025
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">
                  <a href="tel:+6562621580" className="hover:text-white transition-colors block">+65 6262 1580</a>
                  <a href="tel:+6584829694" className="hover:text-white transition-colors block">+65 8482 9694</a>
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">
                  Mon, Wed, Fri: 10:00–18:00<br />
                  Tue, Thu: 10:00–20:00<br />
                  Sat: 10:00–17:00<br />
                  Sun: Closed
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                <a href="mailto:gdcsmilestaff@gmail.com" className="text-white/50 hover:text-white text-sm transition-colors">
                  gdcsmilestaff@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} G Dental. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Designed by Megan Ho
          </p>
          <p className="text-white/20 text-xs max-w-lg text-center md:text-right">
            The content on this site is for informational purposes only and does not constitute medical advice. Always consult a qualified dental professional for treatment decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
