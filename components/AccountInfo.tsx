'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface Account {
  name: string
  relation: string
  bank: string
  accountNumber: string
  kakaopayLink?: string
}

const accounts: { groom: Account[]; bride: Account[] } = {
  groom: [
    {
      name: '강은성',
      relation: '신랑',
      bank: '신한은행',
      accountNumber: '110-123-456789',
      kakaopayLink: 'https://qr.kakaopay.com/example1',
    },
    {
      name: '강○○',
      relation: '신랑 아버지',
      bank: '국민은행',
      accountNumber: '123-456-789012',
    },
    {
      name: '문○○',
      relation: '신랑 어머니',
      bank: '우리은행',
      accountNumber: '1002-123-456789',
    },
  ],
  bride: [
    {
      name: '문지선',
      relation: '신부',
      bank: '카카오뱅크',
      accountNumber: '3333-01-1234567',
      kakaopayLink: 'https://qr.kakaopay.com/example2',
    },
    {
      name: '문○○',
      relation: '신부 아버지',
      bank: '신한은행',
      accountNumber: '110-987-654321',
    },
    {
      name: '김○○',
      relation: '신부 어머니',
      bank: '하나은행',
      accountNumber: '123-456789-01234',
    },
  ],
}

export default function AccountInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openSection, setOpenSection] = useState<'groom' | 'bride' | null>(null)

  const copyToClipboard = (text: string, name: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${name}님의 계좌번호가 복사되었습니다!`)
    })
  }

  const openKakaoPay = (link: string) => {
    window.open(link, '_blank')
  }

  const AccountCard = ({ account }: { account: Account }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="font-bold text-gray-800">{account.name}</p>
          <p className="text-xs text-gray-500">{account.relation}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-3">
        <p className="text-sm text-gray-700">{account.bank}</p>
        <p className="text-sm font-mono text-gray-800">{account.accountNumber}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => copyToClipboard(account.accountNumber, account.name)}
          className="flex-1 py-2 text-sm border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors"
        >
          계좌번호 복사
        </button>
        {account.kakaopayLink && (
          <button
            onClick={() => openKakaoPay(account.kakaopayLink!)}
            className="flex-1 py-2 text-sm bg-[#FEE500] text-[#191919] rounded hover:bg-[#fada0a] transition-colors font-medium"
          >
            카카오페이
          </button>
        )}
      </div>
    </div>
  )

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-elegant text-primary mb-4">
            마음 전하실 곳
          </h2>
          <div className="w-12 h-px bg-secondary mx-auto mb-6" />
          <p className="text-sm text-gray-600 font-serif">
            참석이 어려우신 분들을 위해<br />
            계좌번호를 기재하였습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {/* 신랑측 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenSection(openSection === 'groom' ? null : 'groom')}
              className="w-full py-4 px-6 bg-accent/50 flex justify-between items-center hover:bg-accent transition-colors"
            >
              <span className="font-elegant text-lg text-primary">신랑측 계좌번호</span>
              <svg
                className={`w-5 h-5 text-primary transition-transform ${
                  openSection === 'groom' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openSection === 'groom' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="p-4 space-y-3 bg-gray-50"
              >
                {accounts.groom.map((account, index) => (
                  <AccountCard key={index} account={account} />
                ))}
              </motion.div>
            )}
          </div>

          {/* 신부측 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenSection(openSection === 'bride' ? null : 'bride')}
              className="w-full py-4 px-6 bg-accent/50 flex justify-between items-center hover:bg-accent transition-colors"
            >
              <span className="font-elegant text-lg text-primary">신부측 계좌번호</span>
              <svg
                className={`w-5 h-5 text-primary transition-transform ${
                  openSection === 'bride' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openSection === 'bride' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="p-4 space-y-3 bg-gray-50"
              >
                {accounts.bride.map((account, index) => (
                  <AccountCard key={index} account={account} />
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
