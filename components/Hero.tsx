'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
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
            <div className="text-4xl md:text-5xl font-bold text-black font-elegant text-center">
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
            {/* 부모님 이름 */}
            <motion.div
              className="text-center mb-8 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-sm md:text-md text-gray-500 font-serif mb-1">
                    강 대홍 · 김 경자의 장남
                  </p>
                  <p className="text-2xl md:text-3xl font-bold font-elegant text-right">
                    은성
                  </p>
                </div>
                <div className="text-gray-200 text-3xl">|</div>
                <div className="text-center">
                  <p className="text-sm md:text-md text-gray-500 font-serif mb-1">
                    문 주철 · 박 종순의 장녀
                  </p>
                  <p className="text-2xl md:text-3xl font-bold font-elegant text-left">
                    지선
                  </p>
                </div>
              </div>
            </motion.div>

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
    </div>
  )
}