'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  // 맨위로 올라가는 버튼 표시 여부 관리
  const [showScroll, setShowScroll] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent/30 to-white py-8">
        <motion.div 
          className="relative z-10 w-full max-w-lg mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="w-12 h-px bg-secondary" />
            <div className="text-4xl md:text-5xl font-bold text-black font-elegant">
              Getting married
            </div>
            <div className="w-12 h-px bg-secondary" />
          </motion.div>
          {/* 웨딩 사진 */}
          <motion.div
            className="relative mb-8 md:mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/main_photo.jpg"
                alt="문지선 & 강은성 웨딩 사진"
                className="w-full h-full object-cover"
                />
              {/* 사진 테두리 효과 */}
              <div className="absolute inset-0 border-8 border-white/80 pointer-events-none" />
            </div>
          </motion.div>

          {/* 신랑신부 정보 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-elegant text-primary mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              강은성 <span className="text-secondary text-2xl md:text-3xl">🤍</span> 문지선
            </motion.h1>

            <motion.div
              className="space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <p className="text-base md:text-lg text-gray-700 font-serif">
                2026년 8월 1일 토요일
              </p>
              <p className="text-sm md:text-base text-gray-600 font-serif">
                오후 6시 30분 더 바실리움 웨딩홀
              </p>
            </motion.div>
          </motion.div>

          {/* 스크롤 다운 아이콘 */}
          <motion.div 
            className="mt-12 md:mt-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, repeat: Infinity, repeatType: "reverse" }}
          >
            <svg 
              className="w-6 h-6 mx-auto text-secondary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>
      {/* 맨 위로 올라가는 버튼 */}
      {showScroll && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-secondary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition hover:bg-primary focus:outline-none"
          aria-label="맨 위로 가기"
          style={{boxShadow: '0 4px 16px rgba(0,0,0,0.18)'}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}