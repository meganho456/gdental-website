'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/team',     label: 'Our Doctors' },
  { href: '/faq',      label: 'FAQ' },
  { href: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          height: '80px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full grid grid-cols-3 items-center">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="rounded-full overflow-hidden flex-shrink-0"
              style={{ width: 38, height: 38 }}
            >
              <Image
                src="/logo.png"
                alt="G Dental"
                width={38}
                height={38}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
            <span className="font-bold text-base hidden sm:block" style={{ color: '#C8A96E' }}>
              G Dental
            </span>
          </Link>

          <div className="hidden lg:flex items-center justify-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center justify-end gap-4">
            <a
              href="tel:+6562621580"
              className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Phone size={14} />
              <span>+65 6262 1580</span>
            </a>
            <a href="/contact" className="btn-gold text-sm px-5 py-2.5">
              Book Now
            </a>
          </div>

          <button
            className="lg:hidden ml-auto flex items-center justify-center w-10 h-10 text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2.5">
              <div className="rounded-full overflow-hidden flex-shrink-0" style={{ width: 38, height: 38 }}>
                <Image src="/logo.png" alt="G Dental" width={38} height={38} className="w-full h-full object-cover object-center" />
              </div>
              <span className="font-bold text-lg" style={{ color: '#C8A96E' }}>G Dental</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-3xl font-bold text-white hover:text-yellow-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <a href="tel:+6562621580" className="btn-outline text-center py-4 text-lg">
              +65 6262 1580
            </a>
            <a href="/contact" className="btn-gold text-center py-4 text-lg" onClick={() => setOpen(false)}>
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </>
  )
}
