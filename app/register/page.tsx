"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [selectedCountry, setSelectedCountry] = useState<'nigeria' | 'china' | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ ...formData, country: selectedCountry })
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* Left — Branding splash panel */}
      <div className="hidden lg:flex flex-col bg-[#1B3A6B] relative overflow-hidden px-14 py-12">

        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C] opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2 mb-auto">
          <div className="w-8 h-8 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M2 8H14M8 2L14 8L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-white text-xl font-bold tracking-tight">
            trade<span className="text-[#C9A84C]">bridge</span>
          </span>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C]"></span>
            <span className="text-xs font-medium text-white/80 tracking-wide">
              Nigeria ↔ China Trade Network
            </span>
          </div>

          <h2 className="text-4xl font-bold text-white leading-tight mb-6">
            Your next trade<br />
            partner is already<br />
            <span className="text-[#C9A84C]">waiting for you.</span>
          </h2>

          <p className="text-white/60 text-base leading-relaxed mb-12 max-w-sm">
            Join a verified network of Nigerian importers and Chinese manufacturers
            built for serious cross-border trade.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '2,400+', label: 'Suppliers' },
              { value: '800+', label: 'Buyers' },
              { value: '48hrs', label: 'Avg. Response' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-2xl font-bold text-white mb-0.5">{stat.value}</p>
                <p className="text-xs text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative z-10 mt-auto bg-white/5 border border-white/10 rounded-2xl p-5">
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Tradebridge cut our sourcing time in half. We found a verified
            supplier in Guangzhou within two days.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center text-xs font-bold text-[#C9A84C]">
              AO
            </div>
            <div>
              <p className="text-white text-sm font-medium">Adebayo Okonkwo</p>
              <p className="text-white/40 text-xs">MD, Lagos Import Co.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Right — Register form */}
      <div className="flex flex-col justify-center px-8 md:px-16 py-12 bg-[#F0F4FF]">

        {/* Mobile logo */}
        <div className="flex lg:hidden items-center gap-2 mb-10">
          <div className="w-7 h-7 rounded-sm bg-[#1B3A6B] flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M2 8H14M8 2L14 8L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#1B3A6B] text-lg font-bold">
            trade<span className="text-[#C9A84C]">bridge</span>
          </span>
        </div>

        <div className="max-w-md w-full mx-auto">

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1B3A6B] mb-2">
              Create your account
            </h1>
            <p className="text-[#6B7280] text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-[#1B3A6B] font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-[#1B3A6B] mb-1.5">
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Dangote Industries"
                required
                className="w-full h-11 px-4 rounded-xl border border-[#E2E8F0] bg-white text-[#1B3A6B] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#1B3A6B] mb-1.5">
                Business email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
                className="w-full h-11 px-4 rounded-xl border border-[#E2E8F0] bg-white text-[#1B3A6B] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#1B3A6B] mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  required
                  className="w-full h-11 px-4 pr-11 rounded-xl border border-[#E2E8F0] bg-white text-[#1B3A6B] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#1B3A6B] transition-colors"
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Country Selector */}
            <div>
              <label className="block text-sm font-medium text-[#1B3A6B] mb-1.5">
                Your business is based in
              </label>
              <div className="grid grid-cols-2 gap-3">

                <button
                  type="button"
                  onClick={() => setSelectedCountry('nigeria')}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                    selectedCountry === 'nigeria'
                      ? 'border-[#1B3A6B] bg-[#F0F4FF]'
                      : 'border-[#E2E8F0] bg-white hover:border-[#C7D7F5]'
                  }`}
                >
                  <span className="text-2xl">🇳🇬</span>
                  <div className="text-left">
                    <p className={`text-sm font-semibold ${selectedCountry === 'nigeria' ? 'text-[#1B3A6B]' : 'text-[#374151]'}`}>
                      Nigeria
                    </p>
                    <p className="text-xs text-[#6B7280]">Buyer</p>
                  </div>
                  {selectedCountry === 'nigeria' && (
                    <div className="ml-auto w-5 h-5 rounded-full bg-[#1B3A6B] flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCountry('china')}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                    selectedCountry === 'china'
                      ? 'border-[#1B3A6B] bg-[#F0F4FF]'
                      : 'border-[#E2E8F0] bg-white hover:border-[#C7D7F5]'
                  }`}
                >
                  <span className="text-2xl">🇨🇳</span>
                  <div className="text-left">
                    <p className={`text-sm font-semibold ${selectedCountry === 'china' ? 'text-[#1B3A6B]' : 'text-[#374151]'}`}>
                      China
                    </p>
                    <p className="text-xs text-[#6B7280]">Supplier</p>
                  </div>
                  {selectedCountry === 'china' && (
                    <div className="ml-auto w-5 h-5 rounded-full bg-[#1B3A6B] flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                  )}
                </button>

              </div>
            </div>

            {/* Terms */}
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              By creating an account you agree to our{' '}
              <a href="#" className="text-[#1B3A6B] hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-[#1B3A6B] hover:underline">Privacy Policy</a>.
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={!selectedCountry}
              className="w-full h-11 rounded-xl bg-[#1B3A6B] text-white text-sm font-semibold hover:bg-[#16305A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Create account
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}