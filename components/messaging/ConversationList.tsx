"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Conversation = {
  id: string
  companyName: string
  country: 'nigeria' | 'china'
  lastMessage: string
  lastMessageTime: string
  unreadCount: number
  isVerified: boolean
}

type ConversationListProps = {
  conversations: Conversation[]
}

export default function ConversationList({ conversations }: ConversationListProps) {
  const pathname = usePathname()

  if (conversations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-16 px-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#F0F4FF] border border-[#C7D7F5] flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="#1B3A6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <h3 className="text-sm font-semibold text-[#1B3A6B] mb-1">No messages yet</h3>
        <p className="text-xs text-[#6B7280] max-w-xs">
          Upgrade to Pro and start messaging your matches.
        </p>
        <Link
          href="/upgrade"
          className="mt-4 px-4 py-2 rounded-xl bg-[#1B3A6B] text-white text-xs font-semibold hover:bg-[#16305A] transition-colors"
        >
          Upgrade to Pro
        </Link>
      </div>
    )
  }

  return (
    <div className="divide-y divide-[#F3F4F6]">
      {conversations.map((convo) => {
        const initials = convo.companyName
          .split(' ')
          .map((w) => w[0])
          .slice(0, 2)
          .join('')
          .toUpperCase()

        const isActive = pathname === `/messages/${convo.id}`

        return (
          <Link
            key={convo.id}
            href={`/messages/${convo.id}`}
            className={`flex items-center gap-3 px-4 py-3.5 hover:bg-[#F8FAFF] transition-colors ${
              isActive ? 'bg-[#F0F4FF] border-r-2 border-[#1B3A6B]' : ''
            }`}
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 rounded-xl bg-[#F0F4FF] border border-[#C7D7F5] flex items-center justify-center text-sm font-bold text-[#1B3A6B]">
                {initials}
              </div>
              {convo.unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#1B3A6B] text-white text-xs font-bold flex items-center justify-center">
                  {convo.unreadCount}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <div className="flex items-center gap-1.5 min-w-0">
                  <p className={`text-sm truncate ${
                    convo.unreadCount > 0
                      ? 'font-bold text-[#1B3A6B]'
                      : 'font-semibold text-[#1B3A6B]'
                  }`}>
                    {convo.companyName}
                  </p>
                  {convo.isVerified && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className="flex-shrink-0">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  )}
                </div>
                <span className="text-xs text-[#9CA3AF] flex-shrink-0 ml-2">
                  {convo.lastMessageTime}
                </span>
              </div>
              <p className={`text-xs truncate ${
                convo.unreadCount > 0 ? 'text-[#4B5563] font-medium' : 'text-[#9CA3AF]'
              }`}>
                {convo.lastMessage}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}