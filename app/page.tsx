'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Greeting from '@/components/Greeting'
import Gallery from '@/components/Gallery'
import WeddingInfo from '@/components/WeddingInfo'
import Location from '@/components/Location'
import AccountInfo from '@/components/AccountInfo'
import Guestbook from '@/components/Guestbook'
import Footer from '@/components/Footer'
import Family from '@/components/Family'
import HandwritingIntro from '@/components/HandwritingIntro'
import FlowerInfo from '@/components/flower_info'

function FinSection() {
  return (
    <motion.div
      className="relative w-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#F9F8F7] to-transparent z-10" />
      <img src="/fin.jpg" alt="" className="w-full object-cover blur-[7px] scale-105" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <p className="font-elegant font-bold text-5xl tracking-widest text-gray-400">Coming Soon</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#FEFDFB] to-transparent z-10" />
    </motion.div>
  )
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const today = new Date()
    if (today.getFullYear() === 2026 && today.getMonth() === 7 && today.getDate() === 1) {
      router.replace('/day')
    }
  }, [router])

  return (
    <>
      <AnimatePresence>
        {showIntro && <HandwritingIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
      <main className="min-h-screen bg-white">
        <div className="max-w-[500px] mx-auto shadow-2xl">
          <Hero />
          <Greeting />
          <Family />
          <WeddingInfo />
          <Gallery />
          <Location />
          <FlowerInfo />
          <AccountInfo />
          <Guestbook />
          <FinSection />
          <Footer />
        </div>
      </main>
    </>
  )
}
