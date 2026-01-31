// app/layout or your page-level layout component
import SideBar from "@/components/dashboard-ui/sidebar"
import TopBar from "@/components/dashboard-ui/topbar"
import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar (renders fixed on md+) */}
      <SideBar />

      {/* Content area */}
      {/* on md+ we add left margin equal to sidebar width so content is not hidden under it */}
      <div className="flex flex-col flex-1 md:ml-56">
        <TopBar />

        <main className="flex-1 px-6 py-5 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
