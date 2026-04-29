'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const lines = ["We're", "Getting", "Married!"]

export default function HandwritingIntro({ onComplete }: { onComplete: () => void }) {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // 텍스트가 나타나는 애니메이션 시작
    setShowText(true)

    // 애니메이션 완료 후 메인 화면으로 전환 (약 4초 후)
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
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {showText && (
          <div className="flex flex-col items-center justify-center gap-2" style={{ fontFamily: 'var(--font-rouge-script)' }}>
            {lines.map((line, lineIndex) => {
              const characters = line.split('')
              let charCount = lines.slice(0, lineIndex).join('').length
              return (
                <div key={lineIndex} className="flex items-center justify-center" style={{ letterSpacing: '-0.05em' }}>
                  {characters.map((char, charIndex) => {
                    const currentIndex = charCount + charIndex
                    return (
                      <motion.span
                        key={charIndex}
                        className="inline-block text-7xl text-black"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + currentIndex * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        {char}
                      </motion.span>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

