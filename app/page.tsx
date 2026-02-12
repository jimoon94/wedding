'use client'

import { useState, useEffect } from 'react'
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

export default function Home() {
  const [showMain, setShowMain] = useState(false)

  return (
    <>
      {!showMain && <HandwritingIntro onComplete={() => setShowMain(true)} />}
      {showMain && (
        <main className="min-h-screen">
          <Hero />
          <Greeting />
          <Family />
          <WeddingInfo />
          <Gallery />
          <Location />
          <FlowerInfo />
          <AccountInfo />
          <Guestbook />
          <Footer />
        </main>
      )}
    </>
  )
}
