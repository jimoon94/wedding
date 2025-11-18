'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface Message {
  name: string
  message: string
  password: string
  timestamp: string
}

export default function Guestbook() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [messages, setMessages] = useState<Message[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Google Apps Script Web App URL (나중에 실제 URL로 교체)
  const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'

  // 메시지 불러오기
  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${SCRIPT_URL}?action=get`)
      const data = await response.json()
      if (data.status === 'success') {
        setMessages(data.messages)
      }
    } catch (error) {
      console.error('메시지 불러오기 실패:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim() || !message.trim() || !password.trim()) {
      alert('모든 항목을 입력해주세요.')
      return
    }

    if (password.length < 4) {
      alert('비밀번호는 4자 이상 입력해주세요.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'add',
          name: name.trim(),
          message: message.trim(),
          password: password,
        }),
      })

      const data = await response.json()
      
      if (data.status === 'success') {
        alert('축하 메시지가 등록되었습니다!')
        setName('')
        setMessage('')
        setPassword('')
        fetchMessages()
      } else {
        alert('메시지 등록에 실패했습니다. 다시 시도해주세요.')
      }
    } catch (error) {
      console.error('메시지 전송 실패:', error)
      alert('네트워크 오류가 발생했습니다.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (index: number) => {
    const inputPassword = prompt('삭제하시려면 비밀번호를 입력해주세요:')
    
    if (!inputPassword) return

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'delete',
          index: index,
          password: inputPassword,
        }),
      })

      const data = await response.json()
      
      if (data.status === 'success') {
        alert('메시지가 삭제되었습니다.')
        fetchMessages()
      } else {
        alert('비밀번호가 일치하지 않습니다.')
      }
    } catch (error) {
      console.error('메시지 삭제 실패:', error)
      alert('네트워크 오류가 발생했습니다.')
    }
  }

  return (
    <section ref={ref} className="py-20 px-6 bg-accent/30">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-elegant text-primary mb-4">
            축하 메시지
          </h2>
          <div className="w-12 h-px bg-secondary mx-auto mb-6" />
          <p className="text-sm text-gray-600 font-serif">
            참석이 어려우신 분들도<br />
            따뜻한 축하의 말씀을 남겨주세요.
          </p>
        </motion.div>

        {/* 메시지 작성 폼 */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 shadow-md mb-8"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={20}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary font-serif"
              />
              <input
                type="password"
                placeholder="비밀번호 (4자 이상)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={20}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary font-serif"
              />
            </div>
            <textarea
              placeholder="축하 메시지를 남겨주세요."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={200}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none font-serif"
            />
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{message.length}/200</span>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-serif disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '등록 중...' : '메시지 남기기'}
            </button>
          </div>
        </motion.form>

        {/* 메시지 목록 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          {messages.length === 0 ? (
            <div className="bg-white rounded-lg p-8 shadow-md text-center text-gray-500 font-serif">
              아직 등록된 메시지가 없습니다.<br />
              첫 번째 축하 메시지를 남겨주세요!
            </div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-bold text-gray-800">{msg.name}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(msg.timestamp).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    title="삭제"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap font-serif leading-relaxed">
                  {msg.message}
                </p>
              </div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  )
}
