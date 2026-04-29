'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Family() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showContactModal, setShowContactModal] = useState(false)

  const familyInfo = {
    groom: {
      parents: { father: '강 대홍', mother: '김 경자' },
      name: '은성',
      relation: '의 아들'
    },
    bride: {
      parents: { father: '문 주철', mother: '박 종순' },
      name: '지선',
      relation: '의 딸'
    }
  }

  const contacts = [
    { side: '신랑', name: '강은성', phone: '010-2071-4691' },
    { side: '신랑 아버지', name: '강대홍', phone: '010-2071-4691' },
    { side: '신랑 어머니', name: '김경자', phone: '010-2071-4691' },
    { side: '신부', name: '문지선', phone: '010-2071-4691' },
    { side: '신부 아버지', name: '문주철', phone: '010-2071-4691' },
    { side: '신부 어머니', name: '박종순', phone: '010-2071-4691' },
  ]

  return (
    <>
      <section ref={ref} className="relative">
        {/* 상단 사진 영역 */}
        <div className="relative h-[50vh] overflow-hidden max-w-[500px] mx-auto">
          <img
            src="/photo6.jpeg"
            alt="웨딩 사진"
            className="w-full h-full object-cover"
          />
          {/* 하단 그라데이션 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        {/* 가족 정보 영역 */}
        <div className="px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto space-y-6"
          >
            {/* 신랑측 */}
            <div className="text-center">
              <p className="text-lg text-gray-700 font-serif">
                <span className="text-gray-800">{familyInfo.groom.parents.father}</span>
                <span className="text-gray-400 mx-1">·</span>
                <span className="text-gray-800">{familyInfo.groom.parents.mother}</span>
                <span className="text-gray-500 text-sm mx-2">{familyInfo.groom.relation}</span>
                <span className="text-[#8b7355] font-elegant text-xl ml-1">{familyInfo.groom.name}</span>
              </p>
            </div>

            {/* 신부측 */}
            <div className="text-center">
              <p className="text-lg text-gray-700 font-serif">
                <span className="text-gray-800">{familyInfo.bride.parents.father}</span>
                <span className="text-gray-400 mx-1">·</span>
                <span className="text-gray-800">{familyInfo.bride.parents.mother}</span>
                <span className="text-gray-500 text-sm mx-2">{familyInfo.bride.relation}</span>
                <span className="text-[#8b7355] font-elegant text-xl ml-1">{familyInfo.bride.name}</span>
              </p>
            </div>

            {/* 연락하기 버튼 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4"
            >
              <button
                onClick={() => setShowContactModal(true)}
                className="mx-auto block px-10 py-3 rounded-full border border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white transition-all duration-300 font-serif"
              >
                연락하기
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 연락처 모달 */}
      {showContactModal && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowContactModal(false)}
          />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl max-w-sm w-full relative overflow-hidden"
            >
              {/* 닫기 버튼 */}
              <button
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
                aria-label="닫기"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="p-6">
                <h3 className="text-xl font-elegant text-[#8b7355] text-center mb-6">
                  연락하기
                </h3>

                <div className="space-y-3">
                  {contacts.map((contact, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between py-2 ${index === 3 ? 'border-t border-gray-200 pt-4 mt-4' : ''
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-sm w-20 ${contact.side.includes('신랑') ? 'text-[#5c8a9a]' : 'text-[#c4a68a]'
                          }`}>
                          {contact.side}
                        </span>
                        <span className="text-gray-800 font-serif">
                          {contact.name}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={`tel:${contact.phone}`}
                          className="p-2 text-[#5c8a9a] hover:bg-[#5c8a9a]/10 rounded-full transition-colors"
                          aria-label={`${contact.name}에게 전화`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </a>
                        <a
                          href={`sms:${contact.phone}`}
                          className="p-2 text-[#c4a68a] hover:bg-[#c4a68a]/10 rounded-full transition-colors"
                          aria-label={`${contact.name}에게 문자`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  )
}