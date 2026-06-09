import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pinhole Gum Rejuvenation — Scalpel-Free Gum Recession Treatment',
  description: 'Treat gum recession without cutting or stitches. G Dental offers the Pinhole Surgical Technique in Singapore — same-day recovery, multiple teeth in one visit. Dr. James Ho is one of Asia\'s few certified providers.',
  alternates: { canonical: 'https://www.gdental.com.sg/services/pinhole' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Pinhole Surgical Technique',
  alternateName: 'Pinhole Gum Rejuvenation',
  description: 'A minimally invasive, scalpel-free procedure that repositions existing gum tissue to cover exposed tooth roots caused by gum recession. No cutting, no sutures, same-day recovery.',
  procedureType: 'Surgical',
  bodyLocation: 'Gums / Gingival Tissue',
  followup: 'Biannual periodontal check-ups recommended',
  howPerformed: 'A small pinhole entry point is created in the gum tissue. Specialised instruments are used to gently loosen and reposition the tissue over exposed tooth roots. Collagen strips are placed through the pinhole to stabilise the new position.',
  preparation: 'Periodontal health assessment and dental X-rays required before treatment',
  performer: {
    '@type': 'Physician',
    name: 'Dr. James Ho',
    description: 'D.M.D., M.P.H. (Harvard University). One of the few dentists in Asia certified in the Pinhole Surgical Technique.',
  },
  availableService: {
    '@type': 'MedicalClinic',
    name: 'G Dental Center',
    url: 'https://www.gdental.com.sg',
  },
  recognizingAuthority: {
    '@type': 'Organization',
    name: 'John Chao, D.D.S. — Pinhole Surgical Technique inventor and certifying authority',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the Pinhole Surgical Technique?', acceptedAnswer: { '@type': 'Answer', text: 'The Pinhole Surgical Technique (PST) is a minimally invasive procedure for correcting gum recession. Rather than cutting and grafting tissue, a tiny pinhole is used to reposition existing gum tissue over exposed roots — no sutures required.' } },
    { '@type': 'Question', name: 'How is Pinhole Surgery different from gum grafting?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional gum grafting involves harvesting tissue from the palate, creating two surgical wounds and requiring a longer healing period. PST uses only a pinhole entry to reposition existing tissue, with no donor site, no sutures, and most patients resuming normal activity the same day.' } },
    { '@type': 'Question', name: 'Is Pinhole Surgery painful?', acceptedAnswer: { '@type': 'Answer', text: 'The procedure is performed under local anaesthesia. Post-procedure discomfort is significantly less than traditional gum grafting because there is no cutting or suturing involved.' } },
    { '@type': 'Question', name: 'How many teeth can be treated in one session?', acceptedAnswer: { '@type': 'Answer', text: 'One of the key advantages of PST is that multiple teeth can be treated in a single visit, unlike traditional grafting which is typically limited to one or two teeth per session.' } },
    { '@type': 'Question', name: 'Who performs Pinhole Surgery at G Dental?', acceptedAnswer: { '@type': 'Answer', text: 'Dr. James Ho (D.M.D., M.P.H., Harvard University) performs the procedure at G Dental. He is one of the very few dentists in Asia who holds certification in the Pinhole Surgical Technique.' } },
    { '@type': 'Question', name: 'Am I a candidate for Pinhole Surgery?', acceptedAnswer: { '@type': 'Answer', text: 'PST is well-suited for patients with mild to moderate gum recession who have good overall periodontal health. A thorough assessment is required first to confirm suitability and rule out active gum disease.' } },
  ],
}

export default function PinholeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
