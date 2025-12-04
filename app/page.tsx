'use client'

import Hero from '@/components/Hero'
import Greeting from '@/components/Greeting'
import Gallery from '@/components/Gallery'
import WeddingInfo from '@/components/WeddingInfo'
import Location from '@/components/Location'
import AccountInfo from '@/components/AccountInfo'
import Guestbook from '@/components/Guestbook'
import Footer from '@/components/Footer'
import Family from '@/components/Family'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Greeting />
      <Family />
      <WeddingInfo />
      <Gallery />
      <Location />
      <AccountInfo />
      <Guestbook />
      <Footer />
    </main>
  )
}
