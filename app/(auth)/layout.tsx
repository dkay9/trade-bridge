import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tradebridge — Sign In',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-[#F0F4FF] flex items-center justify-center px-4 overflow-hidden">

      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(#1B3A6B 1px, transparent 1px),
            linear-gradient(90deg, #1B3A6B 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#1B3A6B] opacity-[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#C9A84C] opacity-[0.06] rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-sm bg-[#1B3A6B] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8H14M8 2L14 8L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#1B3A6B] text-2xl font-bold tracking-tight">
              trade<span className="text-[#C9A84C]">bridge</span>
            </span>
          </div>
          <p className="text-[#6B7280] text-sm tracking-widest uppercase">
            Nigeria ↔ China
          </p>
        </div>

        {children}

        <p className="text-center text-[#9CA3AF] text-xs mt-8">
          © {new Date().getFullYear()} Tradebridge. All rights reserved.
        </p>

      </div>
    </div>
  )
}