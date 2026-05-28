'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.5

    // 자동 재생 시도
    audio.play().then(() => {
      setIsPlaying(true)
    }).catch(() => {
      // 브라우저 정책상 자동 재생 차단 시 무시
    })
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/IU_Drama.m4a" loop />
      <motion.button
        onClick={toggle}
        className="fixed top-5 right-5 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-white transition"
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? '음악 끄기' : '음악 켜기'}
      >
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-5">
            {[0.4, 0.7, 0.55].map((delay, i) => (
              <motion.span
                key={i}
                className="w-[3px] bg-gray-600 rounded-full"
                animate={{ height: ['4px', '16px', '4px'] }}
                transition={{ duration: 0.8, repeat: Infinity, delay, ease: 'easeInOut' }}
              />
            ))}
          </div>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        )}
      </motion.button>
    </>
  )
}
