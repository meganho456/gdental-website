import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gdental.com.sg'),
  title: {
    default: 'G Dental | Expert Dental Care in Singapore',
    template: '%s | G Dental Singapore',
  },
  description:
    'G Dental Singapore — compassionate, expert dental care. Invisalign, implants, veneers, cosmetic and preventive dentistry.',
  keywords: [
    'G Dental Singapore', 'dentist Singapore', 'dental clinic Singapore',
    'Invisalign Singapore', 'dental implants Singapore', 'teeth whitening Singapore',
    'veneers Singapore', 'root canal Singapore', 'gdental.com.sg',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://www.gdental.com.sg',
    siteName: 'G Dental Singapore',
    title: 'G Dental | Expert Dental Care in Singapore',
    description: 'Compassionate, expert dental care in Singapore. Invisalign, implants, veneers and more.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'G Dental Singapore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G Dental | Expert Dental Care in Singapore',
    description: 'Compassionate, expert dental care in Singapore.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.gdental.com.sg' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'G Dental',
  url: 'https://www.gdental.com.sg',
  logo: 'https://www.gdental.com.sg/logo.png',
  image: 'https://www.gdental.com.sg/og-image.jpg',
  description: 'Compassionate, expert dental care in Singapore.',
  telephone: '+6562621580',
  email: 'gdcsmilestaff@gmail.com',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '1 Orchard Boulevard #02-01',
      name: 'Camden Medical Centre',
      addressLocality: 'Singapore',
      postalCode: '248649',
      addressCountry: 'SG',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '25 Ghim Moh Link #01-04/05',
      addressLocality: 'Singapore',
      postalCode: '270025',
      addressCountry: 'SG',
    },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Wednesday','Friday'], opens: '10:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday','Thursday'], opens: '10:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '17:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '1' },
  hasMap: 'https://maps.google.com/?q=G+Dental+Singapore',
  priceRange: '$$',
  currenciesAccepted: 'SGD',
  paymentAccepted: 'Cash, Credit Card, NETS, PayNow',
  medicalSpecialty: 'Dentistry',
  sameAs: [
    'https://www.facebook.com/GDentalCenter',
    'https://www.instagram.com/gdental_center',
    'https://www.gdental.com.sg',
  ],
  knowsAbout: [
    'Invisalign', 'Dental Implants', 'Pinhole Surgical Technique',
    'Gum Recession Treatment', 'Teeth Whitening', 'Porcelain Veneers',
    'Root Canal Treatment', 'Wisdom Tooth Removal', 'Orthodontics',
    'Cosmetic Dentistry', 'Preventive Dentistry',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-SG">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
