'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const [showToast, setShowToast] = useState(false)

  // 공유하기 함수 (Open Graph 메타데이터 활용)
  const shareLink = async () => {
    try {
      // 모바일에서 Web Share API 지원 시
      if (navigator.share) {
        await navigator.share({
          title: '문지선 ❤️ 강은성 결혼식에 초대합니다',
          url: window.location.href
        })
        // 카카오톡으로 공유하면 layout.tsx의 openGraph 메타데이터가 자동으로 표시됩니다!
      } else {
        // 데스크톱에서는 링크만 복사
        await navigator.clipboard.writeText(window.location.href)
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
      }
    } catch (err) {
      // 공유 취소 시 에러 무시
      if (err instanceof Error && err.name !== 'AbortError') {
        console.error('공유 실패:', err)
      }
    }
  }

  return (
    <footer className="py-12 px-6 bg-primary text-white text-center pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="mb-6">
          <p className="font-elegant text-lg mb-2">문지선 ❤️ 강은성</p>
          <p className="text-sm opacity-80 font-serif">2026년 8월 1일</p>
        </div>

        <div className="w-16 h-px bg-white/30 mx-auto mb-6" />

        <p className="text-sm opacity-70 font-serif">
          소중한 분들을 모시고<br />
          평생의 동반자로 함께하고자 합니다.
        </p>

        <div className="mt-8 text-xs opacity-60">
          <p>© 2026 Wedding Invitation</p>
        </div>
      </motion.div>
      
      {/* 공유하기 버튼 (하단 고정) */}
      <div className="fixed bottom-0 left-0 right-0 w-full mx-auto p-4 bg-white/80 backdrop-blur-md border-t border-stone-100 z-50">
        <button 
          onClick={shareLink} 
          className="w-full bg-black text-white py-3 rounded-lg font-serif-kr shadow-lg hover:bg-[#48423d] transition flex items-center justify-center gap-2"
        >
          <span className="text-xl">💬</span>
          공유하기
        </button>
      </div>

      {/* 토스트 메시지 (링크 복사 시) */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-[#5d5650] text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          링크가 복사되었습니다! 🎉
        </motion.div>
      )}
    </footer>
  )
}