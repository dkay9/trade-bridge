"use client"

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import MessageBubble from './MessageBubble'
import RFQForm from './RFQForm'

type Message = {
  id: string
  content: string
  timestamp: string
  isSender: boolean
  type?: 'text' | 'rfq'
  rfqData?: {
    product: string
    quantity: string
    targetPrice: string
    deliveryTimeline: string
    notes?: string
  }
}

type ChatWindowProps = {
  matchId: string
  companyName: string
  country: 'nigeria' | 'china'
  isVerified: boolean
  initialMessages: Message[]
}

export default function ChatWindow({
  matchId,
  companyName,
  country,
  isVerified,
  initialMessages,
}: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [showRFQ, setShowRFQ] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  const countryFlag = country === 'china' ? '🇨🇳' : '🇳🇬'
  const initials = companyName
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = () => {
    if (!input.trim()) return
    const newMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      timestamp: 'Just now',
      isSender: true,
      type: 'text',
    }
    setMessages((prev) => [...prev, newMessage])
    setInput('')
  }

  const sendRFQ = (data: {
    product: string
    quantity: string
    targetPrice: string
    deliveryTimeline: string
    notes: string
  }) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content: '',
      timestamp: 'Just now',
      isSender: true,
      type: 'rfq',
      rfqData: data,
    }
    setMessages((prev) => [...prev, newMessage])
    setShowRFQ(false)
  }

  return (
    <div className="flex flex-col h-full">

      {/* Chat header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-[#E2E8F0] flex-shrink-0">

        {/* Back button — mobile only */}
        <Link
          href="/messages"
          className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-[#6B7280] hover:text-[#1B3A6B] hover:bg-[#F0F4FF] transition-colors flex-shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </Link>

        <div className="w-10 h-10 rounded-xl bg-[#F0F4FF] border border-[#C7D7F5] flex items-center justify-center text-sm font-bold text-[#1B3A6B] flex-shrink-0">
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-bold text-[#1B3A6B] truncate">{companyName}</p>
            {isVerified && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="flex-shrink-0">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            )}
          </div>
          <p className="text-xs text-[#6B7280]">{countryFlag} {country === 'china' ? 'China' : 'Nigeria'}</p>
        </div>

        {/* View profile */}
        <Link
          href={`/company/${matchId}`}
          className="flex-shrink-0 px-3 py-1.5 rounded-xl border border-[#E2E8F0] text-xs font-medium text-[#6B7280] hover:text-[#1B3A6B] hover:border-[#C7D7F5] transition-colors"
        >
          View profile
        </Link>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            content={msg.content}
            timestamp={msg.timestamp}
            isSender={msg.isSender}
            type={msg.type}
            rfqData={msg.rfqData}
          />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* RFQ form — slides up above input */}
      {showRFQ && (
        <div className="px-4 pb-2">
          <RFQForm
            onSubmit={sendRFQ}
            onCancel={() => setShowRFQ(false)}
          />
        </div>
      )}

      {/* Input area */}
      <div className="flex items-end gap-2 px-4 py-3 bg-white border-t border-[#E2E8F0] flex-shrink-0">

        {/* RFQ button */}
        <button
          onClick={() => setShowRFQ(!showRFQ)}
          className={`flex-shrink-0 w-9 h-9 rounded-xl border flex items-center justify-center transition-colors ${
            showRFQ
              ? 'border-[#1B3A6B] bg-[#F0F4FF] text-[#1B3A6B]'
              : 'border-[#E2E8F0] text-[#6B7280] hover:text-[#1B3A6B] hover:border-[#C7D7F5]'
          }`}
          title="Send RFQ"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </button>

        {/* Text input */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              sendMessage()
            }
          }}
          placeholder="Type a message..."
          rows={1}
          className="flex-1 px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-[#1B3A6B] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all resize-none max-h-32 overflow-y-auto"
        />

        {/* Send button */}
        <button
          onClick={sendMessage}
          disabled={!input.trim()}
          className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#1B3A6B] flex items-center justify-center text-white hover:bg-[#16305A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    </div>
  )
}