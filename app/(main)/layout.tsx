export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#F0F4FF] text-[#1B3A6B]">

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-6 shadow-sm">
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

        {/* Right side — placeholder for user menu */}
        <div className="w-8 h-8 rounded-full bg-[#E2E8F0] border border-[#CBD5E0]" />
      </header>

      <div className="flex pt-16">

        {/* Sidebar */}
        <aside className="fixed top-16 left-0 bottom-0 w-60 bg-white border-r border-[#E2E8F0] flex flex-col px-3 py-6 shadow-sm">
          <nav className="space-y-1 text-sm">

            {/* Dashboard */}
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#6B7280] hover:text-[#1B3A6B] hover:bg-[#F0F4FF] cursor-pointer transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
              <span>Dashboard</span>
            </div>

            {/* Browse */}
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#6B7280] hover:text-[#1B3A6B] hover:bg-[#F0F4FF] cursor-pointer transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <span>Browse</span>
            </div>

            {/* Matches */}
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#6B7280] hover:text-[#1B3A6B] hover:bg-[#F0F4FF] cursor-pointer transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>Matches</span>
            </div>

            {/* Messages */}
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#6B7280] hover:text-[#1B3A6B] hover:bg-[#F0F4FF] cursor-pointer transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>Messages</span>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#6B7280] hover:text-[#1B3A6B] hover:bg-[#F0F4FF] cursor-pointer transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Profile</span>
            </div>

          </nav>

          {/* Upgrade card */}
          <div className="mt-auto px-1">
            <div className="bg-[#F0F4FF] border border-[#C7D7F5] rounded-xl p-4">
              <p className="text-xs text-[#6B7280] mb-1">Free Plan</p>
              <p className="text-[#1B3A6B] text-sm font-semibold mb-3">Upgrade to Pro</p>
              <div className="w-full h-8 rounded-lg bg-[#1B3A6B] flex items-center justify-center cursor-pointer hover:bg-[#16305A] transition-colors">
                <span className="text-white text-xs font-semibold">Upgrade Now</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="ml-60 flex-1 min-h-[calc(100vh-4rem)] p-8">
          {children}
        </main>

      </div>
    </div>
  )
}