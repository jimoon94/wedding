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
  const [activeContactGroup, setActiveContactGroup] = useState<'groom' | 'bride' | null>(null)

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
    <>
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
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-8 h-px bg-secondary" />
                <span className="text-sm text-primary/80 font-elegant">신랑</span>
                <div className="w-8 h-px bg-secondary" />
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-xl md:text-2xl font-elegant text-primary">강 은성</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveContactGroup('groom')}
                    className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors text-md font-serif"
                  >
                    신랑측 연락처 보기
                  </button>
                </div>
              </div>
            </div>

            {/* 신랑측 상세 목록은 팝업에서 제공 */}
          </div>

          {/* 신부측 */}
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-8 h-px bg-secondary" />
                <span className="text-sm text-primary/80 font-elegant">신부</span>
                <div className="w-8 h-px bg-secondary" />
              </div>
              <div className="flex flex-col items-center gap-3 mb-4">
                <p className="text-xl md:text-2xl font-elegant text-primary">문 지선</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveContactGroup('bride')}
                    className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/5 transition-colors text-md font-serif"
                  >
                    신부측 연락처 보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

      {activeContactGroup && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveContactGroup(null)}
          />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full relative overflow-hidden">
              <button
                onClick={() => setActiveContactGroup(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                aria-label="닫기"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="p-6">
                <p className="text-sm text-gray-500 font-serif mb-2">
                  {activeContactGroup === 'groom' ? '신랑측 연락처' : '신부측 연락처'}
                </p>
                <h3 className="text-2xl font-elegant text-primary mb-6">
                  {activeContactGroup === 'groom' ? '강 은성 & 가족' : '문 지선 & 가족'}
                </h3>

                <div className="space-y-4">
                  {(activeContactGroup === 'groom'
                    ? [
                        { label: '신랑', name: '강 은성', phone: '010-2071-4691' },
                        { label: '아버지', name: '강 대홍', phone: '010-2071-4691' },
                        { label: '어머니', name: '김 경자', phone: '010-2071-4691' },
                      ]
                    : [
                        { label: '신부', name: '문 지선', phone: '010-2071-4691' },
                        { label: '아버지', name: '문 주철', phone: '010-2071-4691' },
                        { label: '어머니', name: '박 종순', phone: '010-2071-4691' },
                      ]
                  ).map((contact) => (
                    <div
                      key={`${contact.label}-${contact.name}`}
                      className="flex items-center justify-between bg-accent/40 rounded-xl px-4 py-3"
                    >
                      <div>
                        <p className="text-xs text-gray-500 font-serif">{contact.label}</p>
                        <p className="text-lg font-elegant text-primary">{contact.name}</p>
                        <p className="text-sm text-gray-600 font-serif">{contact.phone}</p>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={`tel:${contact.phone}`}
                          className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                          aria-label={`${contact.name}에게 전화`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </a>
                        <a
                          href={`sms:${contact.phone}`}
                          className="p-2 rounded-full bg-white text-primary border border-primary hover:bg-primary/5 transition-colors"
                          aria-label={`${contact.name}에게 문자`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
