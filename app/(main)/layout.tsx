import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#F0F4FF] text-[#1B3A6B]">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <main className="ml-60 flex-1 min-h-[calc(100vh-4rem)] p-8">
          {children}
        </main>
      </div>
    </div>
  )
}