type MessageBubbleProps = {
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

export default function MessageBubble({
  content,
  timestamp,
  isSender,
  type = 'text',
  rfqData,
}: MessageBubbleProps) {
  if (type === 'rfq' && rfqData) {
    return (
      <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className="max-w-sm w-full">
          <div className={`rounded-2xl border overflow-hidden ${
            isSender
              ? 'border-[#1B3A6B]/20 bg-[#1B3A6B]'
              : 'border-[#E2E8F0] bg-white'
          }`}>
            {/* RFQ header */}
            <div className={`px-4 py-3 flex items-center gap-2 border-b ${
              isSender
                ? 'border-white/10 bg-white/5'
                : 'border-[#E2E8F0] bg-[#F8FAFF]'
            }`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke={isSender ? 'white' : '#1B3A6B'} strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <span className={`text-xs font-bold uppercase tracking-wider ${
                isSender ? 'text-white' : 'text-[#1B3A6B]'
              }`}>
                Request for Quotation
              </span>
            </div>

            {/* RFQ fields */}
            <div className="px-4 py-3 space-y-2">
              {[
                { label: 'Product', value: rfqData.product },
                { label: 'Quantity', value: rfqData.quantity },
                { label: 'Target Price', value: rfqData.targetPrice },
                { label: 'Delivery', value: rfqData.deliveryTimeline },
              ].map((field) => (
                <div key={field.label} className="flex items-start gap-2">
                  <span className={`text-xs font-medium w-20 flex-shrink-0 ${
                    isSender ? 'text-white/50' : 'text-[#9CA3AF]'
                  }`}>
                    {field.label}
                  </span>
                  <span className={`text-xs flex-1 ${
                    isSender ? 'text-white' : 'text-[#1B3A6B]'
                  }`}>
                    {field.value}
                  </span>
                </div>
              ))}
              {rfqData.notes && (
                <div className="flex items-start gap-2">
                  <span className={`text-xs font-medium w-20 flex-shrink-0 ${
                    isSender ? 'text-white/50' : 'text-[#9CA3AF]'
                  }`}>
                    Notes
                  </span>
                  <span className={`text-xs flex-1 ${
                    isSender ? 'text-white/80' : 'text-[#4B5563]'
                  }`}>
                    {rfqData.notes}
                  </span>
                </div>
              )}
            </div>
          </div>
          <p className={`text-xs text-[#9CA3AF] mt-1 ${isSender ? 'text-right' : 'text-left'}`}>
            {timestamp}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className="max-w-xs md:max-w-sm">
        <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isSender
            ? 'bg-[#1B3A6B] text-white rounded-br-sm'
            : 'bg-white border border-[#E2E8F0] text-[#1B3A6B] rounded-bl-sm'
        }`}>
          {content}
        </div>
        <p className={`text-xs text-[#9CA3AF] mt-1 ${isSender ? 'text-right' : 'text-left'}`}>
          {timestamp}
        </p>
      </div>
    </div>
  )
}