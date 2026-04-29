'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Greeting() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-6 bg-neutral-50">
      <div className="max-w-[500px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* 웨딩 일러스트 */}
          <svg viewBox="0 0 320 170" fill="none" className="w-full max-w-xs mx-auto mb-6">
            {/* 전구 줄 */}
            <path d="M0,30 C80,10 160,50 240,20 C270,10 300,24 320,16" stroke="#d4c5b0" strokeWidth="1.2" />
            {([[38, 18], [88, 34], [138, 22], [185, 30], [238, 20], [288, 14]] as [number, number][]).map(([x, y], i) => (
              <g key={i}>
                <line x1={x} y1={y - 5} x2={x} y2={y} stroke="#d4c5b0" strokeWidth="1" />
                <ellipse cx={x} cy={y + 6} rx="5" ry="6.5" fill="#ffd966" opacity="0.9" />
                <ellipse cx={x - 1.5} cy={y + 4} rx="2" ry="1.5" fill="white" opacity="0.55" />
              </g>
            ))}

            {/* 왼쪽 꽃가지 */}
            <path d="M12,165 Q28,130 48,102" stroke="#c4d4a8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M48,102 Q56,80 52,62" stroke="#c4d4a8" strokeWidth="1.5" strokeLinecap="round" />
            <ellipse cx="20" cy="145" rx="13" ry="5" fill="#c8dba8" transform="rotate(-55 20 145)" />
            <ellipse cx="36" cy="118" rx="10" ry="4" fill="#b8cc98" transform="rotate(25 36 118)" />
            {([0, 60, 120, 180, 240, 300] as number[]).map((a, i) => (
              <ellipse key={i} cx={52 + Math.cos(a * Math.PI / 180) * 8} cy={62 + Math.sin(a * Math.PI / 180) * 8} rx="5" ry="3" fill="#f8b4c0" transform={`rotate(${a} ${52 + Math.cos(a * Math.PI / 180) * 8} ${62 + Math.sin(a * Math.PI / 180) * 8})`} />
            ))}
            <circle cx="52" cy="62" r="4" fill="#ffd080" />
            {([0, 90, 180, 270] as number[]).map((a, i) => (
              <ellipse key={i} cx={28 + Math.cos(a * Math.PI / 180) * 6} cy={92 + Math.sin(a * Math.PI / 180) * 6} rx="4" ry="2.5" fill="#ffc8d8" transform={`rotate(${a} ${28 + Math.cos(a * Math.PI / 180) * 6} ${92 + Math.sin(a * Math.PI / 180) * 6})`} />
            ))}
            <circle cx="28" cy="92" r="3" fill="#ffd080" />

            {/* 오른쪽 꽃가지 */}
            <path d="M308,165 Q292,130 272,102" stroke="#c4d4a8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M272,102 Q264,80 268,62" stroke="#c4d4a8" strokeWidth="1.5" strokeLinecap="round" />
            <ellipse cx="300" cy="145" rx="13" ry="5" fill="#c8dba8" transform="rotate(55 300 145)" />
            <ellipse cx="284" cy="118" rx="10" ry="4" fill="#b8cc98" transform="rotate(-25 284 118)" />
            {([0, 60, 120, 180, 240, 300] as number[]).map((a, i) => (
              <ellipse key={i} cx={268 + Math.cos(a * Math.PI / 180) * 8} cy={62 + Math.sin(a * Math.PI / 180) * 8} rx="5" ry="3" fill="#f8b4c0" transform={`rotate(${a} ${268 + Math.cos(a * Math.PI / 180) * 8} ${62 + Math.sin(a * Math.PI / 180) * 8})`} />
            ))}
            <circle cx="268" cy="62" r="4" fill="#ffd080" />
            {([0, 90, 180, 270] as number[]).map((a, i) => (
              <ellipse key={i} cx={292 + Math.cos(a * Math.PI / 180) * 6} cy={92 + Math.sin(a * Math.PI / 180) * 6} rx="4" ry="2.5" fill="#ffc8d8" transform={`rotate(${a} ${292 + Math.cos(a * Math.PI / 180) * 6} ${92 + Math.sin(a * Math.PI / 180) * 6})`} />
            ))}
            <circle cx="292" cy="92" r="3" fill="#ffd080" />

            {/* 중앙 작은 꽃 */}
            {([0, 72, 144, 216, 288] as number[]).map((a, i) => (
              <ellipse key={i} cx={160 + Math.cos(a * Math.PI / 180) * 9} cy={112 + Math.sin(a * Math.PI / 180) * 9} rx="6" ry="3.5" fill="#f8b4c0" transform={`rotate(${a} ${160 + Math.cos(a * Math.PI / 180) * 9} ${112 + Math.sin(a * Math.PI / 180) * 9})`} />
            ))}
            <circle cx="160" cy="112" r="5" fill="#ffd080" />
          </svg>

          <h2 className="text-2xl md:text-3xl font-elegant text-primary mb-8">
            모시는 글
          </h2>

          <div className="space-y-2 text-gray-700 leading-relaxed font-elegant">
            <p className="text-lg">
              평생을 함께할 사람을 만났습니다.
            </p>

            <p className="text-lg">
              햇살이 가장 길고 뜨거운 계절,
            </p>

            <p className="text-lg">
              저희의 여름 저녁을 빛내주러 오시는 걸음이<br />
              부디 설레고 가벼우셨으면 해요.
            </p>

            <p className="text-lg">
              화사하고 가벼운 스타일을 환영합니다!<br />
            </p>
            <p className="text-lg">
              부담 없이, 편안한 모습으로 오셔서<br />
              저희의 시작을 함께 기뻐해 주세요.<br />💐
            </p>

            <div className="pt-8">
              <p className="text-sm text-neutral-600 italic font-light">
                "온전히 겸손하고 온유하며 사랑으로 서로 용납하고 인내하며,<br />
                평안의 매는 줄로 하나 되게 하신 것을 힘써 지키라."
              </p>
              <p className="text-xs md:text-sm text-neutral-500 mt-2 font-light">
                - 에베소서 4장 2-3절 -
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
