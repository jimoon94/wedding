'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Greeting() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-elegant text-primary mb-8">
            모시는 글
          </h2>

          <div className="w-12 h-px bg-secondary mx-auto mb-12" />

          <div className="space-y-2 text-gray-700 leading-relaxed font-serif">
            <p className="text-base md:text-lg">
              평생을 함께할 사람을 만났습니다.
            </p>

            <p className="text-base md:text-lg">
              서로를 향한 믿음과 사랑으로<br />
              한 가정을 이루게 되었습니다.
            </p>

            <p className="text-base md:text-lg">
              저희 두 사람이 사랑의 이름으로<br />
              지켜나갈 수 있도록
            </p>

            <p className="text-base md:text-lg">
              앞날을 축복해 주시면<br />
              더없는 기쁨으로 간직하겠습니다.
            </p>

            <div className="pt-8">
              <p className="text-sm md:text-base text-gray-600 italic">
                "사랑은 언제나 오래 참고, 사랑은 온유하며<br />
                시기하지 아니하며 자랑하지 아니하며<br />
                교만하지 아니하며"
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-2">
                - 고린도전서 13:4 -
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
