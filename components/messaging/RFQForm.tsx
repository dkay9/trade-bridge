"use client"

import { useState } from 'react'

type RFQFormProps = {
  onSubmit: (data: {
    product: string
    quantity: string
    targetPrice: string
    deliveryTimeline: string
    notes: string
  }) => void
  onCancel: () => void
}

export default function RFQForm({ onSubmit, onCancel }: RFQFormProps) {
  const [form, setForm] = useState({
    product: '',
    quantity: '',
    targetPrice: '',
    deliveryTimeline: '',
    notes: '',
  })

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const canSubmit = form.product && form.quantity && form.targetPrice && form.deliveryTimeline

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="#1B3A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          <span className="text-sm font-bold text-[#1B3A6B]">
            Request for Quotation
          </span>
        </div>
        <button
          onClick={onCancel}
          className="text-[#9CA3AF] hover:text-[#1B3A6B] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-[#1B3A6B] mb-1">
            Product / Service <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={form.product}
            onChange={(e) => update('product', e.target.value)}
            placeholder="e.g. Surgical gloves, 500GSM cotton fabric"
            className="w-full h-9 px-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-[#1B3A6B] text-xs placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-[#1B3A6B] mb-1">
              Quantity <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={form.quantity}
              onChange={(e) => update('quantity', e.target.value)}
              placeholder="e.g. 1,000 units"
              className="w-full h-9 px-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-[#1B3A6B] text-xs placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#1B3A6B] mb-1">
              Target Price <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={form.targetPrice}
              onChange={(e) => update('targetPrice', e.target.value)}
              placeholder="e.g. $2.50/unit"
              className="w-full h-9 px-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-[#1B3A6B] text-xs placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1B3A6B] mb-1">
            Delivery Timeline <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={form.deliveryTimeline}
            onChange={(e) => update('deliveryTimeline', e.target.value)}
            placeholder="e.g. Within 30 days, Q3 2026"
            className="w-full h-9 px-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-[#1B3A6B] text-xs placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1B3A6B] mb-1">
            Additional Notes{' '}
            <span className="text-[#9CA3AF] font-normal">(optional)</span>
          </label>
          <textarea
            value={form.notes}
            onChange={(e) => update('notes', e.target.value)}
            placeholder="Shipping terms, quality requirements, certifications needed..."
            rows={2}
            className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-[#1B3A6B] text-xs placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all resize-none"
          />
        </div>

        <div className="flex gap-2 pt-1">
          <button
            onClick={onCancel}
            className="flex-1 h-9 rounded-xl border border-[#E2E8F0] text-xs font-medium text-[#6B7280] hover:text-[#1B3A6B] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onSubmit(form)}
            disabled={!canSubmit}
            className="flex-1 h-9 rounded-xl bg-[#1B3A6B] text-white text-xs font-semibold hover:bg-[#16305A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Send RFQ
          </button>
        </div>
      </div>
    </div>
  )
}