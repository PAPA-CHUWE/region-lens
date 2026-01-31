// components/dashboard-ui/sidebar.tsx
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Settings, Settings2, X } from "lucide-react"

import { MenuItems } from "@/constants/MenuItems"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const SideBar = () => {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  // close sidebar on route change (mobile)
  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  const NavContent = () => (
    <>
      {/* Logo */}
      <div className="px-6 py-5">
        <Link href="/dashboard" className="md:block hidden">
          <Image
            src="/logos/regionlens.svg"
            width={180}
            height={100}
            alt="RegionLens"
            className="block dark:hidden"
            priority
          />
          <Image
            src="/logos/regionlens-dark.svg"
            width={180}
            height={100}
            alt="RegionLens dark"
            className="hidden dark:block"
            priority
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-3">
        {MenuItems.map((item) => {
          const Icon = item.icon
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`)

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
                isActive
                  ? "bg-card text-foreground shadow-sm"
                  : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4">
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
            pathname === "/settings"
              ? "bg-card text-foreground shadow-sm"
              : "text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          )}
        >
          <Settings />
          Settings
        </Link>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile menu button */}
      
      {!open && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setOpen(true)}
          className="fixed left-4 top-4 z-60 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}


      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-90 h-screen w-56 bg-primary text-primary-foreground rounded-r-xl",
          "transform transition-transform duration-300 ease-in-out md:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-end px-4 pt-4">

          <div className="pr-6 py-5 ">
            <Link href="/dashboard" className="block">
              <Image
                src="/logos/regionlens.svg"
                width={180}
                height={100}
                alt="RegionLens"
                className="block dark:hidden"
                priority
              />
              <Image
                src="/logos/regionlens-dark.svg"
                width={180}
                height={100}
                alt="RegionLens dark"
                className="hidden dark:block"
                priority
              />
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <NavContent />
      </aside>

      {/* Desktop sidebar */}
      <aside className="fixed top-0 left-0 z-40 hidden h-screen w-56 flex-col rounded-r-xl bg-primary text-primary-foreground md:flex">
        <NavContent />
      </aside>
    </>
  )
}

export default SideBar
