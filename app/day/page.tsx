'use client'

import Link from 'next/link'
import Location from '@/components/Location'

const contacts = [
  { side: '신랑', name: '강은성', phone: '010-2071-4691' },
  { side: '신랑 아버지', name: '강대홍', phone: '010-2071-4691' },
  { side: '신랑 어머니', name: '김경자', phone: '010-2071-4691' },
  { side: '신부', name: '문지선', phone: '010-2071-4691' },
  { side: '신부 아버지', name: '문주철', phone: '010-2071-4691' },
  { side: '신부 어머니', name: '박종순', phone: '010-2071-4691' },
]

export default function WeddingDayPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto py-16 text-center px-6">
        <div className="inline-block bg-[#f9f3ee] border border-[#e8d8c8] rounded-full px-5 py-2 mb-8">
          <p className="text-sm font-serif text-[#9b7f65] tracking-widest">✦ 오늘은 결혼식 날입니다 ✦</p>
        </div>
        <p className="text-sm tracking-[0.2em] text-gray-400 font-serif mb-3">2026. 08. 01 SAT. 6:30 PM</p>
        <h1 className="font-elegant text-3xl text-gray-700 tracking-widest mb-1">강은성 🤍 문지선</h1>
        <p className="text-sm text-gray-400 font-serif">더 바실리움 웨딩홀</p>
      </div>

      <Location />

      {/* 혼주 연락처 */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="font-elegant text-2xl text-gray-700 text-center mb-8 tracking-widest">연락하기</h2>
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-6 py-4 ${index !== contacts.length - 1 ? 'border-b border-gray-100' : ''
                }`}
            >
              <div className="flex items-center gap-4">
                <span className={`text-sm w-24 font-serif ${contact.side.includes('신랑') ? 'text-[#5c8a9a]' : 'text-[#c4a68a]'}`}>
                  {contact.side}
                </span>
                <span className="text-gray-800 font-serif">{contact.name}</span>
              </div>
              <div className="flex gap-2">
                <a
                  href={`tel:${contact.phone}`}
                  className="p-2.5 text-[#5c8a9a] hover:bg-[#5c8a9a]/10 rounded-full transition-colors"
                  aria-label={`${contact.name}에게 전화`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a
                  href={`sms:${contact.phone}`}
                  className="p-2.5 text-[#c4a68a] hover:bg-[#c4a68a]/10 rounded-full transition-colors"
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

      <div className="max-w-2xl mx-auto px-6 pb-16 text-center">
        <Link
          href="/"
          className="inline-block px-8 py-4 border border-gray-300 text-gray-600 rounded-full font-serif text-sm hover:bg-gray-50 transition-colors tracking-widest"
        >
          기존 모바일 청첩장 보기
        </Link>
      </div>
    </main>
  )
}
