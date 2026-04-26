"use client"

type Filters = {
  search: string
  businessType: string
  category: string
  verifiedOnly: boolean
}

type FilterBarProps = {
  filters: Filters
  onChange: (filters: Filters) => void
  totalResults: number
}

const BUSINESS_TYPES = [
  { value: '', label: 'All types' },
  { value: 'manufacturer', label: 'Manufacturer' },
  { value: 'importer', label: 'Importer' },
  { value: 'wholesaler', label: 'Wholesaler' },
  { value: 'retailer', label: 'Retailer' },
  { value: 'exporter', label: 'Exporter' },
  { value: 'service', label: 'Service Provider' },
]

const CATEGORIES = [
  { value: '', label: 'All categories' },
  { value: 'Electronics & Tech', label: 'Electronics & Tech' },
  { value: 'Textiles & Apparel', label: 'Textiles & Apparel' },
  { value: 'Medical Supplies', label: 'Medical Supplies' },
  { value: 'Construction Materials', label: 'Construction Materials' },
  { value: 'Food & Agriculture', label: 'Food & Agriculture' },
  { value: 'Industrial Machinery', label: 'Industrial Machinery' },
  { value: 'Consumer Goods', label: 'Consumer Goods' },
  { value: 'Chemicals & Plastics', label: 'Chemicals & Plastics' },
  { value: 'Automotive Parts', label: 'Automotive Parts' },
  { value: 'Furniture & Home', label: 'Furniture & Home' },
  { value: 'Beauty & Personal Care', label: 'Beauty & Personal Care' },
  { value: 'Energy & Power', label: 'Energy & Power' },
]

export default function FilterBar({ filters, onChange, totalResults }: FilterBarProps) {
  const update = (field: keyof Filters, value: string | boolean) => {
    onChange({ ...filters, [field]: value })
  }

  const hasActiveFilters =
    filters.search !== '' ||
    filters.businessType !== '' ||
    filters.category !== '' ||
    filters.verifiedOnly

  const clearAll = () => {
    onChange({ search: '', businessType: '', category: '', verifiedOnly: false })
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 mb-6 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-3">

        {/* Search */}
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => update('search', e.target.value)}
            placeholder="Search companies or keywords..."
            className="w-full h-10 pl-9 pr-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-[#1B3A6B] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
          />
        </div>

        {/* Business type */}
        <select
          value={filters.businessType}
          onChange={(e) => update('businessType', e.target.value)}
          className="h-10 px-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-sm text-[#1B3A6B] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all cursor-pointer"
        >
          {BUSINESS_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

        {/* Category */}
        <select
          value={filters.category}
          onChange={(e) => update('category', e.target.value)}
          className="h-10 px-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-sm text-[#1B3A6B] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all cursor-pointer"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>

        {/* Verified only toggle */}
        <button
          type="button"
          onClick={() => update('verifiedOnly', !filters.verifiedOnly)}
          className={`h-10 px-4 rounded-xl border text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
            filters.verifiedOnly
              ? 'border-green-300 bg-green-50 text-green-700'
              : 'border-[#E2E8F0] bg-[#F8FAFF] text-[#6B7280] hover:border-[#C7D7F5] hover:text-[#1B3A6B]'
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Verified only
        </button>

      </div>

      {/* Results count + clear filters */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#F3F4F6]">
        <p className="text-xs text-[#6B7280]">
          <span className="font-semibold text-[#1B3A6B]">{totalResults}</span>{' '}
          {totalResults === 1 ? 'company' : 'companies'} found
        </p>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-[#6B7280] hover:text-[#1B3A6B] transition-colors flex items-center gap-1"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            Clear filters
          </button>
        )}
      </div>

    </div>
  )
}