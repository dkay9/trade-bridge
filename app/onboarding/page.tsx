"use client"

import { useState } from 'react'
import Link from 'next/link'

const STEPS = [
  'Business Type',
  'Company Details',
  'Product Categories',
  'Trade Preferences',
  'Verification',
]

const BUSINESS_TYPES = [
  { value: 'manufacturer', label: 'Manufacturer', description: 'I produce goods', icon: '🏭' },
  { value: 'importer', label: 'Importer', description: 'I import foreign goods', icon: '📦' },
  { value: 'wholesaler', label: 'Wholesaler', description: 'I buy and sell in bulk', icon: '🏪' },
  { value: 'retailer', label: 'Retailer', description: 'I sell directly to consumers', icon: '🛍️' },
  { value: 'exporter', label: 'Exporter', description: 'I export local goods', icon: '🚢' },
  { value: 'service', label: 'Service Provider', description: 'I provide trade services', icon: '🤝' },
]

const PRODUCT_CATEGORIES = [
  'Electronics & Tech',
  'Textiles & Apparel',
  'Medical Supplies',
  'Construction Materials',
  'Food & Agriculture',
  'Industrial Machinery',
  'Consumer Goods',
  'Chemicals & Plastics',
  'Automotive Parts',
  'Furniture & Home',
  'Beauty & Personal Care',
  'Energy & Power',
]

const COMPANY_SIZES = [
  { value: '1-10', label: '1 – 10 employees' },
  { value: '11-50', label: '11 – 50 employees' },
  { value: '51-200', label: '51 – 200 employees' },
  { value: '201-500', label: '201 – 500 employees' },
  { value: '500+', label: '500+ employees' },
]

type FormData = {
  businessType: string
  companyDescription: string
  website: string
  companySize: string
  yearFounded: string
  productCategories: string[]
  moq: string
  targetMarkets: string[]
  documentName: string
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    businessType: '',
    companyDescription: '',
    website: '',
    companySize: '',
    yearFounded: '',
    productCategories: [],
    moq: '',
    targetMarkets: [],
    documentName: '',
  })

  const [otherCategory, setOtherCategory] = useState('')
  const [showOtherInput, setShowOtherInput] = useState(false)

  const updateForm = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleCategory = (category: string) => {
    const current = formData.productCategories
    if (current.includes(category)) {
      updateForm('productCategories', current.filter((c) => c !== category))
    } else {
      updateForm('productCategories', [...current, category])
    }
  }

  const confirmOtherCategory = () => {
    const trimmed = otherCategory.trim()
    if (trimmed && !formData.productCategories.includes(trimmed)) {
        updateForm('productCategories', [...formData.productCategories, trimmed])
    }
    setOtherCategory('')
    setShowOtherInput(false)
  }

  const toggleMarket = (market: string) => {
    const current = formData.targetMarkets
    if (current.includes(market)) {
      updateForm('targetMarkets', current.filter((m) => m !== market))
    } else {
      updateForm('targetMarkets', [...current, market])
    }
  }

  const canProceed = () => {
    if (currentStep === 0) return formData.businessType !== ''
    if (currentStep === 1) return formData.companyDescription.trim() !== '' && formData.companySize !== ''
    if (currentStep === 2) return formData.productCategories.length > 0
    if (currentStep === 3) return formData.targetMarkets.length > 0
    return true
  }

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // Will be wired to API later
    console.log('Onboarding complete:', formData)
  }

  const progressPercent = ((currentStep) / (STEPS.length - 1)) * 100

  return (
    <div className="min-h-screen bg-[#F0F4FF] flex flex-col">

      {/* Top bar */}
      <header className="bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-sm bg-[#1B3A6B] flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M2 8H14M8 2L14 8L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#1B3A6B] text-lg font-bold tracking-tight">
            trade<span className="text-[#C9A84C]">bridge</span>
          </span>
        </div>
        <Link href="/" className="text-xs text-[#9CA3AF] hover:text-[#1B3A6B] transition-colors">
          Save & finish later
        </Link>
      </header>

      {/* Progress bar */}
      <div className="w-full h-1 bg-[#E2E8F0]">
        <div
          className="h-full bg-[#1B3A6B] transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {STEPS.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-all ${
                  i < currentStep
                    ? 'bg-[#1B3A6B] text-white'
                    : i === currentStep
                    ? 'bg-[#1B3A6B] text-white ring-4 ring-[#1B3A6B]/20'
                    : 'bg-white border border-[#E2E8F0] text-[#9CA3AF]'
                }`}>
                  {i < currentStep ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`w-8 h-px ${i < currentStep ? 'bg-[#1B3A6B]' : 'bg-[#E2E8F0]'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step card */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm">

            {/* Step 1 — Business Type */}
            {currentStep === 0 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1B3A6B] mb-1">
                  What type of business are you?
                </h2>
                <p className="text-[#6B7280] text-sm mb-8">
                  This helps us show you the most relevant trade partners.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {BUSINESS_TYPES.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => updateForm('businessType', type.value)}
                      className={`flex flex-col items-start p-4 rounded-xl border-2 transition-all text-left ${
                        formData.businessType === type.value
                          ? 'border-[#1B3A6B] bg-[#F0F4FF]'
                          : 'border-[#E2E8F0] hover:border-[#C7D7F5]'
                      }`}
                    >
                      <span className="text-2xl mb-3">{type.icon}</span>
                      <p className={`text-sm font-semibold mb-0.5 ${
                        formData.businessType === type.value ? 'text-[#1B3A6B]' : 'text-[#374151]'
                      }`}>
                        {type.label}
                      </p>
                      <p className="text-xs text-[#6B7280]">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 — Company Details */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1B3A6B] mb-1">
                  Tell us about your company
                </h2>
                <p className="text-[#6B7280] text-sm mb-8">
                  This appears on your public profile and helps partners find you.
                </p>
                <div className="space-y-5">

                  <div>
                    <label className="block text-sm font-medium text-[#1B3A6B] mb-1.5">
                      Company description <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      value={formData.companyDescription}
                      onChange={(e) => updateForm('companyDescription', e.target.value)}
                      placeholder="Describe what your company does, what you trade, and what makes you reliable..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-[#1B3A6B] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1B3A6B] mb-1.5">
                      Website <span className="text-[#9CA3AF] font-normal">(optional)</span>
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => updateForm('website', e.target.value)}
                      placeholder="https://yourcompany.com"
                      className="w-full h-11 px-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-[#1B3A6B] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1B3A6B] mb-1.5">
                        Company size <span className="text-red-400">*</span>
                      </label>
                      <div className="space-y-2">
                        {COMPANY_SIZES.map((size) => (
                          <button
                            key={size.value}
                            type="button"
                            onClick={() => updateForm('companySize', size.value)}
                            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all text-sm ${
                              formData.companySize === size.value
                                ? 'border-[#1B3A6B] bg-[#F0F4FF] text-[#1B3A6B] font-medium'
                                : 'border-[#E2E8F0] text-[#6B7280] hover:border-[#C7D7F5]'
                            }`}
                          >
                            {size.label}
                            {formData.companySize === size.value && (
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5"/>
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1B3A6B] mb-1.5">
                        Year founded <span className="text-[#9CA3AF] font-normal">(optional)</span>
                      </label>
                      <input
                        type="number"
                        value={formData.yearFounded}
                        onChange={(e) => updateForm('yearFounded', e.target.value)}
                        placeholder="e.g. 2015"
                        min="1900"
                        max={new Date().getFullYear()}
                        className="w-full h-11 px-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-[#1B3A6B] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
                      />
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Step 3 — Product Categories */}
            {currentStep === 2 && (
                <div>
                    <h2 className="text-2xl font-bold text-[#1B3A6B] mb-1">
                    What do you trade?
                    </h2>
                    <p className="text-[#6B7280] text-sm mb-8">
                    Select all categories that apply. This powers your matches.
                    </p>
                    <div className="flex flex-wrap gap-3">
                    {PRODUCT_CATEGORIES.map((category) => {
                        const isSelected = formData.productCategories.includes(category)
                        return (
                        <button
                            key={category}
                            type="button"
                            onClick={() => toggleCategory(category)}
                            className={`px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                            isSelected
                                ? 'border-[#1B3A6B] bg-[#1B3A6B] text-white'
                                : 'border-[#E2E8F0] text-[#6B7280] hover:border-[#C7D7F5] hover:text-[#1B3A6B]'
                            }`}
                        >
                            {category}
                        </button>
                        )
                    })}

                    {/* Custom categories added by user */}
                    {formData.productCategories
                        .filter((c) => !PRODUCT_CATEGORIES.includes(c))
                        .map((custom) => (
                        <button
                            key={custom}
                            type="button"
                            onClick={() => toggleCategory(custom)}
                            className="px-4 py-2.5 rounded-xl border-2 border-[#1B3A6B] bg-[#1B3A6B] text-white text-sm font-medium transition-all flex items-center gap-2"
                        >
                            {custom}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                        ))}

                    {/* Other toggle */}
                    {!showOtherInput && (
                        <button
                        type="button"
                        onClick={() => setShowOtherInput(true)}
                        className="px-4 py-2.5 rounded-xl border-2 border-dashed border-[#C7D7F5] text-[#6B7280] hover:border-[#1B3A6B] hover:text-[#1B3A6B] text-sm font-medium transition-all flex items-center gap-2"
                        >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                        Other
                        </button>
                    )}
                    </div>

                    {/* Other input — revealed when Other is clicked */}
                    {showOtherInput && (
                    <div className="mt-4 flex items-center gap-3">
                        <input
                        type="text"
                        value={otherCategory}
                        onChange={(e) => setOtherCategory(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && confirmOtherCategory()}
                        placeholder="e.g. Solar Equipment"
                        autoFocus
                        className="flex-1 h-11 px-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-[#1B3A6B] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
                        />
                        <button
                        type="button"
                        onClick={confirmOtherCategory}
                        disabled={!otherCategory.trim()}
                        className="h-11 px-4 rounded-xl bg-[#1B3A6B] text-white text-sm font-semibold hover:bg-[#16305A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                        Add
                        </button>
                        <button
                        type="button"
                        onClick={() => { setShowOtherInput(false); setOtherCategory('') }}
                        className="h-11 px-4 rounded-xl border border-[#E2E8F0] text-[#6B7280] text-sm hover:text-[#1B3A6B] transition-colors"
                        >
                        Cancel
                        </button>
                    </div>
                    )}

                    {formData.productCategories.length > 0 && (
                    <p className="text-xs text-[#1B3A6B] mt-4 font-medium">
                        {formData.productCategories.length} categor{formData.productCategories.length === 1 ? 'y' : 'ies'} selected
                    </p>
                    )}
                </div>
            )}

            {/* Step 4 — Trade Preferences */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1B3A6B] mb-1">
                  Trade preferences
                </h2>
                <p className="text-[#6B7280] text-sm mb-8">
                  Help partners understand how you like to work.
                </p>
                <div className="space-y-6">

                  <div>
                    <label className="block text-sm font-medium text-[#1B3A6B] mb-1.5">
                      Minimum order quantity (MOQ){' '}
                      <span className="text-[#9CA3AF] font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.moq}
                      onChange={(e) => updateForm('moq', e.target.value)}
                      placeholder="e.g. 500 units, $5,000 minimum"
                      className="w-full h-11 px-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] text-[#1B3A6B] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1B3A6B] mb-3">
                      Target markets <span className="text-red-400">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['Nigeria', 'China', 'West Africa', 'East Africa', 'Southeast Asia', 'Global'].map((market) => {
                        const isSelected = formData.targetMarkets.includes(market)
                        return (
                          <button
                            key={market}
                            type="button"
                            onClick={() => toggleMarket(market)}
                            className={`px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                              isSelected
                                ? 'border-[#1B3A6B] bg-[#1B3A6B] text-white'
                                : 'border-[#E2E8F0] text-[#6B7280] hover:border-[#C7D7F5] hover:text-[#1B3A6B]'
                            }`}
                          >
                            {market}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Step 5 — Verification */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1B3A6B] mb-1">
                  Verify your business
                </h2>
                <p className="text-[#6B7280] text-sm mb-8">
                  Upload a business registration document to get your verified badge.
                  This significantly increases your match rate.
                </p>

                {/* Upload area */}
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-[#C7D7F5] rounded-2xl bg-[#F8FAFF] cursor-pointer hover:border-[#1B3A6B] hover:bg-[#F0F4FF] transition-all group">
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) updateForm('documentName', file.name)
                    }}
                  />
                  {formData.documentName ? (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-[#1B3A6B]">{formData.documentName}</p>
                      <p className="text-xs text-[#6B7280]">Click to replace</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#E8EFFF] group-hover:bg-[#D0DEFF] flex items-center justify-center transition-colors">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="17 8 12 3 7 8"/>
                          <line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-[#1B3A6B]">
                          Click to upload document
                        </p>
                        <p className="text-xs text-[#9CA3AF] mt-1">
                          PDF, JPG or PNG — CAC certificate, business license, etc.
                        </p>
                      </div>
                    </div>
                  )}
                </label>

                {/* Skip note */}
                <p className="text-xs text-[#9CA3AF] text-center mt-4">
                  You can skip this and verify later from your profile settings.
                </p>

                {/* What you get */}
                <div className="mt-6 bg-[#F0F4FF] border border-[#C7D7F5] rounded-xl p-4">
                  <p className="text-xs font-semibold text-[#1B3A6B] mb-3">
                    With a verified badge you get:
                  </p>
                  <div className="space-y-2">
                    {[
                      '3x more profile views',
                      'Priority placement in search results',
                      'Higher trust score with potential partners',
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                        <p className="text-xs text-[#4B5563]">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              onClick={handleBack}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm font-medium text-[#6B7280] hover:text-[#1B3A6B] hover:border-[#C7D7F5] transition-all ${
                currentStep === 0 ? 'invisible' : ''
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back
            </button>

            <p className="text-xs text-[#9CA3AF]">
              Step {currentStep + 1} of {STEPS.length}
            </p>

            {currentStep < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B3A6B] text-white text-sm font-semibold hover:bg-[#16305A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B3A6B] text-white text-sm font-semibold hover:bg-[#16305A] transition-colors"
              >
                Complete profile
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}