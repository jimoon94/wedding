'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// 꽃잎 컴포넌트
const Flower = ({ delay, startX, duration }: { delay: number; startX: number; duration: number }) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-20"
      style={{ left: `${startX}%` }}
      initial={{ 
        y: -30, 
        rotate: 0,
        opacity: 0 
      }}
      animate={{ 
        x: [0, 30, -20, 10, 0],
        y: ['0vh', '100vh'],
        rotate: [0, 45, -30, 60, 0],
        opacity: [0, 1, 1, 1, 0]
      }}
      transition={{ 
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {/* 데이지 꽃 SVG */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <g transform="translate(12, 12)">
          {/* 꽃잎들 */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-6"
              rx="2.5"
              ry="5"
              fill="white"
              transform={`rotate(${angle})`}
              opacity="0.9"
            />
          ))}
          {/* 중심 */}
          <circle cx="0" cy="0" r="3" fill="#FFD700" />
        </g>
      </svg>
    </motion.div>
  )
}

// 꽃잎들 생성
const FallingFlowers = () => {
  const [flowers, setFlowers] = useState<Array<{ id: number; delay: number; startX: number; duration: number }>>([])

  useEffect(() => {
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      startX: 5 + Math.random() * 90, // 5% ~ 95% 범위
      duration: 10 + Math.random() * 8
    }))
    setFlowers(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flowers.map((flower) => (
        <Flower
          key={flower.id}
          delay={flower.delay}
          startX={flower.startX}
          duration={flower.duration}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* 모바일 사이즈 컨테이너 */}
      <div className="w-full max-w-2xl mx-auto min-h-screen">
        <section className="relative min-h-screen flex flex-col">
          {/* 메인 사진 영역 */}
          <div className="relative flex-1 min-h-[65vh]">
            {/* 꽃 떨어지는 효과 */}
            <FallingFlowers />
            
            {/* 배경 사진 */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <div className="relative w-full h-full">
                {/* 사진 프레임 */}
                <div className="absolute inset-4">
                  <div className="relative w-full h-full">
                    <img
                      src="/main_photo.jpg"
                      alt="문지선 & 강은성 웨딩 사진"
                      className="w-full h-full object-cover"
                    />
                    {/* 흰색 테두리 */}
                    <div className="absolute inset-0 border-4 border-white/60 pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 하단 정보 영역 */}
          <motion.div 
            className="relative py-8 px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* 신랑신부 이름과 날짜 */}
            <div className="flex items-center justify-center gap-8 mb-4">
              {/* 신랑 이름 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-2xl font-elegant tracking-widest">
                  강은성
                </p>
              </motion.div>

              {/* 날짜 (세로) */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <span className="text-2xl font-light">8</span>
                <div className="w-6 h-px bg-black/20 my-1" />
                <span className="text-2xl font-light">1</span>
              </motion.div>

              {/* 신부 이름 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-2xl font-elegant tracking-widest">
                  문지선
                </p>
              </motion.div>
            </div>

            {/* 날짜 및 장소 */}
            <motion.div
              className="text-center space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p className="text-sm tracking-[0.2em] text-gray-500">
                2026. 08. 01 SAT. 6:30 PM
              </p>
              <p className="text-sm text-gray-500">
                더 바실리움 웨딩홀
              </p>
            </motion.div>

            {/* 스크롤 다운 아이콘 */}
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg 
                  className="w-5 h-5 mx-auto text-white/50" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}