'use client'

import Link from 'next/link'
import { CheckCircle, ArrowRight, Star } from 'lucide-react'
import { FadeUp, ScaleReveal } from '@/components/animations'

const differentiators = [
  {
    title: 'Gentle-First Philosophy',
    body: 'We believe dental care should never feel like a punishment. Every patient receives unhurried, compassionate treatment — no guilt, no judgment.',
  },
  {
    title: 'Advanced Technology',
    body: 'Digital impressions, CBCT imaging, and guided implant surgery. Precision tools that make treatment faster, safer, and more comfortable.',
  },
  {
    title: 'Transparent Pricing',
    body: 'No surprise fees. We walk you through every cost before treatment begins so you can make informed, confident decisions.',
  },
]

const services = [
  { label: 'Dental Implants',        href: '/services#implants' },
  { label: 'Invisalign',             href: '/services#invisalign' },
  { label: 'Teeth Whitening',        href: '/services#whitening' },
  { label: 'Porcelain Veneers',      href: '/services#veneers' },
  { label: 'Crowns & Bridges',       href: '/services#crowns' },
  { label: 'Root Canal Treatment',   href: '/services#root-canal' },
  { label: 'Wisdom Tooth Removal',   href: '/services#wisdom-tooth' },
  { label: 'Check-ups & Scaling',    href: '/services#checkup' },
]

const testimonials = [
  {
    name: 'Sarah L.',
    text: 'The most comfortable dental experience I\'ve ever had. The team genuinely cares and explains everything clearly.',
    stars: 5,
  },
  {
    name: 'Marcus T.',
    text: 'I was anxious about getting implants but the doctor put me at ease immediately. Result looks completely natural.',
    stars: 5,
  },
  {
    name: 'Priya K.',
    text: 'Invisalign journey was seamless. Clear progress, minimal disruption to daily life, and a beautiful result.',
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-28 hero-grid"
        style={{ background: '#000' }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="section-label mb-5">G Dental Singapore</p>
            <h1
              className="headline-display text-white mb-6"
              style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
            >
              Dentistry that puts{' '}
              <span style={{ color: '#C8A96E' }} className="italic">you first.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Expert, gentle dental care in Singapore. From routine check-ups to smile transformations — we are with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold text-base px-8 py-3.5">
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="btn-outline text-base px-8 py-3.5"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
              >
                Our Services
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats Band */}
      <section style={{ background: '#1D1D1F' }}>
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '15+', label: 'Years of Experience' },
            { value: '5★',  label: 'Google Rating' },
            { value: '3,000+', label: 'Happy Patients' },
            { value: '2',   label: 'Convenient Locations' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold mb-1" style={{ color: '#C8A96E' }}>{s.value}</p>
              <p className="text-white/50 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-py" style={{ background: '#F5F5F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="section-label text-center mb-3">Why G Dental</p>
            <h2
              className="headline-section text-gray-900 text-center mb-14"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Care you can feel the difference in.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <ScaleReveal key={d.title} delay={i * 0.08}>
                <div className="tile-dark h-full">
                  <h3 className="font-bold text-white text-lg mb-3">{d.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{d.body}</p>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-py" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="section-label text-center mb-3">Services</p>
            <h2
              className="headline-section text-gray-900 text-center mb-14"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Everything your smile needs.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <ScaleReveal key={s.label} delay={i * 0.04}>
                <Link
                  href={s.href}
                  className="group flex items-center justify-between p-5 rounded-2xl border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50/40 transition-all"
                >
                  <span className="font-semibold text-gray-800 text-sm">{s.label}</span>
                  <ArrowRight size={14} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                </Link>
              </ScaleReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-gold px-8 py-3">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-py" style={{ background: '#F5F5F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="section-label text-center mb-3">Testimonials</p>
            <h2
              className="headline-section text-gray-900 text-center mb-14"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Patients who trust us with their smiles.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScaleReveal key={t.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 h-full">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} size={14} fill="#C8A96E" color="#C8A96E" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <p className="font-semibold text-gray-900 text-sm">— {t.name}</p>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-py hero-grid" style={{ background: '#000' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2
              className="headline-display text-white mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Ready for a smile you love?
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Book a comprehensive dental assessment. Our doctors will recommend the right treatments for your goals, timeline, and budget.
            </p>
            <Link href="/contact" className="btn-gold text-base px-10 py-4">
              Book an Appointment
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
