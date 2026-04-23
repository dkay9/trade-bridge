import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F0F4FF]">

      {/* Marketing Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

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

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-[#6B7280]">
            <a href="#" className="hover:text-[#1B3A6B] transition-colors">How it works</a>
            <a href="#" className="hover:text-[#1B3A6B] transition-colors">For Buyers</a>
            <a href="#" className="hover:text-[#1B3A6B] transition-colors">For Suppliers</a>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-[#1B3A6B] font-medium hover:underline"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="text-sm bg-[#1B3A6B] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#16305A] transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#C7D7F5] rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-xs font-medium text-[#1B3A6B]">
                Nigeria ↔ China B2B Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-bold text-[#1B3A6B] leading-tight mb-6">
              Connect with{' '}
              <span className="relative">
                <span className="relative z-10">verified</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#C9A84C]/20 -z-0"></span>
              </span>{' '}
              trade partners across borders
            </h1>

            {/* Subtext */}
            <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-lg">
              Tradebridge connects Nigerian importers and businesses with trusted
              Chinese manufacturers and suppliers — removing the friction, middlemen,
              and uncertainty from cross-border trade.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <Link
                href="/register"
                className="bg-[#1B3A6B] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#16305A] transition-colors text-sm"
              >
                Start for free
              </Link>
              <Link
                href="/browse"
                className="flex items-center gap-2 text-[#1B3A6B] font-semibold text-sm border border-[#C7D7F5] bg-white px-6 py-3 rounded-xl hover:bg-[#F0F4FF] transition-colors"
              >
                Browse suppliers
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — Platform preview card */}
          <div className="relative">

            {/* Glow behind card */}
            <div className="absolute inset-0 bg-[#1B3A6B] opacity-5 rounded-3xl blur-3xl" />

            {/* Main card */}
            <div className="relative bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm">

              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-[#6B7280] mb-1">New match found</p>
                  <p className="text-sm font-semibold text-[#1B3A6B]">3 suppliers match your needs</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
              </div>

              {/* Supplier list */}
              <div className="space-y-3">
                {[
                  { name: 'Shenzhen TechMed Co.', category: 'Medical Supplies', country: '🇨🇳', verified: true },
                  { name: 'Guangzhou Textile Ltd.', category: 'Fabrics & Textiles', country: '🇨🇳', verified: true },
                  { name: 'Yiwu General Trading', category: 'Consumer Goods', country: '🇨🇳', verified: false },
                ].map((supplier, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFF] border border-[#E8EFFF]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1B3A6B]/10 flex items-center justify-center text-sm font-bold text-[#1B3A6B]">
                        {supplier.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1B3A6B]">{supplier.name}</p>
                        <p className="text-xs text-[#6B7280]">{supplier.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {supplier.verified && (
                        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Connect button */}
              <button className="w-full mt-4 h-10 rounded-xl bg-[#1B3A6B] text-white text-sm font-semibold hover:bg-[#16305A] transition-colors">
                View all matches
              </button>
            </div>

            {/* Floating badge — bottom left */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl border border-[#E2E8F0] shadow-sm px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#1B3A6B]">Verified Suppliers</p>
                <p className="text-xs text-[#6B7280]">Documents checked</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '2,400+', label: 'Verified Suppliers' },
            { value: '800+', label: 'Nigerian Buyers' },
            { value: '₦0', label: 'Middlemen Fees' },
            { value: '48hrs', label: 'Avg. First Response' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#1B3A6B] mb-1">{stat.value}</p>
              <p className="text-sm text-[#6B7280]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}