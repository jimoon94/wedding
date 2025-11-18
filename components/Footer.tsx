'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-primary text-white text-center">
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
    </footer>
  )
}
