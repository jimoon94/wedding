'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
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
import VideoSection from '@/components/VideoSection'

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
          <VideoSection />
          <WeddingInfo />
          <Gallery />
          <Location />
          <FlowerInfo />
          <AccountInfo />
          <Guestbook />
          <Footer />
        </div>
      </main>
    </>
  )
}
