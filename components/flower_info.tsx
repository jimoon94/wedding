'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function NoFlowerNotice() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="pb-20 px-6 bg-accent/30">
        <div className="max-w-2xl mx-auto relative overflow-hidden">        
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 relative z-10"
        >
            <div className="text-4xl mb-6">💐</div>
                <h2 className="text-2xl md:text-3xl font-elegant text-primary mb-4">
                    화환은 정중히 사양합니다
                </h2>
            <div className="w-12 h-px bg-secondary mx-auto mb-8" />
                <div className="bg-white rounded-lg p-6 shadow-md text-center relative z-10">
                    <p className="text-gray-700 font-serif leading-relaxed mb-6">
                        환경 보호와 자원 절약을 위해<br />
                        화환 대신 마음으로 축하해 주세요.
                    </p>
                    <p className="text-secondary font-serif text-sm leading-relaxed">
                        오셔서 함께해 주시는 것만으로<br />
                        저희에게는 큰 선물입니다.
                    </p>
                </div>
        </motion.div>
      </div>
    </section>
  )
}