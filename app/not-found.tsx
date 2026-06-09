import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 hero-grid"
      style={{ background: '#000' }}
    >
      <p className="section-label mb-4">Page Not Found</p>
      <h1
        className="headline-display text-white mb-6"
        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
      >
        This page doesn&apos;t exist.
      </h1>
      <p className="text-white/50 text-lg mb-10 max-w-md">
        It may have moved or been removed. Use the links below to find what you need.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-gold px-8 py-3">
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="btn-outline px-8 py-3"
          style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
