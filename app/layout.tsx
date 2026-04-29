import type { Metadata } from 'next'
import { Dancing_Script, Poor_Story, Great_Vibes } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing-script',
})

const poorStory = Poor_Story({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poor-story',
})

const rougeScript = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  display: 'block',
  variable: '--font-rouge-script',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wedding-es-js.vercel.app'),
  title: '강은성🤍문지선 결혼식에 초대합니다',
  description: '2026년 8월 1일 오후 6시 30분 | 더 바실리움 웨딩홀',
  icons: {
    icon: '/icon/weding-app-icon.ico',
    apple: '/icon/weding-app-icon.png',
  },
  openGraph: {
    title: '강은성🤍문지선 결혼식에 초대합니다',
    description: '2026년 8월 1일 오후 6시 30분 | 더 바실리움 웨딩홀',
    images: ['https://wedding-es-js.vercel.app/main_photo.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${dancingScript.variable} ${poorStory.variable} ${rougeScript.variable}`}>
      <body>
        {children}
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
