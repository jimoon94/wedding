'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const images = ['/hand_1.png', '/hand_2.png', '/hand_3.png']

export default function HandwritingIntro({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)

    const timer = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(2px)' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {visible && (
        <div className="flex flex-col items-center gap-1">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="overflow-hidden"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{
                duration: 0.7,
                delay: i * 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <img src={src} alt="" className="h-16 w-auto" />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
