"use client"

import Link from 'next/link'

type MatchCardProps = {
  id: string
  companyName: string
  country: 'nigeria' | 'china'
  businessType: string
  categories: string[]
  companySize: string
  isVerified: boolean
  matchedAt: string
  isPaidUser?: boolean
}

const COUNTRY_CONFIG = {
  nigeria: { flag: '🇳🇬', label: 'Nigeria', role: 'Buyer' },
  china: { flag: '🇨🇳', label: 'China', role: 'Supplier' },
}

const BUSINESS_TYPE_LABELS: Record<string, string> = {
  manufacturer: 'Manufacturer',
  importer: 'Importer',
  wholesaler: 'Wholesaler',
  retailer: 'Retailer',
  exporter: 'Exporter',
  service: 'Service Provider',
}

export default function MatchCard({
  id,
  companyName,
  country,
  businessType,
  categories,
  companySize,
  isVerified,
  matchedAt,
  isPaidUser = false,
}: MatchCardProps) {
  const countryConfig = COUNTRY_CONFIG[country]
  const initials = companyName
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:border-[#C7D7F5] hover:shadow-md transition-all">

      {/* Match banner */}
      <div className="h-2 bg-gradient-to-r from-[#1B3A6B] to-[#C9A84C]" />

      <div className="p-5">

        {/* Top row — avatar + match badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#F0F4FF] border border-[#C7D7F5] flex items-center justify-center text-base font-bold text-[#1B3A6B]">
              {initials}
            </div>
            <div>
              <Link href={`/company/${id}`}>
                <h3 className="text-sm font-bold text-[#1B3A6B] hover:underline leading-tight">
                  {companyName}
                </h3>
              </Link>
              <div className="flex items-center gap-1.5 mt-0.5 text-xs text-[#6B7280]">
                <span>{countryConfig.flag} {countryConfig.label}</span>
                <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                <span>{BUSINESS_TYPE_LABELS[businessType] || businessType}</span>
              </div>
            </div>
          </div>

          {/* Verified + match indicator */}
          <div className="flex flex-col items-end gap-1.5">
            {isVerified && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Verified
              </span>
            )}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFF8EC] border border-[#F0D99A] text-[#92620A] text-xs font-semibold">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              Matched
            </span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {categories.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="px-2.5 py-1 rounded-lg bg-[#F0F4FF] border border-[#C7D7F5] text-xs font-medium text-[#1B3A6B]"
            >
              {cat}
            </span>
          ))}
          {categories.length > 3 && (
            <span className="px-2.5 py-1 rounded-lg bg-[#F0F4FF] border border-[#C7D7F5] text-xs font-medium text-[#6B7280]">
              +{categories.length - 3} more
            </span>
          )}
        </div>

        {/* Match date + company size */}
        <div className="flex items-center justify-between text-xs text-[#9CA3AF] mb-4">
          <span>{companySize} employees</span>
          <span>Matched {matchedAt}</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F3F4F6] mb-4" />

        {/* Actions */}
        {isPaidUser ? (
          <div className="flex items-center gap-2">
            <Link
              href={`/messages?match=${id}`}
              className="flex-1 h-9 rounded-xl bg-[#1B3A6B] text-white text-xs font-semibold hover:bg-[#16305A] transition-colors flex items-center justify-center gap-1.5"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Send message
            </Link>
            <Link
              href={`/company/${id}`}
              className="h-9 w-9 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-[#6B7280] hover:text-[#1B3A6B] hover:border-[#C7D7F5] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        ) : (
          /* Locked state for free users */
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 h-9 rounded-xl bg-[#F3F4F6] border border-[#E2E8F0] flex items-center justify-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span className="text-xs text-[#9CA3AF] font-medium">Message locked</span>
              </div>
              <Link
                href={`/company/${id}`}
                className="h-9 w-9 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-[#6B7280] hover:text-[#1B3A6B] hover:border-[#C7D7F5] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            <Link
              href="/upgrade"
              className="flex items-center justify-center gap-1.5 w-full h-8 rounded-xl bg-[#FFF8EC] border border-[#F0D99A] text-[#92620A] text-xs font-semibold hover:bg-[#FEF0D0] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Upgrade to message
            </Link>
          </div>
        )}

      </div>
    </div>
  )
}