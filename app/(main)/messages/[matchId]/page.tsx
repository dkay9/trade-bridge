import ChatWindow from '@/components/messaging/ChatWindow'

const MOCK_CONVERSATIONS: Record<string, {
  companyName: string
  country: 'nigeria' | 'china'
  isVerified: boolean
  messages: {
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
  }[]
}> = {
  '1': {
    companyName: 'Shenzhen TechMed Co.',
    country: 'china',
    isVerified: true,
    messages: [
      {
        id: '1',
        content: 'Hello, we are interested in sourcing medical supplies from your company.',
        timestamp: '10:02 AM',
        isSender: true,
        type: 'text',
      },
      {
        id: '2',
        content: 'Thank you for reaching out! We specialize in surgical gloves, masks, and disposable equipment. What quantities are you looking for?',
        timestamp: '10:15 AM',
        isSender: false,
        type: 'text',
      },
      {
        id: '3',
        content: '',
        timestamp: '10:20 AM',
        isSender: true,
        type: 'rfq',
        rfqData: {
          product: 'Nitrile surgical gloves',
          quantity: '50,000 units',
          targetPrice: '$0.12/unit',
          deliveryTimeline: 'Within 45 days',
          notes: 'Must meet ISO 13485 standards. CIF Lagos port.',
        },
      },
      {
        id: '4',
        content: 'We can offer $2.30/unit for orders above 2,000 units.',
        timestamp: '10:45 AM',
        isSender: false,
        type: 'text',
      },
    ],
  },
  '4': {
    companyName: 'Beijing Industrial Group',
    country: 'china',
    isVerified: true,
    messages: [
      {
        id: '1',
        content: 'Hi, we are looking for industrial machinery suppliers for our new factory.',
        timestamp: 'Yesterday',
        isSender: true,
        type: 'text',
      },
      {
        id: '2',
        content: 'Please send us your RFQ and we will respond within 24hrs.',
        timestamp: 'Yesterday',
        isSender: false,
        type: 'text',
      },
    ],
  },
  '5': {
    companyName: 'Shanghai Auto Parts Co.',
    country: 'china',
    isVerified: true,
    messages: [
      {
        id: '1',
        content: 'We are interested in automotive parts for distribution in Nigeria.',
        timestamp: 'Mon',
        isSender: true,
        type: 'text',
      },
      {
        id: '2',
        content: 'Thank you for your interest. Here is our product catalogue.',
        timestamp: 'Mon',
        isSender: false,
        type: 'text',
      },
    ],
  },
}

export default function ChatPage({
  params,
}: {
  params: { matchId: string }
}) {
  const conversation = MOCK_CONVERSATIONS[params.matchId]

  if (!conversation) {
    return (
      <div className="flex items-center justify-center h-full py-24">
        <p className="text-sm text-[#6B7280]">Conversation not found.</p>
      </div>
    )
  }

  return (
    <div className="h-[calc(100vh-8rem)] bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
      <ChatWindow
        matchId={params.matchId}
        companyName={conversation.companyName}
        country={conversation.country}
        isVerified={conversation.isVerified}
        initialMessages={conversation.messages}
      />
    </div>
  )
}