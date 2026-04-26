"use client"

type NavbarProps = {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-6 shadow-sm">

      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuClick}
          className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[#6B7280] hover:text-[#1B3A6B] hover:bg-[#F0F4FF] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-sm bg-[#1B3A6B] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M2 8H14M8 2L14 8L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#1B3A6B] text-lg font-bold tracking-tight">
            trade<span className="text-[#C9A84C]">bridge</span>
          </span>
        </div>
      </div>

      {/* Right — Notifications + User */}
      <div className="flex items-center gap-4">

        <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-[#6B7280] hover:text-[#1B3A6B] hover:bg-[#F0F4FF] transition-colors cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"/>
        </button>

        <div className="w-px h-6 bg-[#E2E8F0]"/>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-[#6B7280]">Company</p>
            <p className="text-sm font-semibold text-[#1B3A6B] leading-tight">
              Dangote Industries
            </p>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white text-sm font-bold group-hover:bg-[#16305A] transition-colors">
            D
          </div>
        </div>

      </div>
    </header>
  )
}