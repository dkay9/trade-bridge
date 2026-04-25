"use client"

import Link from 'next/link'

type ProfileCardProps = {
  id: string
  companyName: string
  country: 'nigeria' | 'china'
  businessType: string
  description: string
  categories: string[]
  companySize: string
  yearFounded?: string
  website?: string
  moq?: string
  targetMarkets: string[]
  isVerified: boolean
  isOwner?: boolean
  onInterest?: () => void
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

export default function ProfileCard({
  _id,
  companyName,
  country,
  businessType,
  description,
  categories,
  companySize,
  yearFounded,
  website,
  moq,
  targetMarkets,
  isVerified,
  isOwner = false,
  onInterest,
}: ProfileCardProps) {
  const countryConfig = COUNTRY_CONFIG[country]
  const initials = companyName
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm">

      {/* Header banner */}
      <div className="h-24 bg-gradient-to-r from-[#1B3A6B] to-[#16305A] relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Avatar + top actions */}
      <div className="px-6 pb-6">
        <div className="flex items-end justify-between -mt-10 mb-4">

          {/* Avatar */}
          <div className="w-20 h-20 rounded-2xl  border-4 border-white shadow-sm flex items-center justify-center text-2xl font-bold text-[#1B3A6B] bg-[#F0F4FF]">
            {initials}
          </div>

          {/* Action button */}
          {isOwner ? (
            <Link
              href="/profile/edit"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E2E8F0] text-sm font-medium text-[#1B3A6B] hover:bg-[#F0F4FF] transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              Edit profile
            </Link>
          ) : (
            <button
              onClick={onInterest}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1B3A6B] text-white text-sm font-semibold hover:bg-[#16305A] transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              Express interest
            </button>
          )}
        </div>

        {/* Company name + badges */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h2 className="text-xl font-bold text-[#1B3A6B]">{companyName}</h2>
          {isVerified && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              Verified
            </span>
          )}
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-[#6B7280] mb-5">
          <span>{countryConfig.flag} {countryConfig.label}</span>
          <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
          <span>{BUSINESS_TYPE_LABELS[businessType] || businessType}</span>
          <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
          <span>{countryConfig.role}</span>
          {yearFounded && (
            <>
              <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
              <span>Est. {yearFounded}</span>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
          {description}
        </p>

        {/* Divider */}
        <div className="h-px bg-[#F3F4F6] mb-6" />

        {/* Details grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">

          <div className="bg-[#F8FAFF] rounded-xl p-4">
            <p className="text-xs text-[#9CA3AF] mb-1">Company size</p>
            <p className="text-sm font-semibold text-[#1B3A6B]">
              {companySize} employees
            </p>
          </div>

          <div className="bg-[#F8FAFF] rounded-xl p-4">
            <p className="text-xs text-[#9CA3AF] mb-1">Min. order qty</p>
            <p className="text-sm font-semibold text-[#1B3A6B]">
              {moq || 'Not specified'}
            </p>
          </div>

          {website && (
            <div className="bg-[#F8FAFF] rounded-xl p-4 col-span-2">
              <p className="text-xs text-[#9CA3AF] mb-1">Website</p>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#1B3A6B] hover:underline"
              >
                {website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}

        </div>

        {/* Product categories */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-3">
            Product Categories
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1.5 rounded-lg bg-[#F0F4FF] border border-[#C7D7F5] text-xs font-medium text-[#1B3A6B]"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Target markets */}
        <div>
          <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-3">
            Target Markets
          </p>
          <div className="flex flex-wrap gap-2">
            {targetMarkets.map((market) => (
              <span
                key={market}
                className="px-3 py-1.5 rounded-lg bg-[#FFF8EC] border border-[#F0D99A] text-xs font-medium text-[#92620A]"
              >
                {market}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}