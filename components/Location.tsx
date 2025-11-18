'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // 네이버 지도 iframe URL
  // 실제 URL을 얻는 방법:
  // 1. 네이버 지도(https://map.naver.com)에서 "더 바실리움 웨딩홀" 검색
  // 2. 공유 버튼 클릭 > "지도 퍼가기" 선택
  // 3. iframe 코드에서 src 속성의 URL을 복사하여 아래에 붙여넣기
  // 
  // 또는 아래와 같이 검색 결과를 직접 표시할 수도 있습니다:
  const mapIframeUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.2530122732438!2d127.12260186965933!3d37.41319009825492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7dfb5239483%3A0x68640942ad08c245!2zKOyjvCnrsJTsi6Trpqzsm4A!5e0!3m2!1sko!2skr!4v1763447190690!5m2!1sko!2skr'

  const handleCopyAddress = () => {
    const address = '경기 성남시 분당구 양현로 322 코리아디자인센터'
    navigator.clipboard.writeText(address).then(() => {
      alert('주소가 복사되었습니다!')
    })
  }

  const openNaverMap = () => {
    window.open('https://naver.me/GOPesFwZ', '_blank')
  }

  const openKakaoMap = () => {
    window.open('https://place.map.kakao.com/518455120', '_blank')
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
            <iframe
              src={mapIframeUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* 주소 정보 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-elegant text-primary mb-2">더 바실리움 웨딩홀</h3>
                <p className="text-gray-700 font-serif">경기 성남시 분당구 양현로 322 코리아디자인센터 8층</p>
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
                    <Image
                      src="/icon/train.svg"
                      alt="지하철 아이콘"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-bold text-gray-800">지하철</span>
                </div>
                <p className="text-gray-700 ml-10 font-serif leading-relaxed">
                  신분당선 야탑역<br />
                  야탑역 ④번 출구 정면 홈 플러스(CGV) 앞 좌회전 → 성남종합버스터미널 지나 200m → KT분당센터 뒤편
                </p>
              </div>

              {/* 버스 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Image
                      src="/icon/bus.svg"
                      alt="셔틀 버스 아이콘"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-bold text-gray-800">셔틀 버스</span>
                </div>
                <p className="text-gray-700 ml-10 font-serif leading-relaxed">
                  야탑역 ④번 출구 택시 승강장 앞 (15분 간격)<br />
                  (셔틀 차종: 스타리아) 
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
                  축의대쪽 주차 등록하셔야합니다.(2시간 무료 주차 지원)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
