"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Auth logic will be wired here when the API is ready
    console.log(formData)
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

        {/* Ambient glows */}
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
            Welcome back.<br />
            Your partners<br />
            <span className="text-[#C9A84C]">are waiting.</span>
          </h2>

          <p className="text-white/60 text-base leading-relaxed mb-12 max-w-sm">
            Pick up where you left off. Your matches, messages,
            and trade conversations are right where you left them.
          </p>

          {/* Feature highlights */}
          <div className="space-y-4">
            {[
              { icon: '🔒', label: 'Verified business profiles' },
              { icon: '⚡', label: 'Real-time messaging' },
              { icon: '🌐', label: 'Cross-border trade made simple' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-sm">
                  {item.icon}
                </div>
                <p className="text-white/70 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative z-10 mt-auto bg-white/5 border border-white/10 rounded-2xl p-5">
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            We closed our first deal with a Chinese manufacturer within a week
            of joining Tradebridge. The verification system builds real trust.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center text-xs font-bold text-[#C9A84C]">
              FK
            </div>
            <div>
              <p className="text-white text-sm font-medium">Fatima Kwari</p>
              <p className="text-white/40 text-xs">CEO, Abuja Trade Partners</p>
            </div>
          </div>
        </div>

      </div>

      {/* Right — Login form */}
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
              Sign in
            </h1>
            <p className="text-[#6B7280] text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-[#1B3A6B] font-semibold hover:underline">
                Create one free
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

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
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-[#1B3A6B]">
                  Password
                </label>
                <a href="#" className="text-xs text-[#6B7280] hover:text-[#1B3A6B] transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-[#1B3A6B] text-white text-sm font-semibold hover:bg-[#16305A] transition-colors"
            >
              Sign in
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#E2E8F0]" />
            <span className="text-xs text-[#9CA3AF]">or</span>
            <div className="flex-1 h-px bg-[#E2E8F0]" />
          </div>

          {/* Back to home */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full h-11 rounded-xl border border-[#E2E8F0] bg-white text-[#1B3A6B] text-sm font-medium hover:bg-[#F0F4FF] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to home
          </Link>

        </div>
      </div>
    </div>
  )
}