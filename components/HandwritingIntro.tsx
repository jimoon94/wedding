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
    }, 4000)

    return () => clearTimeout(timer)
  }, [onComplete])

  // 각 글자마다 약간씩 다른 회전과 위치 변화를 주어 손글씨 느낌
  const getHandwritingStyle = (charIndex: number) => {
    const rotations = [
      -1.5, 1, 0.5, -0.5, 1.5, -1, 0, 1, -0.5, 1, 0, -1, 0.5, 1.5, -1, 0, 1, -0.5, 1.5, -1, 0.5, 1
    ]
    const yOffsets = [
      0, -1, 1, 0, -1, 1, 0, -1, 1, 0, -1, 1, 0, -1, 1, 0, -1, 1, 0, -1, 1, 0
    ]
    return {
      rotate: rotations[charIndex % rotations.length] || 0,
      y: yOffsets[charIndex % yOffsets.length] || 0,
    }
  }

  let globalCharIndex = 0

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
          <div className="text-6xl md:text-5xl font-elegant flex flex-col items-center justify-center gap-2">
            {lines.map((line, lineIndex) => {
              const characters = line.split('')
              return (
                <div key={lineIndex} className="flex items-center justify-center">
                  {characters.map((char, charIndex) => {
                    const currentIndex = globalCharIndex++
                    const style = getHandwritingStyle(currentIndex)
                    return (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        style={{
                          color: 'black',
                          transformOrigin: 'center',
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                          ...style
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          rotate: style.rotate,
                          y: style.y,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + currentIndex * 0.12,
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

