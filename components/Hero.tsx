'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Bubble = ({ id, delay, startX, size, duration, drift }: {
  id: number
  delay: number
  startX: number
  size: number
  duration: number
  drift: number
}) => {
  const gId = `bg-${id}`
  const sId = `sh-${id}`
  const rId = `ri-${id}`

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${startX}%`, bottom: '-80px' }}
      animate={{
        y: ['0vh', '-120vh'],
        x: [0, drift, drift * -0.6, drift * 0.4, 0],
        opacity: [0, 0.85, 0.85, 0.7, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <defs>
          <radialGradient id={gId} cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#e8f4ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#c8e8ff" stopOpacity="0.05" />
          </radialGradient>
          <radialGradient id={sId} cx="35%" cy="30%" r="30%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={rId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b8d8ff" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#d4b8ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffb8d4" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#b8f0d8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#b8d8ff" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* 내부 밝은 중심부 */}
        <circle cx="50" cy="50" r="47" fill={`url(#${gId})`} />

        {/* 무지개 테두리 */}
        <circle cx="50" cy="50" r="47" stroke={`url(#${rId})`} strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="45.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />

        {/* 메인 하이라이트 */}
        <ellipse cx="34" cy="28" rx="14" ry="10" fill={`url(#${sId})`} />

        {/* 하단 보조 반사 */}
        <ellipse cx="64" cy="70" rx="7" ry="4" fill="white" opacity="0.3" transform="rotate(-15 64 70)" />

        {/* 작은 반짝이 */}
        <circle cx="70" cy="26" r="2.5" fill="white" opacity="0.6" />
      </svg>
    </motion.div>
  )
}

const SoapBubbles = () => {
  const [bubbles, setBubbles] = useState<Array<{
    id: number; delay: number; startX: number; size: number; duration: number; drift: number
  }>>([])

  useEffect(() => {
    const generated = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      delay: (i / 22) * 14,
      startX: 5 + Math.random() * 88,
      size: 20 + Math.random() * 30,
      duration: 10 + Math.random() * 8,
      drift: (Math.random() - 0.5) * 40,
    }))
    setBubbles(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {bubbles.map((b) => (
        <Bubble key={b.id} {...b} />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white">
      {/* 메인 사진 - 3:4 세로 비율 */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <SoapBubbles />

        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="/main_photo.jpg"
            alt="메인 웨딩 사진"
            className="w-full h-full object-cover"
          />
          {/* 하단 흰색 그라데이션 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </motion.div>

      </div>

      {/* 하단 정보 */}
      <motion.div
        className="py-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-lg tracking-[0.1em] mb-4 font-elegant text-gray-600">저희 결혼해요 🤍</p>

        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-3xl font-elegant tracking-widest">강은성</span>
          <span className="text-gray-300 text-xl">&</span>
          <span className="text-3xl font-elegant tracking-widest">문지선</span>
        </div>

        <div className="space-y-1">
          <p className="text-md tracking-[0.2em] text-gray-500 font-light">2026. 08. 01 SAT. 6:30 PM</p>
          <p className="text-md text-gray-500 font-light">더 바실리움 웨딩홀</p>
        </div>

        <motion.div
          className="mt-8"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}
