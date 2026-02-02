import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

const SettingsSkeleton = () => {
  const loading = true 

  if (loading) {
    return <SettingsSkeleton />
  }
  return (
    <div className="flex gap-6">
      {/* Left nav skeleton (desktop only) */}
      <aside className="hidden w-56 shrink-0 rounded-xl border bg-card/80 p-4 md:block">
        <Skeleton className="mb-4 h-4 w-24" />
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-full rounded-lg" />
          ))}
        </div>
      </aside>

      {/* Right content */}
      <section className="flex-1 rounded-xl border bg-card/80 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-72" />
          </div>

          <div className="flex gap-2 md:flex-row flex-col">
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-28" />
          </div>
        </div>

        <Skeleton className="my-6 h-px w-full" />

        {/* Profile */}
        <div className="space-y-6">
          <div>
            <Skeleton className="mb-3 h-4 w-24" />

            <div className="flex items-center gap-4">
              <Skeleton className="h-14 w-14 rounded-full" />

              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>

              <div className="ml-auto flex gap-2 md:flex-row flex-col">
                <Skeleton className="h-8 w-28" />
                <Skeleton className="h-8 w-20" />
              </div>
            </div>
          </div>

          {/* Form grid */}
          <div className="space-y-4">
            <Skeleton className="h-4 w-48" />

            <div className="grid gap-4 md:grid-cols-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-full rounded-md" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SettingsSkeleton
