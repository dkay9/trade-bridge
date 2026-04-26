"use client"

import { useState } from 'react'
import Link from 'next/link'

const FREE_FEATURES = [
  { label: 'Create a business profile', included: true },
  { label: 'Browse companies', included: true },
  { label: 'Express interest (up to 5/day)', included: true },
  { label: 'Receive inbound interest', included: true },
  { label: 'View your matches', included: true },
  { label: 'Send messages', included: false },
  { label: 'Send RFQs', included: false },
  { label: 'Initiate deals', included: false },
  { label: 'Priority placement in search', included: false },
  { label: 'Unlimited daily interactions', included: false },
]

const PRO_FEATURES = [
  { label: 'Everything in Free', included: true },
  { label: 'Unlimited daily interactions', included: true },
  { label: 'Full messaging access', included: true },
  { label: 'Send and receive RFQs', included: true },
  { label: 'Initiate and close deals', included: true },
  { label: 'Priority placement in search', included: true },
  { label: 'Full profile visibility', included: true },
  { label: 'Verified badge (with documents)', included: true },
  { label: 'Dedicated support', included: true },
]

export default function UpgradePage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const monthlyPrice = 29
  const annualPrice = 19

  const displayPrice = billingCycle === 'monthly' ? monthlyPrice : annualPrice
  const annualSaving = Math.round(((monthlyPrice - annualPrice) / monthlyPrice) * 100)

  const handleUpgrade = () => {
    // Paystack / Stripe integration will be wired here when backend is ready
    console.log('Initiating payment for:', billingCycle, 'plan')
  }

  return (
    <div className="max-w-4xl mx-auto">

      {/* Page header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-[#FFF8EC] border border-[#F0D99A] rounded-full px-4 py-1.5 mb-4">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span className="text-xs font-semibold text-[#92620A]">Upgrade to Pro</span>
        </div>
        <h1 className="text-3xl font-bold text-[#1B3A6B] mb-3">
          Unlock the full Tradebridge experience
        </h1>
        <p className="text-[#6B7280] text-sm max-w-md mx-auto leading-relaxed">
          Start conversations, send RFQs, and close deals with verified
          trade partners across Nigeria and China.
        </p>
      </div>

      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-[#1B3A6B]' : 'text-[#9CA3AF]'}`}>
          Monthly
        </span>
        <button
          onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
          className={`relative w-12 h-6 rounded-full transition-colors ${
            billingCycle === 'annual' ? 'bg-[#1B3A6B]' : 'bg-[#E2E8F0]'
          }`}
        >
          <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${
            billingCycle === 'annual' ? 'left-7' : 'left-1'
          }`} />
        </button>
        <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-[#1B3A6B]' : 'text-[#9CA3AF]'}`}>
          Annual
        </span>
        {billingCycle === 'annual' && (
          <span className="px-2.5 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold">
            Save {annualSaving}%
          </span>
        )}
      </div>

      {/* Plans grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        {/* Free plan */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
          <div className="mb-6">
            <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">
              Free
            </p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-[#1B3A6B]">$0</span>
              <span className="text-sm text-[#9CA3AF]">/ month</span>
            </div>
            <p className="text-xs text-[#6B7280]">
              Get started and explore the platform.
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {FREE_FEATURES.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                {feature.included ? (
                  <div className="w-5 h-5 rounded-full bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-[#F3F4F6] border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </div>
                )}
                <span className={`text-sm ${feature.included ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full h-11 rounded-xl border border-[#E2E8F0] flex items-center justify-center">
            <span className="text-sm font-semibold text-[#9CA3AF]">Current plan</span>
          </div>
        </div>

        {/* Pro plan */}
        <div className="bg-[#1B3A6B] rounded-2xl p-6 relative overflow-hidden">

          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                  Pro
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">${displayPrice}</span>
                  <span className="text-sm text-white/50">/ month</span>
                </div>
                <p className="text-xs text-white/50">
                  {billingCycle === 'annual'
                    ? `Billed $${annualPrice * 12}/year`
                    : 'Billed monthly'}
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40">
                <span className="text-xs font-semibold text-[#C9A84C]">Most popular</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {PRO_FEATURES.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <span className="text-sm text-white/80">{feature.label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleUpgrade}
              className="w-full h-11 rounded-xl bg-[#C9A84C] text-[#1B3A6B] text-sm font-bold hover:bg-[#B8963E] transition-colors"
            >
              Upgrade to Pro
            </button>

            <p className="text-center text-xs text-white/40 mt-3">
              Pay securely via Paystack or Stripe. Cancel anytime.
            </p>
          </div>
        </div>

      </div>

      {/* Payment methods */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5 mb-6">
        <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-4 text-center">
          Accepted payment methods
        </p>
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-[#4B5563]">
            <div className="w-8 h-8 rounded-lg bg-[#F0F4FF] border border-[#C7D7F5] flex items-center justify-center">
              <span className="text-xs font-bold text-[#1B3A6B]">₦</span>
            </div>
            Paystack (Nigeria)
          </div>
          <div className="w-px h-6 bg-[#E2E8F0]" />
          <div className="flex items-center gap-2 text-sm text-[#4B5563]">
            <div className="w-8 h-8 rounded-lg bg-[#F0F4FF] border border-[#C7D7F5] flex items-center justify-center">
              <span className="text-xs font-bold text-[#1B3A6B]">$</span>
            </div>
            Stripe (International)
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="text-center">
        <p className="text-sm text-[#6B7280]">
          Have questions?{' '}
          <Link href="/" className="text-[#1B3A6B] font-semibold hover:underline">
            Contact support
          </Link>
        </p>
      </div>

    </div>
  )
}