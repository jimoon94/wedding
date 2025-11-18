'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function WeddingInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // 결혼식까지 남은 시간 계산
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date('2026-08-01T18:30:00').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-elegant text-primary mb-4">
            결혼식 안내
          </h2>
          <div className="w-12 h-px bg-secondary mx-auto mb-8" />

          <div className="space-y-2 text-primary font-serif">
            <p className="text-lg md:text-xl">2026년 8월 1일 토요일</p>
            <p className="text-lg md:text-xl">오후 6시 30분</p>
            <p className="text-base md:text-lg text-primary/80 mt-4">
              더 바실리움 웨딩홀
            </p>
            <p className="text-sm md:text-base text-primary/70">
              경기 성남시 분당구 양현로 322 코리아디자인센터 8층
            </p>
          </div>

          {/* 카운트다운 */}
          <div className="mt-12 grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="bg-accent rounded-lg p-4 mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-primary">
                    {String(item.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 양가 부모님 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          {/* 신랑측 */}
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-8 h-px bg-secondary" />
                <span className="text-sm text-primary/80 font-elegant">신랑</span>
                <div className="w-8 h-px bg-secondary" />
              </div>
              <div className="flex items-center gap-2 justify-center mb-4">
                <p className="text-xl md:text-2xl font-elegant text-primary">
                  강 은성
                </p>
                <a href="tel:010-2071-4691" className="text-primary hover:text-secondary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-3 text-gray-700 font-serif">
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-gray-600">아버지</span>
                <span className="text-base">강 대홍</span>
                <a href="tel:010-2071-4691" className="text-primary hover:text-secondary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-gray-600">어머니</span>
                <span className="text-base">김 경자</span>
                <a href="tel:010-2071-4691" className="text-primary hover:text-secondary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-px bg-secondary/50" />
            <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <div className="w-16 h-px bg-secondary/50" />
          </div>

          {/* 신부측 */}
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-8 h-px bg-secondary" />
                <span className="text-sm text-primary/80 font-elegant">신부</span>
                <div className="w-8 h-px bg-secondary" />
              </div>
              <div className="flex items-center gap-2 justify-center mb-4">
                <p className="text-xl md:text-2xl font-elegant text-primary">
                  문 지선
                </p>
                <a href="tel:010-2071-4691" className="text-primary hover:text-secondary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-3 text-gray-700 font-serif">
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-gray-600">아버지</span>
                <span className="text-base">문 주철</span>
                <a href="tel:010-2071-4691" className="text-primary hover:text-secondary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-gray-600">어머니</span>
                <span className="text-base">박 종순</span>
                <a href="tel:010-2071-4691" className="text-primary hover:text-secondary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
