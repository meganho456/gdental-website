'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Check, Copy } from 'lucide-react'

const WECHAT_ID = 'gplusdental'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.12 1.529 5.849L.057 23.571a.75.75 0 0 0 .92.92l5.733-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.732.963.993-3.62-.234-.373A9.818 9.818 0 1 1 12 21.818z" />
    </svg>
  )
}

function WeChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.898-6.348-7.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-3.74 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm5.4 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z" />
    </svg>
  )
}

export default function FloatingContact() {
  const [wechatOpen, setWechatOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null)

  const copyWechatId = () => {
    navigator.clipboard.writeText(WECHAT_ID)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const buttons = [
    {
      id: 'phone',
      label: '+65 6262 1580',
      href: 'tel:+6562621580',
      bg: 'linear-gradient(135deg, #C8A96E 0%, #A8893E 100%)',
      color: '#000',
      icon: <Phone size={20} />,
    },
    {
      id: 'whatsapp',
      label: '+65 8482 9694',
      href: 'https://wa.me/6584829694',
      bg: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
      color: '#fff',
      icon: <WhatsAppIcon />,
    },
    {
      id: 'wechat',
      label: WECHAT_ID,
      href: null,
      bg: 'linear-gradient(135deg, #09B83E 0%, #07A034 100%)',
      color: '#fff',
      icon: <WeChatIcon />,
    },
  ]

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {buttons.map((btn, i) => (
          <motion.div
            key={btn.id}
            className="relative flex items-center justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredBtn(btn.id)}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <AnimatePresence>
              {hoveredBtn === btn.id && (
                <motion.div
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-16 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none"
                  style={{ background: 'rgba(0,0,0,0.85)', color: '#fff', backdropFilter: 'blur(8px)' }}
                >
                  {btn.label}
                </motion.div>
              )}
            </AnimatePresence>

            {btn.href ? (
              <a
                href={btn.href}
                target={btn.id === 'whatsapp' ? '_blank' : undefined}
                rel={btn.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: btn.bg, color: btn.color }}
              >
                {btn.icon}
              </a>
            ) : (
              <button
                onClick={() => setWechatOpen(true)}
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: btn.bg, color: btn.color }}
              >
                {btn.icon}
              </button>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {wechatOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setWechatOpen(false)}
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-2xl p-8 max-w-sm w-full text-center"
              style={{ background: '#1D1D1F', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #09B83E 0%, #07A034 100%)', color: '#fff' }}
              >
                <WeChatIcon />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">WeChat</h3>
              <p className="text-white/50 text-sm mb-5">Add us on WeChat to chat with our team</p>
              <div
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl mb-4"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <span className="text-white font-mono text-sm">{WECHAT_ID}</span>
                <button
                  onClick={copyWechatId}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  style={{ background: copied ? '#09B83E' : '#C8A96E', color: '#000' }}
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <button
                onClick={() => setWechatOpen(false)}
                className="text-white/40 text-sm hover:text-white/70 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
