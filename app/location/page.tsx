'use client'

import { useEffect } from 'react'

export default function LocationRedirect() {
  useEffect(() => {
    window.location.href = 'https://place.map.kakao.com/518455120'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500 font-serif">카카오맵으로 이동 중...</p>
    </div>
  )
}
