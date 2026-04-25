"use client"

import Link from 'next/link'
import ProfileCard from '@/components/profile/ProfileCard'

// Placeholder data — will be replaced with real API fetch using the id param
const MOCK_COMPANY = {
  id: 'company-1',
  companyName: 'Shenzhen TechMed Co.',
  country: 'china' as const,
  businessType: 'manufacturer',
  description:
    'A leading manufacturer of medical supplies and healthcare equipment based in Shenzhen, China. We have over 15 years of experience supplying hospitals, clinics, and distributors across Asia and Africa. All products meet international quality standards including ISO 13485 certification.',
  categories: ['Medical Supplies', 'Consumer Goods', 'Electronics & Tech'],
  companySize: '201-500',
  yearFounded: '2008',
  website: 'https://sztechmed.cn',
  moq: '500 units per order',
  targetMarkets: ['Nigeria', 'West Africa', 'East Africa'],
  isVerified: true,
}

export default function CompanyProfilePage({
  params,
}: {
  params: { id: string }
}) {
  // params.id will be used for the API fetch later
  console.log('Company ID:', params.id)

  return (
    <div className="max-w-2xl mx-auto">

      {/* Back button */}
      <Link
        href="/browse"
        className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#1B3A6B] transition-colors mb-6"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to browse
      </Link>

      <ProfileCard
        {...MOCK_COMPANY}
        isOwner={false}
        onInterest={() => {
          // Interest logic will be wired here when API is ready
          console.log('Interest expressed in:', MOCK_COMPANY.companyName)
        }}
      />

    </div>
  )
}