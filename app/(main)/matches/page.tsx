"use client"

import { useState } from 'react'
import Link from 'next/link'
import MatchCard from '@/components/browse/MatchCard'

const MOCK_MATCHES = [
  {
    id: '1',
    companyName: 'Shenzhen TechMed Co.',
    country: 'china' as const,
    businessType: 'manufacturer',
    categories: ['Medical Supplies', 'Electronics & Tech', 'Consumer Goods'],
    companySize: '201-500',
    isVerified: true,
    matchedAt: '2 days ago',
  },
  {
    id: '4',
    companyName: 'Beijing Industrial Group',
    country: 'china' as const,
    businessType: 'manufacturer',
    categories: ['Industrial Machinery', 'Construction Materials', 'Energy & Power'],
    companySize: '500+',
    isVerified: true,
    matchedAt: '5 days ago',
  },
  {
    id: '5',
    companyName: 'Shanghai Auto Parts Co.',
    country: 'china' as const,
    businessType: 'exporter',
    categories: ['Automotive Parts', 'Industrial Machinery'],
    companySize: '51-200',
    isVerified: true,
    matchedAt: '1 week ago',
  },
  {
    id: '7',
    companyName: 'Dongguan Electronics Hub',
    country: 'china' as const,
    businessType: 'manufacturer',
    categories: ['Electronics & Tech', 'Consumer Goods'],
    companySize: '51-200',
    isVerified: true,
    matchedAt: '2 weeks ago',
  },
]

// Toggle this to test both free and paid states
const IS_PAID_USER = true

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'new'>('all')

  const displayedMatches = activeTab === 'new'
    ? MOCK_MATCHES.filter((_, i) => i < 2)
    : MOCK_MATCHES

  return (
    <div>

      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1B3A6B] mb-1">Your Matches</h1>
        <p className="text-sm text-[#6B7280]">
          Companies that have expressed mutual interest in trading with you.
        </p>
      </div>

      {/* Upgrade banner — shown to free users */}
      {!IS_PAID_USER && MOCK_MATCHES.length > 0 && (
        <div className="bg-[#FFF8EC] border border-[#F0D99A] rounded-2xl p-5 mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#92620A]">
                You have {MOCK_MATCHES.length} matches waiting
              </p>
              <p className="text-xs text-[#B87D2E] mt-0.5">
                Upgrade to Pro to unlock messaging and start closing deals.
              </p>
            </div>
          </div>
          <Link
            href="/upgrade"
            className="flex-shrink-0 px-4 py-2 rounded-xl bg-[#1B3A6B] text-white text-xs font-semibold hover:bg-[#16305A] transition-colors whitespace-nowrap"
          >
            Upgrade now
          </Link>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 bg-white rounded-xl border border-[#E2E8F0] p-1 w-fit">
        {[
          { value: 'all', label: `All matches (${MOCK_MATCHES.length})` },
          { value: 'new', label: 'New (2)' },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value as 'all' | 'new')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.value
                ? 'bg-[#1B3A6B] text-white'
                : 'text-[#6B7280] hover:text-[#1B3A6B]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Matches grid */}
      {displayedMatches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {displayedMatches.map((match) => (
            <MatchCard
              key={match.id}
              {...match}
              isPaidUser={IS_PAID_USER}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#F0F4FF] border border-[#C7D7F5] flex items-center justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <h3 className="text-base font-semibold text-[#1B3A6B] mb-1">
            No matches yet
          </h3>
          <p className="text-sm text-[#6B7280] max-w-xs mb-6">
            Start browsing and expressing interest in companies to get your first match.
          </p>
          <Link
            href="/browse"
            className="px-5 py-2.5 rounded-xl bg-[#1B3A6B] text-white text-sm font-semibold hover:bg-[#16305A] transition-colors"
          >
            Browse companies
          </Link>
        </div>
      )}

    </div>
  )
}