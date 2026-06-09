'use client'

import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { FadeUp, ScaleReveal } from '@/components/animations'

const services = [
  {
    id: 'implants',
    tag: 'Surgical',
    title: 'Dental Implants',
    headline: 'A permanent solution that looks and feels natural.',
    description: [
      'Dental implants are the gold standard for tooth replacement. A titanium post is placed into the jawbone, providing a stable foundation for a crown that looks, feels, and functions like a natural tooth.',
      'Unlike dentures or bridges, implants preserve jawbone density and don\'t require altering adjacent healthy teeth. With proper care, implants can last a lifetime.',
    ],
    benefits: ['Permanent, long-lasting solution', 'Preserves jawbone and facial structure', 'No impact on adjacent teeth', 'Natural look, feel, and bite force', 'Easy to clean — brush and floss normally', 'Suitable for single or multiple missing teeth'],
    note: 'A bone density assessment is required before treatment to confirm suitability.',
  },
  {
    id: 'invisalign',
    tag: 'Orthodontics',
    title: 'Invisalign Clear Aligners',
    headline: 'The discreet path to a straighter smile.',
    description: [
      'Invisalign uses a series of virtually invisible, removable aligners to gradually shift your teeth into their ideal positions. Each set is custom-crafted using 3D digital scans of your mouth.',
      'No metal. No wires. No compromise on confidence.',
    ],
    benefits: ['Virtually invisible treatment', 'Removable for eating and brushing', 'No dietary restrictions', 'Comfortable smooth aligners', 'Fewer office visits than traditional braces', 'Predictable digital treatment planning'],
    note: 'Suitable for teens and adults. Schedule a complimentary Invisalign consultation.',
  },
  {
    id: 'whitening',
    tag: 'Cosmetic',
    title: 'Teeth Whitening',
    headline: 'A brighter smile in a single visit.',
    description: [
      'Professional whitening delivers results that over-the-counter products simply cannot match. Our in-chair treatment uses clinically proven whitening agents to lighten teeth by several shades in under an hour.',
      'We also offer take-home whitening kits with custom-fitted trays.',
    ],
    benefits: ['Results up to 8 shades lighter', 'Safe, professionally supervised treatment', 'Custom trays for take-home option', 'Long-lasting with good oral hygiene', 'Minimal sensitivity protocol available', 'Compatible with crowns, bridges, veneers (assessed)'],
    note: 'A dental health check is recommended before whitening to ensure optimal results.',
  },
  {
    id: 'veneers',
    tag: 'Cosmetic',
    title: 'Porcelain Veneers',
    headline: 'Transform imperfection into perfection.',
    description: [
      'Veneers are ultra-thin shells of dental porcelain bonded to the front surface of your teeth. They correct chips, cracks, discolouration, gaps, and minor misalignment.',
      'Custom-crafted to match the shape, size, and translucency of your natural teeth — delivering beautiful, natural-looking results.',
    ],
    benefits: ['Correct chips, gaps, stains, and misalignment', 'Stain-resistant porcelain material', 'Natural-looking results', 'Minimal tooth preparation required', 'Durable and long-lasting', 'Customised shade matching'],
    note: 'Composite veneers are also available as a reversible, more affordable alternative.',
  },
  {
    id: 'crowns',
    tag: 'Restorative',
    title: 'Crowns & Bridges',
    headline: 'Restore strength. Renew confidence.',
    description: [
      'A crown is a cap placed over a damaged or weakened tooth to restore its shape, size, and function. A bridge spans a gap using crowns on adjacent teeth to support an artificial tooth.',
      'We use tooth-coloured ceramic and zirconia materials that blend seamlessly with your natural teeth.',
    ],
    benefits: ['Restores damaged or heavily filled teeth', 'Natural tooth-coloured materials', 'Fixed, non-removable solution', 'Protects teeth from further damage', 'Replaces missing teeth without implants', 'Custom-shaded for seamless appearance'],
    note: 'Digital impressions ensure a precise, comfortable fit.',
  },
  {
    id: 'braces',
    tag: 'Orthodontics',
    title: 'Braces',
    headline: 'Proven results. Lasting smiles.',
    description: [
      'Traditional braces remain one of the most effective orthodontic treatments, particularly for complex cases. Our experienced orthodontists develop personalised plans for teenagers and adults.',
      'Modern brackets are smaller, more comfortable, and more aesthetic than ever. Ceramic (tooth-coloured) options are available.',
    ],
    benefits: ['Effective for complex alignment cases', 'Metal or ceramic bracket options', 'Fixed for precise, controlled movement', 'Suitable for all ages', 'Monitored at regular check-up visits', 'Option to accelerate treatment time'],
    note: 'AcceleDent Aura is available as an add-on to reduce treatment time.',
  },
  {
    id: 'root-canal',
    tag: 'Restorative',
    title: 'Root Canal Treatment',
    headline: 'Save your tooth. Relieve your pain.',
    description: [
      'Root canal treatment removes infected or inflamed pulp tissue from inside the tooth, eliminating pain and preventing spread of infection. The tooth is then sealed and restored with a crown.',
      'With modern techniques and local anaesthesia, root canal treatment is no more uncomfortable than a routine filling.',
    ],
    benefits: ['Eliminates toothache and infection', 'Saves the natural tooth', 'Prevents spread of infection', 'Comfortable with modern anaesthesia', 'Single or multiple visits depending on severity', 'Completed with a crown for strength'],
    note: 'A root canal is always preferable to extraction when the tooth can be saved.',
  },
  {
    id: 'wisdom-tooth',
    tag: 'Surgical',
    title: 'Wisdom Tooth Removal',
    headline: 'Gentle extractions by experienced surgeons.',
    description: [
      'Impacted or partially erupted wisdom teeth can cause pain, infection, and damage to adjacent teeth. Our surgeons perform extractions with precision and care.',
      'Most wisdom tooth removals are performed under local anaesthesia in our clinic. We assess X-rays to plan the most appropriate approach.',
    ],
    benefits: ['Thorough pre-operative assessment', 'Gentle technique by experienced surgeons', 'Local anaesthesia for comfort', 'Clear post-operative care instructions', 'Routine and complex extractions managed in-house', 'Follow-up care included'],
    note: 'Emergency wisdom tooth appointments are available for acute pain or infection.',
  },
  {
    id: 'checkup',
    tag: 'Preventive',
    title: 'Dental Check-ups & Scaling',
    headline: 'Prevention is the best treatment.',
    description: [
      'Regular dental examinations and professional cleaning are the foundation of lasting oral health. Our check-ups include digital X-rays, oral cancer screening, and a thorough assessment of your teeth, gums, and bite.',
      'Scaling removes plaque and calculus that brushing cannot reach.',
    ],
    benefits: ['Low-radiation digital X-rays', 'Oral cancer screening included', 'Early detection before issues escalate', 'Thorough plaque and calculus removal', 'Personalised oral hygiene advice', 'Recommended every 6 months'],
    note: 'Early detection saves teeth — and money.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-20 hero-grid" style={{ background: '#000' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="section-label mb-5">G Dental Services</p>
            <h1
              className="headline-display text-white mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Every service your{' '}
              <span style={{ color: '#C8A96E' }} className="italic">smile deserves.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10">
              From your first check-up to complete smile transformations — expert dental care in Singapore.
            </p>
            <Link href="/contact" className="btn-gold text-base px-8 py-3.5">
              Book a Consultation
            </Link>
          </FadeUp>
        </div>
      </section>

      <section className="section-py" style={{ background: '#F5F5F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {services.map((s) => (
              <ScaleReveal key={s.title} delay={0.05}>
                <div id={s.id} className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                      <p className="section-label mb-3">{s.tag}</p>
                      <h2 className="headline-section text-gray-900 text-3xl mb-3">{s.title}</h2>
                      <p className="text-gray-500 text-lg italic mb-6">{s.headline}</p>
                      {s.description.map((p, j) => (
                        <p key={j} className="text-gray-600 text-sm leading-relaxed mb-4">{p}</p>
                      ))}
                      {s.note && (
                        <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">{s.note}</p>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-5 text-sm uppercase tracking-wide">Key Benefits</p>
                      <ul className="space-y-3">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                            <span className="text-gray-600 text-sm">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm font-semibold"
                          style={{ color: '#C8A96E' }}
                        >
                          Book this treatment <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py hero-grid" style={{ background: '#000' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2
              className="headline-display text-white mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Not sure where to start?
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Book a comprehensive dental assessment. Our doctors will recommend the right treatments for your goals, timeline, and budget.
            </p>
            <Link href="/contact" className="btn-gold text-base px-10 py-4">
              Book an Assessment
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
