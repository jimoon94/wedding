'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function WeddingInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // 결혼식 날짜
  const weddingYear = 2026
  const weddingMonth = 8 // 8월
  const weddingDay = 1

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

  // 달력 생성
  const generateCalendar = () => {
    const firstDay = new Date(weddingYear, weddingMonth - 1, 1).getDay()
    const daysInMonth = new Date(weddingYear, weddingMonth, 0).getDate()
    
    const days = []
    
    // 빈 칸 채우기 (일요일 시작)
    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }
    
    // 날짜 채우기
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    
    return days
  }

  const calendarDays = generateCalendar()
  const weekDays = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <section ref={ref} className="py-16 px-6 bg-white">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
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
        </motion.div>

        {/* 달력 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#f9f7f4] rounded-2xl p-6 mb-10"
        >
          {/* 달력 헤더 */}
          <div className="text-center mb-4">
            <p className="text-lg font-elegant text-[#8b7355]">
              {weddingYear}년 {weddingMonth}월
            </p>
          </div>

          {/* 요일 */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day, index) => (
              <div
                key={day}
                className={`text-center text-xs font-medium py-2 ${
                  index === 0 ? 'text-red-400' : index === 6 ? 'text-blue-400' : 'text-gray-500'
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* 날짜 */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`text-center py-2 text-sm ${
                  day === null
                    ? ''
                    : day === weddingDay
                    ? 'bg-[#8b7355] text-white rounded-full font-bold relative'
                    : index % 7 === 0
                    ? 'text-red-400'
                    : index % 7 === 6
                    ? 'text-blue-400'
                    : 'text-gray-700'
                }`}
              >
                {day}
                {day === weddingDay && (
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-[#8b7355] whitespace-nowrap">
                    우리의 결혼식
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 카운트다운 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-center text-sm text-gray-500 mb-4 font-serif">
            결혼식까지 남은 시간
          </p>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MIN', value: timeLeft.minutes },
              { label: 'SEC', value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="bg-[#f9f7f4] rounded-lg p-3 mb-2">
                  <span className="text-xl md:text-2xl font-bold text-[#8b7355]">
                    {String(item.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}