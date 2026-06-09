'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { FadeUp, ScaleReveal } from '@/components/animations'

const faqs = [
  {
    category: 'General',
    items: [
      {
        q: 'Where is G Dental located in Singapore?',
        a: 'G Dental has two clinics in Singapore. Our Orchard clinic is at Camden Medical Centre, 1 Orchard Boulevard #02-01, Singapore 248649. Our West clinic is at 25 Ghim Moh Link #01-04/05, Singapore 270025.',
      },
      {
        q: 'What are G Dental\'s opening hours?',
        a: 'We are open Monday, Wednesday and Friday from 10am–6pm; Tuesday and Thursday from 10am–8pm (late evenings for working professionals); and Saturday from 10am–5pm. We are closed on Sundays.',
      },
      {
        q: 'How do I book an appointment at G Dental?',
        a: 'You can book via our online contact form, WhatsApp (+65 8482 9694), or call us at +65 6262 1580. Same-day emergency appointments are available when acute pain or infection arises.',
      },
      {
        q: 'Which languages does G Dental speak?',
        a: 'Our clinical team speaks English, Mandarin, and Cantonese, ensuring clear communication with a wide range of patients.',
      },
      {
        q: 'What payment methods does G Dental accept?',
        a: 'We accept Cash, Credit Card, NETS, and PayNow. CHAS subsidies and Medisave may be applicable for certain treatments — ask our front desk at your visit.',
      },
    ],
  },
  {
    category: 'Invisalign',
    items: [
      {
        q: 'Is G Dental a certified Invisalign provider in Singapore?',
        a: 'Yes. G Dental holds Platinum Elite Invisalign Provider status — one of the highest tiers awarded by Align Technology, reflecting our volume of successfully completed cases and clinical expertise.',
      },
      {
        q: 'How much does Invisalign cost in Singapore?',
        a: 'Invisalign costs vary depending on case complexity — from Lite cases for minor crowding to Comprehensive for complex bite corrections. We offer a complimentary Invisalign consultation where you will receive a personalised treatment plan and transparent pricing before committing.',
      },
      {
        q: 'How long does Invisalign treatment take?',
        a: 'Treatment duration depends on case complexity. Minor cases can take as little as 3–6 months, while comprehensive cases typically take 12–18 months. G Dental also offers AcceleDent as an add-on to reduce treatment time by up to 50%.',
      },
      {
        q: 'Can adults get Invisalign?',
        a: 'Absolutely. Invisalign is popular with adults precisely because the aligners are virtually invisible and removable — there are no food restrictions and they fit seamlessly into professional and social life.',
      },
    ],
  },
  {
    category: 'Dental Implants',
    items: [
      {
        q: 'What is a dental implant and how does it work?',
        a: 'A dental implant is a titanium post surgically placed into the jawbone, acting as an artificial tooth root. A porcelain crown is then attached on top, creating a replacement tooth that looks, feels, and functions like a natural one. Implants preserve jawbone density and do not affect adjacent teeth.',
      },
      {
        q: 'Am I suitable for dental implants in Singapore?',
        a: 'Most adults with good general health are candidates for implants. A CBCT bone density scan is required before treatment to confirm sufficient jaw bone. Conditions such as uncontrolled diabetes or heavy smoking may affect healing and suitability — our doctors will assess your case thoroughly.',
      },
      {
        q: 'How long do dental implants last?',
        a: 'With proper care — regular brushing, flossing, and biannual check-ups — dental implants can last a lifetime. The crown on top may need replacement after 15–20 years due to normal wear.',
      },
    ],
  },
  {
    category: 'Pinhole Surgery',
    items: [
      {
        q: 'What is the Pinhole Surgical Technique for gum recession?',
        a: 'The Pinhole Surgical Technique (PST) is a minimally invasive, scalpel-free procedure for treating gum recession. Instead of cutting and grafting, a small pin-hole is made and existing gum tissue is gently repositioned over the exposed root. There are no sutures, no donor site, and most patients return to normal activity the same day.',
      },
      {
        q: 'Who performs the Pinhole Surgical Technique at G Dental?',
        a: 'Dr. James Ho (D.M.D., M.P.H., Harvard) performs the Pinhole Surgical Technique at G Dental. He is one of the very few dentists in Asia who is certified to perform this procedure.',
      },
      {
        q: 'How is Pinhole Surgery different from traditional gum grafting?',
        a: 'Traditional gum grafting involves cutting tissue from the palate (donor site) and suturing it onto the recession area — which involves two surgical wounds and a longer recovery. PST uses only a small pin-hole incision to reposition existing tissue. Multiple teeth can be treated in a single session with dramatically faster healing.',
      },
    ],
  },
  {
    category: 'Cosmetic Dentistry',
    items: [
      {
        q: 'What cosmetic dental treatments does G Dental offer?',
        a: 'G Dental offers professional teeth whitening (in-chair and take-home), porcelain veneers, composite veneers, Invisalign clear aligners, and smile makeover planning that may combine multiple treatments.',
      },
      {
        q: 'How many shades whiter can teeth whitening achieve?',
        a: 'Professional in-chair whitening can lighten teeth by up to 8 shades in a single one-hour session. Results vary by individual tooth colour and lifestyle habits. Take-home kits offer more gradual whitening over 1–2 weeks.',
      },
      {
        q: 'What is the difference between porcelain and composite veneers?',
        a: 'Porcelain veneers are lab-crafted, stain-resistant, and last 10–15 years or more with good care — they require minimal tooth preparation. Composite veneers are applied chair-side in one visit, are more affordable, and are fully reversible, but are less stain-resistant and typically last 5–7 years. Our doctors will recommend the best option for your goals and budget.',
      },
    ],
  },
  {
    category: 'Routine Care',
    items: [
      {
        q: 'How often should I visit the dentist for check-ups?',
        a: 'Every 6 months is the standard recommendation for most patients. Regular visits allow early detection of cavities, gum disease, and oral cancer — catching issues before they become expensive or painful to treat.',
      },
      {
        q: 'Does G Dental treat children?',
        a: 'Yes, G Dental provides children\'s dentistry in a gentle, non-threatening environment. Early dental visits (from age 1–2) establish good habits and allow early detection of developmental issues.',
      },
      {
        q: 'Is root canal treatment painful?',
        a: 'Modern root canal treatment with adequate local anaesthesia is no more uncomfortable than a routine filling. Most patients are surprised at how straightforward it is. The procedure relieves the pain caused by infection — it does not cause it.',
      },
    ],
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

export default function FAQPage() {
  return (
    <>
      <section className="pt-36 pb-20 hero-grid" style={{ background: '#000' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="section-label mb-5">FAQ</p>
            <h1
              className="headline-display text-white mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Questions patients{' '}
              <span style={{ color: '#C8A96E' }} className="italic">actually ask.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Honest answers about our treatments, pricing approach, and what to expect at G Dental.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-py" style={{ background: '#F5F5F7' }}>
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {faqs.map((section) => (
            <ScaleReveal key={section.category} delay={0.05}>
              <div className="bg-white rounded-3xl px-8 py-6 border border-gray-200">
                <p className="section-label mb-4">{section.category}</p>
                {section.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </ScaleReveal>
          ))}
        </div>
      </section>

      <section className="section-py hero-grid" style={{ background: '#000' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="headline-display text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Still have questions?
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Our team is happy to answer anything before you book. No obligation, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold text-base px-8 py-3.5">
                Contact Us
              </Link>
              <a
                href="https://wa.me/6584829694"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base px-8 py-3.5"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
              >
                WhatsApp Us
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
