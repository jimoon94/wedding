'use client'

import { motion } from 'framer-motion'

export default function Footer() {

  const shareLink = () => {
    const kakao = (window as any).Kakao
    if (!kakao) return

    if (!kakao.isInitialized()) {
      kakao.init('649fe3bb5fd72be2b08619ebf2dffe96')
    }

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '강은성🤍문지선 결혼식에 초대합니다',
        description: '2026. 08. 01 SAT 오후 6:30 | 더 바실리움 웨딩홀',
        imageUrl: 'https://wedding-es-js.vercel.app/main_photo.jpg',
        imageWidth: 800,
        imageHeight: 1066,
        link: {
          mobileWebUrl: 'https://wedding-es-js.vercel.app',
          webUrl: 'https://wedding-es-js.vercel.app',
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: 'https://wedding-es-js.vercel.app',
            webUrl: 'https://wedding-es-js.vercel.app',
          },
        },
        {
          title: '위치 보기',
          link: {
            mobileWebUrl: 'https://wedding-es-js.vercel.app/location',
            webUrl: 'https://wedding-es-js.vercel.app/location',
          },
        },
      ],
    })
  }

  // 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-6 bg-white text-black text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="mb-6">
          <p className="font-elegant text-lg mb-2">강은성 🤍 문지선</p>
          <p className="text-sm opacity-80 font-serif">2026년 8월 1일</p>
        </div>

        <div className="w-16 h-px bg-white/30 mx-auto mb-6" />

        <p className="text-sm opacity-70 font-serif">
          소중한 분들을 모시고<br />
          평생의 동반자로 함께하고자 합니다.
        </p>

        <div className="mt-8 text-xs opacity-60">
          <p>© 2026.08.01 Wedding Invitation</p>
        </div>
      </motion.div>

      {/* 플로팅 버튼들 (오른쪽 하단 고정) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* 맨 위로 버튼 */}
        <motion.button
          onClick={scrollToTop}
          className="w-12 h-12 bg-white text-[#5d5650] rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="맨 위로"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>

        {/* 공유하기 버튼 */}
        <motion.button
          onClick={shareLink}
          className="w-12 h-12 bg-[#5d5650] text-white rounded-full shadow-lg hover:bg-[#48423d] transition flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="공유하기"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </motion.button>
      </div>

    </footer>
  )
}