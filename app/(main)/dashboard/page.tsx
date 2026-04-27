"use client"

import Link from 'next/link'

const STATS = [
  {
    label: 'Total Matches',
    value: '4',
    change: '+2 this week',
    positive: true,
    locked: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    label: 'Profile Views',
    value: '38',
    change: '+12 this week',
    positive: true,
    locked: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    label: 'Interests Sent',
    value: '12',
    change: '5 pending response',
    positive: false,
    locked: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/>
        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    ),
  },
  {
    label: 'Messages',
    value: '0',
    change: 'Upgrade to unlock',
    positive: false,
    locked: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
]

const RECENT_MATCHES = [
  {
    id: '1',
    companyName: 'Shenzhen TechMed Co.',
    country: '🇨🇳',
    category: 'Medical Supplies',
    matchedAt: '2 days ago',
    isVerified: true,
  },
  {
    id: '4',
    companyName: 'Beijing Industrial Group',
    country: '🇨🇳',
    category: 'Industrial Machinery',
    matchedAt: '5 days ago',
    isVerified: true,
  },
  {
    id: '5',
    companyName: 'Shanghai Auto Parts Co.',
    country: '🇨🇳',
    category: 'Automotive Parts',
    matchedAt: '1 week ago',
    isVerified: true,
  },
]

const QUICK_ACTIONS = [
  {
    label: 'Browse suppliers',
    description: 'Discover new trade partners',
    href: '/browse',
    highlight: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
  },
  {
    label: 'Complete your profile',
    description: 'Increase your match rate',
    href: '/profile',
    highlight: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    label: 'Upgrade to Pro',
    description: 'Unlock messaging and deals',
    href: '/upgrade',
    highlight: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-4 md:space-y-6">

      {/* Page header */}
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-[#1B3A6B] mb-1">
          Good morning, Dangote 👋
        </h1>
        <p className="text-xs md:text-sm text-[#6B7280]">
          Here&apos;s what&apos;s happening with your trade activity.
        </p>
      </div>

      {/* Profile completion banner */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 md:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#F0F4FF] border border-[#C7D7F5] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs md:text-sm font-semibold text-[#1B3A6B]">
                  Profile completion
                </p>
                <span className="text-xs md:text-sm font-bold text-[#1B3A6B] ml-2">70%</span>
              </div>
              <div className="w-full h-1.5 bg-[#F0F4FF] rounded-full overflow-hidden">
                <div className="h-full bg-[#1B3A6B] rounded-full" style={{ width: '70%' }} />
              </div>
              <p className="text-xs text-[#6B7280] mt-1">
                Add verification document to reach 100%
              </p>
            </div>
          </div>
          <Link
            href="/profile/edit"
            className="flex-shrink-0 self-start sm:self-auto px-3 py-2 rounded-xl border border-[#E2E8F0] text-xs md:text-sm font-medium text-[#1B3A6B] hover:bg-[#F0F4FF] transition-colors whitespace-nowrap"
          >
            Complete profile
          </Link>
        </div>
      </div>

      {/* Stats grid — 1 col on 320px, 2 col on sm, 4 col on xl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl border border-[#E2E8F0] p-4 flex items-center gap-4 sm:flex-col sm:items-start ${
              stat.locked ? 'opacity-60' : ''
            }`}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
              stat.locked
                ? 'bg-[#F3F4F6] text-[#9CA3AF]'
                : 'bg-[#F0F4FF] text-[#1B3A6B]'
            }`}>
              {stat.locked ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              ) : stat.icon}
            </div>
            <div className="min-w-0">
              <p className="text-xl md:text-2xl font-bold text-[#1B3A6B] leading-tight">
                {stat.value}
              </p>
              <p className="text-xs text-[#9CA3AF] mt-0.5 truncate">{stat.label}</p>
              <p className={`text-xs font-medium mt-0.5 ${
                stat.locked
                  ? 'text-[#C9A84C]'
                  : stat.positive
                  ? 'text-green-600'
                  : 'text-[#6B7280]'
              }`}>
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section — stacks on mobile */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">

        {/* Recent matches */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-[#E2E8F0] p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm md:text-base font-bold text-[#1B3A6B]">
              Recent Matches
            </h2>
            <Link
              href="/matches"
              className="text-xs text-[#6B7280] hover:text-[#1B3A6B] transition-colors flex items-center gap-1"
            >
              View all
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="space-y-2">
            {RECENT_MATCHES.map((match) => {
              const initials = match.companyName
                .split(' ')
                .map((w) => w[0])
                .slice(0, 2)
                .join('')
                .toUpperCase()

              return (
                <Link
                  key={match.id}
                  href={`/company/${match.id}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F8FAFF] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#F0F4FF] border border-[#C7D7F5] flex items-center justify-center text-xs font-bold text-[#1B3A6B] flex-shrink-0">
                    {initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className="text-xs md:text-sm font-semibold text-[#1B3A6B] group-hover:underline truncate">
                        {match.companyName}
                      </p>
                      {match.isVerified && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold flex-shrink-0">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#6B7280] truncate">
                      {match.country} · {match.category}
                    </p>
                  </div>
                  <p className="text-xs text-[#9CA3AF] flex-shrink-0 hidden sm:block">
                    {match.matchedAt}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 md:p-6">
          <h2 className="text-sm md:text-base font-bold text-[#1B3A6B] mb-4">
            Quick Actions
          </h2>
          <div className="space-y-2">
            {QUICK_ACTIONS.map((action, i) => (
              <Link
                key={i}
                href={action.href}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all group ${
                  action.highlight
                    ? 'border-[#C9A84C]/40 bg-[#FFF8EC] hover:bg-[#FEF0D0]'
                    : 'border-[#E2E8F0] hover:border-[#C7D7F5] hover:bg-[#F8FAFF]'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  action.highlight
                    ? 'bg-[#C9A84C]/20 text-[#92620A]'
                    : 'bg-[#F0F4FF] text-[#1B3A6B]'
                }`}>
                  {action.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className={`text-xs md:text-sm font-semibold truncate ${
                    action.highlight ? 'text-[#92620A]' : 'text-[#1B3A6B]'
                  }`}>
                    {action.label}
                  </p>
                  <p className="text-xs text-[#6B7280] truncate">{action.description}</p>
                </div>
                <svg
                  className="ml-auto text-[#9CA3AF] group-hover:text-[#1B3A6B] transition-colors flex-shrink-0"
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}