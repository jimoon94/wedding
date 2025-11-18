'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

declare global {
  interface Window {
    naver: any
  }
}

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // 네이버 지도 API 로드
    const script = document.createElement('script')
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID`
    script.async = true
    script.onload = () => setMapLoaded(true)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    if (mapLoaded && mapRef.current && window.naver) {
      const location = new window.naver.maps.LatLng(37.4113, 127.1276) // 야탑동 좌표 (예시)
      
      const map = new window.naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 17,
      })

      new window.naver.maps.Marker({
        position: location,
        map: map,
        title: '더 바실리움 웨딩홀',
      })
    }
  }, [mapLoaded])

  const handleCopyAddress = () => {
    const address = '경기도 성남시 분당구 야탑동'
    navigator.clipboard.writeText(address).then(() => {
      alert('주소가 복사되었습니다!')
    })
  }

  const openNaverMap = () => {
    window.open('https://map.naver.com/v5/search/더%20바실리움%20웨딩홀', '_blank')
  }

  const openKakaoMap = () => {
    window.open('https://map.kakao.com/link/search/더 바실리움 웨딩홀', '_blank')
  }

  return (
    <section ref={ref} className="py-20 px-6 bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-elegant text-primary mb-4">
            오시는 길
          </h2>
          <div className="w-12 h-px bg-secondary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* 지도 */}
          <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div ref={mapRef} className="w-full h-full" />
          </div>

          {/* 주소 정보 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-elegant text-primary mb-2">더 바실리움 웨딩홀</h3>
                <p className="text-gray-700 font-serif">경기도 성남시 분당구 야탑동</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleCopyAddress}
                  className="flex-1 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-serif"
                >
                  주소 복사
                </button>
                <button
                  onClick={openNaverMap}
                  className="flex-1 py-3 bg-[#03C75A] text-white rounded-lg hover:bg-[#02b350] transition-colors font-serif"
                >
                  네이버 지도
                </button>
                <button
                  onClick={openKakaoMap}
                  className="flex-1 py-3 bg-[#FEE500] text-[#191919] rounded-lg hover:bg-[#fada0a] transition-colors font-serif"
                >
                  카카오맵
                </button>
              </div>
            </div>
          </div>

          {/* 교통 안내 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-elegant text-primary mb-4 text-center">교통 안내</h3>
            
            <div className="space-y-6 text-sm md:text-base">
              {/* 지하철 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-800">지하철</span>
                </div>
                <p className="text-gray-700 ml-10 font-serif leading-relaxed">
                  신분당선 야탑역 2번 출구<br />
                  도보 5분
                </p>
              </div>

              {/* 버스 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v6a2 2 0 002 2V5zm0 11a1 1 0 102 0h8a1 1 0 102 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-1.382a1 1 0 01-.894-.553L11.382 2.224A2 2 0 009.618 1H8.382a2 2 0 00-1.764 1.224L4.276 4.447A1 1 0 013.382 5H2v11zM3 7a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-800">버스</span>
                </div>
                <p className="text-gray-700 ml-10 font-serif leading-relaxed">
                  야탑역 정류장 하차<br />
                  주요 노선: 9, 52, 117, 330, 350
                </p>
              </div>

              {/* 주차 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <span className="font-bold text-gray-800">주차안내</span>
                </div>
                <p className="text-gray-700 ml-10 font-serif leading-relaxed">
                  건물 내 주차장 이용 가능<br />
                  3시간 무료 주차 지원
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
