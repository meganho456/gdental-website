'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { FadeUp, ScaleReveal } from '@/components/animations'

const doctors = [
  {
    name: 'Dr. James Ho',
    credentials: 'D.M.D., M.P.H. — Harvard University',
    role: 'Managing Director & Principal Dentist',
    highlights: [
      'Platinum Elite Invisalign Provider',
      'One of few dentists in Asia certified in Pinhole Surgery Technique',
      'Over 20 years of experience across the US and Singapore',
      'Managing Director of G Dental Center global clinics',
    ],
    featured: true,
  },
  {
    name: 'Dr. Javious Lim',
    credentials: 'BDS — University of Dundee, UK',
    role: 'Associate Dentist',
    highlights: [
      'Trained in special needs dentistry, oral surgery & endodontics',
      'Specialises in implant dentistry and aesthetic dentistry',
      'Certified Invisalign provider',
      'Advocate for minimally invasive, stress-free dentistry',
    ],
    featured: false,
  },
  {
    name: 'Dr. Yao Xu',
    credentials: 'DDS — University of Minnesota; AEGD — NYU Langone Hospitals',
    role: 'Associate Dentist',
    highlights: [
      'Horace Wells Award — American Dental Society of Anesthesiology',
      'Advanced Education in General Dentistry from NYU Langone (Maui, Hawaii)',
      'Specialises in preventive dentistry, Invisalign & prosthodontics',
      'Gold Invisalign Provider',
    ],
    featured: false,
  },
]

export default function TeamPage() {
  return (
    <>
      <section className="pt-36 pb-20 hero-grid" style={{ background: '#000' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="section-label mb-5">Meet the Team</p>
            <h1
              className="headline-display text-white mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Dentists who{' '}
              <span style={{ color: '#C8A96E' }} className="italic">genuinely care.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Harvard, Dundee, Minnesota, NYU — our doctors bring world-class training and a warm, unhurried approach to every patient.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-py" style={{ background: '#F5F5F7' }}>
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {doctors.map((d) => (
            <ScaleReveal key={d.name} delay={0.05}>
              <div
                className="rounded-3xl p-8 md:p-12 border"
                style={d.featured
                  ? { background: '#1D1D1F', borderColor: 'rgba(200,169,110,0.3)' }
                  : { background: '#fff', borderColor: '#e5e7eb' }
                }
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    {d.featured && (
                      <p className="section-label mb-3">Principal Dentist</p>
                    )}
                    <h2
                      className="font-bold text-3xl mb-1"
                      style={{ color: d.featured ? '#fff' : '#111827', letterSpacing: '-0.02em' }}
                    >
                      {d.name}
                    </h2>
                    <p className="text-sm mb-1" style={{ color: '#C8A96E' }}>{d.credentials}</p>
                                    <p className="text-sm mb-4" style={{ color: d.featured ? 'rgba(255,255,255,0.5)' : '#6b7280' }}>
                      {d.role}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-4"
                      style={{ color: d.featured ? 'rgba(255,255,255,0.5)' : '#374151' }}
                    >
                      Highlights
                    </p>
                    <ul className="space-y-3">
                      {d.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: '#C8A96E' }} />
                          <span className="text-sm" style={{ color: d.featured ? 'rgba(255,255,255,0.7)' : '#4b5563' }}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScaleReveal>
          ))}
        </div>
      </section>

      <section className="section-py hero-grid" style={{ background: '#000' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="headline-display text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Ready to meet us?
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Book a consultation and experience the G Dental difference for yourself.
            </p>
            <Link href="/contact" className="btn-gold text-base px-10 py-4">
              Book a Consultation
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
