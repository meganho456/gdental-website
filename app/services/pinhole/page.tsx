'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CheckCircle, ArrowRight, Plus, Minus, Phone } from 'lucide-react'
import { FadeUp, ScaleReveal } from '@/components/animations'

const steps = [
  {
    number: '01',
    title: 'Assessment & Planning',
    body: 'A comprehensive periodontal evaluation is carried out, including digital X-rays. Dr. James Ho will map the extent of recession, assess your bone levels, and confirm that your gum health is suitable for the procedure.',
  },
  {
    number: '02',
    title: 'Local Anaesthesia',
    body: 'The treatment area is numbed with local anaesthesia. Most patients report feeling only gentle pressure during the procedure — no sharp sensations.',
  },
  {
    number: '03',
    title: 'Pinhole Entry',
    body: 'A single, small entry point — roughly the size of a needle tip — is created in the gum tissue near the affected teeth. No incisions, no scalpel.',
  },
  {
    number: '04',
    title: 'Tissue Repositioning',
    body: 'Using specially designed instruments, the existing gum tissue is gently loosened and guided downward to cover the exposed tooth roots. The tissue is moved, not removed.',
  },
  {
    number: '05',
    title: 'Collagen Stabilisation',
    body: 'Small collagen strips are placed through the pinhole to support the repositioned tissue and encourage it to hold its new position as it heals.',
  },
  {
    number: '06',
    title: 'Same-Day Recovery',
    body: 'There are no sutures to manage. The pinhole closes on its own within a day. Most patients leave the clinic and resume their normal routine the same afternoon.',
  },
]

const benefits = [
  { title: 'No cutting or suturing', body: 'The entire procedure is carried out through a tiny pinhole entry. There is no scalpel, no incision line, and no stitches to heal.' },
  { title: 'No graft donor site', body: 'Traditional grafting removes tissue from the roof of the mouth, creating a second wound. PST works entirely with your existing gum tissue — one treatment area only.' },
  { title: 'Multiple teeth in one visit', body: 'Because the approach is so efficient, several adjacent teeth can be treated in the same appointment — something conventional grafting cannot practically achieve.' },
  { title: 'Immediate visible improvement', body: 'Gum coverage is visible straight away. Patients see the aesthetic result before they leave the clinic.' },
  { title: 'Minimal post-procedure discomfort', body: 'Without cutting and suturing, healing is considerably more comfortable than traditional grafting. Over-the-counter pain relief is typically sufficient.' },
  { title: 'Long-lasting outcomes', body: 'Clinical studies show stable, durable gum coverage following PST when maintained with good oral hygiene and regular periodontal check-ups.' },
]

const faqs = [
  {
    q: 'How is Pinhole Surgery different from a traditional gum graft?',
    a: 'Gum grafting involves cutting a strip of tissue from your palate, transplanting it to the recession site, and suturing it in place — creating two surgical wounds and a 1–2 week recovery. The Pinhole Surgical Technique achieves the same clinical goal of covering exposed roots, but does so by repositioning your existing gum tissue through a single tiny entry point. No donor site, no sutures, and significantly less recovery time.',
  },
  {
    q: 'Is the procedure painful?',
    a: 'The treatment is performed under local anaesthesia so you should feel only mild pressure, not pain. Post-procedure discomfort is typically well-managed with standard over-the-counter medication. Most patients describe recovery as far more comfortable than they anticipated.',
  },
  {
    q: 'How many teeth can be treated at once?',
    a: 'This is one of the standout advantages of PST. Multiple teeth — often an entire arch — can be treated in a single session. Traditional grafting is generally limited to treating one or two teeth per visit due to the constraints of harvesting graft tissue.',
  },
  {
    q: 'Who is suitable for Pinhole Surgery?',
    a: 'PST works well for patients with mild to moderate gum recession who have otherwise healthy periodontal tissue and bone. Active gum disease must be treated and resolved before the procedure can be performed. Dr. James Ho will carry out a full assessment to confirm you are a good candidate.',
  },
  {
    q: 'What causes gum recession in the first place?',
    a: 'The most common causes are aggressive tooth brushing, gum disease (periodontitis), teeth grinding (bruxism), genetic predisposition to thin gum tissue, and orthodontic treatment that moves teeth beyond the natural bone envelope. Addressing the underlying cause is an important part of ensuring lasting results after PST.',
  },
  {
    q: 'What happens if gum recession is left untreated?',
    a: 'Recession exposes the tooth root, which has no enamel protection. This leads to sensitivity to temperature and touch, increased risk of root cavities, and — if recession progresses — eventual tooth mobility and loss. Treating recession early preserves both the tooth and the surrounding bone.',
  },
  {
    q: 'How long do the results last?',
    a: 'Published clinical data shows that PST produces stable gum coverage that holds well over time. Long-term results depend on maintaining good brushing technique (soft brush, gentle pressure), regular professional cleaning, and treating any underlying causes such as bruxism.',
  },
  {
    q: 'Where can I get Pinhole Surgery in Singapore?',
    a: 'G Dental offers the Pinhole Surgical Technique at our Singapore clinic. Dr. James Ho (D.M.D., M.P.H., Harvard University) is one of the very few dentists in Asia who holds certification in this procedure.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 text-sm leading-relaxed">{q}</span>
        <span className="shrink-0 mt-0.5" style={{ color: '#C8A96E' }}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <p className="text-gray-600 text-sm leading-relaxed pb-5 pr-8">{a}</p>
      )}
    </div>
  )
}

export default function PinholePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 hero-grid" style={{ background: '#000' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="section-label mb-5">Minimally Invasive Periodontics</p>
            <h1
              className="headline-display text-white mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Restore your gums.<br />
              <span style={{ color: '#C8A96E' }} className="italic">No cutting. No stitches.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              The Pinhole Surgical Technique is a breakthrough approach to gum recession — repositioning your existing tissue through a pinhole entry, with same-day recovery and immediate results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold text-base px-8 py-3.5">
                Book a Consultation
              </Link>
              <a
                href="tel:+6562621580"
                className="btn-outline text-base px-8 py-3.5 flex items-center justify-center gap-2"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
              >
                <Phone size={16} /> +65 6262 1580
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What is gum recession */}
      <section className="section-py" style={{ background: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <p className="section-label mb-3">Understanding the Problem</p>
              <h2 className="headline-section text-gray-900 mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                What is gum recession — and why does it matter?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Gum recession occurs when the gum tissue surrounding the teeth gradually pulls back, leaving the root surface exposed. It is more common than most people realise — and often progresses unnoticed because it happens slowly over time.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Exposed roots have no enamel layer, making them vulnerable to sensitivity, decay, and wear. Left unaddressed, recession can advance to the point where the tooth structure and supporting bone are compromised.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Common contributing factors include aggressive brushing, periodontal disease, teeth grinding, thin gum tissue by genetic predisposition, and certain orthodontic movements.
              </p>
            </FadeUp>
            <ScaleReveal>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: '50%+', desc: 'of adults over 40 have some degree of gum recession' },
                  { stat: 'Painless', desc: 'recession often goes unnoticed until sensitivity or aesthetics change' },
                  { stat: '1 visit', desc: 'to treat multiple teeth with the Pinhole technique' },
                  { stat: 'Same day', desc: 'recovery — most patients return to normal activity immediately' },
                ].map((s) => (
                  <div key={s.stat} className="tile-dark">
                    <p className="text-2xl font-bold mb-2" style={{ color: '#C8A96E' }}>{s.stat}</p>
                    <p className="text-white/55 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </ScaleReveal>
          </div>
        </div>
      </section>

      {/* PST vs Grafting comparison */}
      <section className="section-py" style={{ background: '#F5F5F7' }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="section-label text-center mb-3">Treatment Comparison</p>
            <h2 className="headline-section text-gray-900 text-center mb-12" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
              Pinhole Surgery vs. Traditional Gum Grafting
            </h2>
          </FadeUp>
          <ScaleReveal>
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-wide">
                <div className="p-5 border-b border-gray-100" />
                <div className="p-5 border-b border-l border-gray-100 text-center" style={{ color: '#C8A96E' }}>
                  Pinhole Surgery
                </div>
                <div className="p-5 border-b border-l border-gray-100 text-center text-gray-400">
                  Traditional Gum Graft
                </div>
              </div>
              {[
                ['Incisions', 'Pinhole entry only', 'Scalpel incision + palate donor site'],
                ['Sutures', 'None', 'Required at both sites'],
                ['Teeth per visit', 'Multiple teeth', 'Usually 1–2 teeth'],
                ['Recovery time', 'Same day for most', '1–2 weeks'],
                ['Post-op discomfort', 'Minimal', 'Moderate to significant'],
                ['Visible results', 'Immediate', 'After swelling resolves (weeks)'],
                ['Donor tissue needed', 'No — uses existing gum', 'Yes — harvested from palate'],
              ].map(([label, pst, graft], i) => (
                <div key={label} className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-gray-50/50' : ''}`}>
                  <div className="p-5 text-sm font-semibold text-gray-700">{label}</div>
                  <div className="p-5 border-l border-gray-100 text-sm text-center text-gray-700 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle size={13} style={{ color: '#C8A96E' }} className="shrink-0" />
                      {pst}
                    </span>
                  </div>
                  <div className="p-5 border-l border-gray-100 text-sm text-center text-gray-400">{graft}</div>
                </div>
              ))}
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="section-py" style={{ background: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="section-label text-center mb-3">The Procedure</p>
            <h2 className="headline-section text-gray-900 text-center mb-14" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
              What happens during your appointment
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <ScaleReveal key={s.number} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 h-full">
                  <p className="text-4xl font-bold mb-4" style={{ color: 'rgba(200,169,110,0.25)' }}>{s.number}</p>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-py" style={{ background: '#F5F5F7' }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="section-label text-center mb-3">Why Patients Choose PST</p>
            <h2 className="headline-section text-gray-900 text-center mb-14" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
              The advantages, plainly stated
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <ScaleReveal key={b.title} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 flex gap-4">
                  <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#C8A96E' }} />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{b.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{b.body}</p>
                  </div>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor credentials */}
      <section className="section-py hero-grid" style={{ background: '#1D1D1F' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <p className="section-label mb-4">Certified Expertise</p>
              <h2 className="headline-section text-white mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                One of Asia&apos;s few certified Pinhole providers
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                The Pinhole Surgical Technique requires specialised certification from Dr. John Chao, the procedure&apos;s inventor. Certification involves direct training, and only a small number of dentists across Asia have completed it.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                At G Dental, the procedure is performed exclusively by <strong className="text-white">Dr. James Ho</strong>, who holds a Doctor of Dental Medicine (D.M.D.) and Master of Public Health (M.P.H.) from Harvard University, with over 20 years of clinical experience across the US and Singapore.
              </p>
              <Link href="/team" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#C8A96E' }}>
                Meet Dr. James Ho <ArrowRight size={14} />
              </Link>
            </FadeUp>
            <ScaleReveal>
              <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(200,169,110,0.2)' }}>
                <p className="text-white font-bold text-xl mb-1">Dr. James Ho</p>
                <p className="text-sm mb-6" style={{ color: '#C8A96E' }}>D.M.D., M.P.H. — Harvard University</p>
                <ul className="space-y-3">
                  {[
                    'Certified in the Pinhole Surgical Technique',
                    'One of few certified PST providers in Asia',
                    'Platinum Elite Invisalign Provider',
                    'Over 20 years of clinical experience',
                    'Managing Director, G Dental Center',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: '#C8A96E' }} />
                      <span className="text-white/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleReveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-py" style={{ background: '#fff' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <p className="section-label text-center mb-3">FAQ</p>
            <h2 className="headline-section text-gray-900 text-center mb-12" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
              Common questions about Pinhole Surgery
            </h2>
          </FadeUp>
          <ScaleReveal>
            <div className="bg-white rounded-3xl px-8 py-2 border border-gray-200">
              {faqs.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py hero-grid" style={{ background: '#000' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="headline-display text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Find out if Pinhole Surgery is right for you.
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Book a periodontal assessment with Dr. James Ho at our Singapore clinic. We will evaluate your gum recession, explain all available options, and give you an honest recommendation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold text-base px-10 py-4">
                Book an Assessment
              </Link>
              <Link
                href="/services"
                className="btn-outline text-base px-8 py-4"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
              >
                View All Services
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
