'use client'

import Link from 'next/link'
import { FadeUp, ScaleReveal } from '@/components/animations'

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-20 hero-grid" style={{ background: '#000' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="section-label mb-5">About G Dental</p>
            <h1
              className="headline-display text-white mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              A practice built on{' '}
              <span style={{ color: '#C8A96E' }} className="italic">trust.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              We believe exceptional dentistry starts with listening — understanding your goals before reaching for any instrument.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-py" style={{ background: '#F5F5F7' }}>
        <div className="max-w-5xl mx-auto px-6">
          <ScaleReveal>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 text-center">
              <p className="text-gray-400 text-sm">Practice story and clinic photos coming soon.</p>
              <p className="text-gray-400 text-xs mt-2">Fill in clinic details in <code>app/about/page.tsx</code>.</p>
            </div>
          </ScaleReveal>
        </div>
      </section>

      <section className="section-py hero-grid" style={{ background: '#000' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="headline-display text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Come visit us.
            </h2>
            <p className="text-white/60 text-lg mb-10">
              See our clinic, meet the team, and ask any questions — no commitment required.
            </p>
            <Link href="/contact" className="btn-gold text-base px-10 py-4">
              Get in Touch
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
