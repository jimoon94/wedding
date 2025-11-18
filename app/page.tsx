'use client'

import Hero from '@/components/Hero'
import Greeting from '@/components/Greeting'
import Gallery from '@/components/Gallery'
import WeddingInfo from '@/components/WeddingInfo'
import Location from '@/components/Location'
import AccountInfo from '@/components/AccountInfo'
import Guestbook from '@/components/Guestbook'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Greeting />
      <Gallery />
      <WeddingInfo />
      <Location />
      <AccountInfo />
      <Guestbook />
      <Footer />
    </main>
  )
}
