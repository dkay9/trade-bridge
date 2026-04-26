"use client"

import Link from 'next/link'

type CompanyCardProps = {
  id: string
  companyName: string
  country: 'nigeria' | 'china'
  businessType: string
  categories: string[]
  companySize: string
  isVerified: boolean
  onInterest: (id: string) => void
  hasExpressedInterest?: boolean
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

export default function CompanyCard({
  id,
  companyName,
  country,
  businessType,
  categories,
  companySize,
  isVerified,
  onInterest,
  hasExpressedInterest = false,
}: CompanyCardProps) {
  const countryConfig = COUNTRY_CONFIG[country]
  const initials = companyName
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:border-[#C7D7F5] hover:shadow-md transition-all group">

      {/* Card header */}
      <div className="h-16 bg-gradient-to-r from-[#1B3A6B] to-[#16305A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="px-5 pb-5">

        {/* Avatar */}
        <div className="flex items-end justify-between -mt-7 mb-4">
          <div className="w-14 h-14 rounded-xl border-4 border-white shadow-sm flex items-center justify-center text-lg font-bold text-[#1B3A6B] bg-[#F0F4FF]">
            {initials}
          </div>
          {isVerified && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              Verified
            </span>
          )}
        </div>

        {/* Company name */}
        <Link href={`/company/${id}`}>
          <h3 className="text-base font-bold text-[#1B3A6B] mb-1 group-hover:underline leading-tight">
            {companyName}
          </h3>
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-4">
          <span>{countryConfig.flag} {countryConfig.label}</span>
          <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
          <span>{BUSINESS_TYPE_LABELS[businessType] || businessType}</span>
          <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
          <span>{companySize} emp.</span>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mb-5">
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

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onInterest(id)}
            className={`flex-1 h-9 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              hasExpressedInterest
                ? 'bg-green-50 border border-green-200 text-green-700'
                : 'bg-[#1B3A6B] text-white hover:bg-[#16305A]'
            }`}
          >
            {hasExpressedInterest ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Interest sent
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                Express interest
              </>
            )}
          </button>

          <Link
            href={`/company/${id}`}
            className="h-9 w-9 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-[#6B7280] hover:text-[#1B3A6B] hover:border-[#C7D7F5] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

      </div>
    </div>
  )
}