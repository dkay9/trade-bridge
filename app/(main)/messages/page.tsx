// import Link from 'next/link'
import ConversationList from '@/components/messaging/ConversationList'

const MOCK_CONVERSATIONS = [
  {
    id: '1',
    companyName: 'Shenzhen TechMed Co.',
    country: 'china' as const,
    lastMessage: 'We can offer $2.30/unit for orders above 2,000 units.',
    lastMessageTime: '2m ago',
    unreadCount: 2,
    isVerified: true,
  },
  {
    id: '4',
    companyName: 'Beijing Industrial Group',
    country: 'china' as const,
    lastMessage: 'Please send us your RFQ and we will respond within 24hrs.',
    lastMessageTime: '1h ago',
    unreadCount: 0,
    isVerified: true,
  },
  {
    id: '5',
    companyName: 'Shanghai Auto Parts Co.',
    country: 'china' as const,
    lastMessage: 'Thank you for your interest. Here is our product catalogue.',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
    isVerified: true,
  },
]

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-8rem)]">

      {/* Page header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#1B3A6B] mb-1">Messages</h1>
        <p className="text-sm text-[#6B7280]">
          Your active trade conversations.
        </p>
      </div>

      {/* Conversation list */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden h-full">
        <ConversationList conversations={MOCK_CONVERSATIONS} />
      </div>

    </div>
  )
}