'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function NoFlowerNotice() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          {/* 상단 장식선 */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gray-300" />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="#d4b896" />
              <circle cx="8" cy="2" r="1.5" fill="#d4b896" opacity="0.5" />
              <circle cx="8" cy="14" r="1.5" fill="#d4b896" opacity="0.5" />
              <circle cx="2" cy="8" r="1.5" fill="#d4b896" opacity="0.5" />
              <circle cx="14" cy="8" r="1.5" fill="#d4b896" opacity="0.5" />
            </svg>
            <div className="h-px w-12 bg-gray-300" />
          </div>

          <h2 className="font-elegant text-2xl text-gray-700 tracking-widest mb-6">
            화환은 정중히 사양합니다
          </h2>

          <div className="space-y-3 text-gray-500 font-serif leading-loose text-md">
            <p>
              소중한 마음은 충분히 감사히 받겠습니다.
            </p>
            <p>
              다만 자리를 빛내주시는 것만으로도<br />
              저희에게는 더없이 큰 기쁨이 됩니다.
            </p>
          </div>

          {/* 하단 장식 */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-8 bg-gray-200" />
            <span className="text-gray-300 text-xs tracking-[0.3em]">NO FLOWERS</span>
            <div className="h-px w-8 bg-gray-200" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
