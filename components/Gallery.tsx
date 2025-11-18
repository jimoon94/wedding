'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 실제 사진으로 교체하세요
const photos = [
  { id: 1, src: '/photo1.jpg', alt: '웨딩 사진 1' },
  { id: 2, src: '/photo2.jpg', alt: '웨딩 사진 2' },
  { id: 3, src: '/photo3.jpg', alt: '웨딩 사진 3' },
  { id: 4, src: '/photo4.jpg', alt: '웨딩 사진 4' },
  { id: 5, src: '/photo5.jpg', alt: '웨딩 사진 5' },
  { id: 6, src: '/photo6.jpg', alt: '웨딩 사진 6' },
  { id: 7, src: '/photo7.jpg', alt: '웨딩 사진 7' },
  { id: 8, src: '/photo8.jpg', alt: '웨딩 사진 8' },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  const handleThumbnailClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index)
    }
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
            갤러리
          </h2>
          <div className="w-12 h-px bg-secondary mx-auto" />
        </motion.div>

        {/* 메인 슬라이드 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={setSwiperInstance}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="relative aspect-[3/4] bg-gray-200">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://via.placeholder.com/800x600/D4AF7A/ffffff?text=${photo.alt}`
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* 썸네일 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-8 gap-2"
        >
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => handleThumbnailClick(index)}
              className="relative aspect-square rounded overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `https://via.placeholder.com/150/D4AF7A/ffffff?text=${index + 1}`
                }}
              />
            </button>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(110, 108, 104, 0.7);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background:rgb(89, 88, 86);
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
