"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    label: 'Browse',
    href: '/browse',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
  },
  {
    label: 'Matches',
    href: '/matches',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    label: 'Messages',
    href: '/messages',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
]

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside className={`
        fixed top-16 left-0 bottom-0 z-50 w-60 bg-white border-r border-[#E2E8F0] flex flex-col px-3 py-6 shadow-sm
        transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>

        <nav className="space-y-1 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#1B3A6B] text-white'
                    : 'text-[#6B7280] hover:text-[#1B3A6B] hover:bg-[#F0F4FF]'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-[#6B7280]'}>
                  {item.icon}
                </span>
                <span className={isActive ? 'font-medium' : ''}>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Upgrade card */}
        <div className="mt-auto px-1">
          <div className="bg-[#F0F4FF] border border-[#C7D7F5] rounded-xl p-4">
            <p className="text-xs text-[#6B7280] mb-1">Free Plan</p>
            <p className="text-[#1B3A6B] text-sm font-semibold mb-3">Upgrade to Pro</p>
            <Link
              href="/upgrade"
              onClick={onClose}
              className="w-full h-8 rounded-lg bg-[#1B3A6B] hover:bg-[#16305A] transition-colors flex items-center justify-center"
            >
              <span className="text-white text-xs font-semibold">Upgrade Now</span>
            </Link>
          </div>
        </div>

      </aside>
    </>
  )
}