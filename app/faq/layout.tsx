import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Dental Questions Answered',
  description: 'Honest answers to common questions about Invisalign, dental implants, Pinhole Surgery, teeth whitening, root canal, and visiting G Dental in Singapore.',
  alternates: { canonical: 'https://www.gdental.com.sg/faq' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Where is G Dental located in Singapore?', acceptedAnswer: { '@type': 'Answer', text: 'G Dental has two clinics. Orchard: Camden Medical Centre, 1 Orchard Boulevard #02-01, Singapore 248649. West: 25 Ghim Moh Link #01-04/05, Singapore 270025.' } },
    { '@type': 'Question', name: 'What are G Dental\'s opening hours?', acceptedAnswer: { '@type': 'Answer', text: 'Monday, Wednesday, Friday: 10am–6pm. Tuesday, Thursday: 10am–8pm. Saturday: 10am–5pm. Sunday: Closed.' } },
    { '@type': 'Question', name: 'Is G Dental a certified Invisalign provider in Singapore?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. G Dental holds Platinum Elite Invisalign Provider status — one of the highest tiers awarded by Align Technology.' } },
    { '@type': 'Question', name: 'What is the Pinhole Surgical Technique for gum recession?', acceptedAnswer: { '@type': 'Answer', text: 'The Pinhole Surgical Technique (PST) is a minimally invasive, scalpel-free procedure for treating gum recession. A small pin-hole is made and existing gum tissue is repositioned over the exposed root — no sutures, no donor site, same-day recovery.' } },
    { '@type': 'Question', name: 'Who performs the Pinhole Surgical Technique at G Dental?', acceptedAnswer: { '@type': 'Answer', text: 'Dr. James Ho (D.M.D., M.P.H., Harvard University) performs the procedure. He is one of the very few dentists in Asia certified in the Pinhole Surgical Technique.' } },
    { '@type': 'Question', name: 'How long do dental implants last?', acceptedAnswer: { '@type': 'Answer', text: 'With proper care, dental implants can last a lifetime. The crown on top may need replacement after 15–20 years due to normal wear.' } },
    { '@type': 'Question', name: 'Is root canal treatment painful?', acceptedAnswer: { '@type': 'Answer', text: 'Modern root canal treatment with local anaesthesia is no more uncomfortable than a routine filling. The procedure relieves the pain caused by infection.' } },
    { '@type': 'Question', name: 'How often should I visit the dentist for check-ups?', acceptedAnswer: { '@type': 'Answer', text: 'Every 6 months is the standard recommendation. Regular visits allow early detection of cavities, gum disease, and oral cancer.' } },
    { '@type': 'Question', name: 'What payment methods does G Dental accept?', acceptedAnswer: { '@type': 'Answer', text: 'G Dental accepts Cash, Credit Card, NETS, and PayNow. CHAS subsidies and Medisave may be applicable for certain treatments.' } },
    { '@type': 'Question', name: 'What is the difference between porcelain and composite veneers?', acceptedAnswer: { '@type': 'Answer', text: 'Porcelain veneers are lab-crafted, stain-resistant, and last 10–15+ years. Composite veneers are applied chair-side in one visit, more affordable, and reversible, but less stain-resistant and last 5–7 years.' } },
  ],
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
