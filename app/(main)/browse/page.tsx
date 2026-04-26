"use client"

import { useState, useMemo } from 'react'
import CompanyCard from '@/components/browse/CompanyCard'
import FilterBar from '@/components/browse/FilterBar'

type Company = {
  id: string
  companyName: string
  country: 'nigeria' | 'china'
  businessType: string
  categories: string[]
  companySize: string
  isVerified: boolean
}

// Mock data — will be replaced with real API fetch later
const MOCK_COMPANIES: Company[] = [
  {
    id: '1',
    companyName: 'Shenzhen TechMed Co.',
    country: 'china',
    businessType: 'manufacturer',
    categories: ['Medical Supplies', 'Electronics & Tech', 'Consumer Goods'],
    companySize: '201-500',
    isVerified: true,
  },
  {
    id: '2',
    companyName: 'Guangzhou Textile Ltd.',
    country: 'china',
    businessType: 'manufacturer',
    categories: ['Textiles & Apparel', 'Consumer Goods'],
    companySize: '51-200',
    isVerified: true,
  },
  {
    id: '3',
    companyName: 'Yiwu General Trading',
    country: 'china',
    businessType: 'wholesaler',
    categories: ['Consumer Goods', 'Furniture & Home', 'Beauty & Personal Care'],
    companySize: '11-50',
    isVerified: false,
  },
  {
    id: '4',
    companyName: 'Beijing Industrial Group',
    country: 'china',
    businessType: 'manufacturer',
    categories: ['Industrial Machinery', 'Construction Materials', 'Energy & Power'],
    companySize: '500+',
    isVerified: true,
  },
  {
    id: '5',
    companyName: 'Shanghai Auto Parts Co.',
    country: 'china',
    businessType: 'exporter',
    categories: ['Automotive Parts', 'Industrial Machinery'],
    companySize: '51-200',
    isVerified: true,
  },
  {
    id: '6',
    companyName: 'Hangzhou Chem Solutions',
    country: 'china',
    businessType: 'manufacturer',
    categories: ['Chemicals & Plastics', 'Industrial Machinery'],
    companySize: '201-500',
    isVerified: false,
  },
  {
    id: '7',
    companyName: 'Dongguan Electronics Hub',
    country: 'china',
    businessType: 'manufacturer',
    categories: ['Electronics & Tech', 'Consumer Goods'],
    companySize: '51-200',
    isVerified: true,
  },
  {
    id: '8',
    companyName: 'Fujian Food Exports Ltd.',
    country: 'china',
    businessType: 'exporter',
    categories: ['Food & Agriculture', 'Consumer Goods'],
    companySize: '11-50',
    isVerified: false,
  },
]

type Filters = {
  search: string
  businessType: string
  category: string
  verifiedOnly: boolean
}

export default function BrowsePage() {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    businessType: '',
    category: '',
    verifiedOnly: false,
  })

  const [interestedIds, setInterestedIds] = useState<string[]>([])

  const handleInterest = (id: string) => {
    setInterestedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const filteredCompanies = useMemo(() => {
    return MOCK_COMPANIES.filter((company) => {
      const matchesSearch =
        filters.search === '' ||
        company.companyName.toLowerCase().includes(filters.search.toLowerCase()) ||
        company.categories.some((cat) =>
          cat.toLowerCase().includes(filters.search.toLowerCase())
        )

      const matchesType =
        filters.businessType === '' || company.businessType === filters.businessType

      const matchesCategory =
        filters.category === '' || company.categories.includes(filters.category)

      const matchesVerified = !filters.verifiedOnly || company.isVerified

      return matchesSearch && matchesType && matchesCategory && matchesVerified
    })
  }, [filters])

  return (
    <div>

      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1B3A6B] mb-1">Browse Suppliers</h1>
        <p className="text-sm text-[#6B7280]">
          Discover verified Chinese manufacturers and suppliers looking to trade
          with Nigerian businesses.
        </p>
      </div>

      {/* Filter bar */}
      <FilterBar
        filters={filters}
        onChange={setFilters}
        totalResults={filteredCompanies.length}
      />

      {/* Results grid */}
      {filteredCompanies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              {...company}
              onInterest={handleInterest}
              hasExpressedInterest={interestedIds.includes(company.id)}
            />
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#F0F4FF] border border-[#C7D7F5] flex items-center justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </div>
          <h3 className="text-base font-semibold text-[#1B3A6B] mb-1">
            No companies found
          </h3>
          <p className="text-sm text-[#6B7280] max-w-xs">
            Try adjusting your filters or search terms to find more results.
          </p>
        </div>
      )}

    </div>
  )
}