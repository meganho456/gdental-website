'use client'

import { useState, FormEvent } from 'react'
import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from 'lucide-react'
import { FadeUp } from '@/components/animations'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_ME' // TODO: update with real Formspree endpoint

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="pt-36 pb-20 hero-grid" style={{ background: '#000' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="section-label mb-5">Contact G Dental</p>
            <h1
              className="headline-display text-white mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Let&apos;s talk about{' '}
              <span style={{ color: '#C8A96E' }} className="italic">your smile.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Book a consultation or ask us anything. We respond within one business day.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-py" style={{ background: '#F5F5F7' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 border border-gray-200">
            <h2 className="headline-section text-gray-900 text-2xl mb-8">Book a Consultation</h2>

            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-10">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="font-bold text-gray-900 text-xl mb-2">Message received!</h3>
                <p className="text-gray-500 text-sm">We&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Full Name *</label>
                    <input
                      required name="name" value={form.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-yellow-400 transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email *</label>
                    <input
                      required type="email" name="email" value={form.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-yellow-400 transition-colors"
                      placeholder="jane@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Phone</label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-yellow-400 transition-colors"
                      placeholder="+65 9000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Service of Interest</label>
                    <select
                      name="service" value={form.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-yellow-400 transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option>Dental Implants</option>
                      <option>Invisalign</option>
                      <option>Teeth Whitening</option>
                      <option>Veneers</option>
                      <option>Crowns & Bridges</option>
                      <option>Root Canal</option>
                      <option>Wisdom Tooth Removal</option>
                      <option>Check-up & Scaling</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-yellow-400 transition-colors resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong — please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-gold w-full py-4 text-base flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-200">
              <p className="section-label mb-4">Clinic</p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">
                    Camden Medical Centre<br />
                    1 Orchard Blvd, #02-01<br />
                    Singapore 248649
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">
                    25 Ghim Moh Link, #01-04/05<br />
                    Singapore 270025
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">
                    <a href="tel:+6562621580" className="hover:text-gray-900 transition-colors block">+65 6262 1580</a>
                    <a href="tel:+6584829694" className="hover:text-gray-900 transition-colors block">+65 8482 9694</a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                  <a href="mailto:gdcsmilestaff@gmail.com" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">
                    gdcsmilestaff@gmail.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">
                    Mon, Wed, Fri: 10:00–18:00<br />
                    Tue, Thu: 10:00–20:00<br />
                    Sat: 10:00–17:00<br />
                    Sun: Closed
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="rounded-3xl p-6 text-center"
              style={{ background: 'linear-gradient(135deg, #C8A96E 0%, #A8893E 100%)' }}
            >
              <p className="font-bold text-black text-lg mb-2">Dental Emergency?</p>
              <p className="text-black/70 text-sm mb-4">Call us directly for same-day appointments when you need urgent care.</p>
              <a href="tel:+6562621580" className="inline-block bg-black text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-gray-900 transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
