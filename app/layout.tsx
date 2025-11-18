import type { Metadata } from 'next'
import { Diphylleia } from 'next/font/google'
import './globals.css'

const diphylleia = Diphylleia({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-diphylleia',
})

export const metadata: Metadata = {
  title: '문지선 ❤️ 강은성 결혼식에 초대합니다',
  description: '2026년 8월 1일 오후 6시 30분 | 더 바실리움 웨딩홀',
  openGraph: {
    title: '문지선 ❤️ 강은성 결혼식에 초대합니다',
    description: '2026년 8월 1일 오후 6시 30분 | 더 바실리움 웨딩홀',
    images: ['/main_photo.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={diphylleia.variable}>
      <body>{children}</body>
    </html>
  )
}
