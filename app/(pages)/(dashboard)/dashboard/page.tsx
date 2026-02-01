// app/(whatever)/dashboard/page.tsx
"use client"

import * as React from "react"
import StatsCard from "@/components/home-ui/stats-card"
import { Skeleton } from "@/components/ui/skeleton"
import { TrendingUp, Globe, Users, BarChart3 } from "lucide-react"

export default function DashBoard() {
  // Replace with your real fetching/loading state
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="space-y-6">
      {/* Southern Africa KPI cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <StatsCard
          title="Countries Covered"
          value="9"
          description="Southern Africa focus region"
          icon={<Globe className="h-5 w-5" />}
          trendLabel="Included"
          trendValue="SADC core"
          trendTone="neutral"
          isLoading={isLoading}
        />
        <StatsCard
          title="Indicators Tracked"
          value="42"
          description="Economy, health, education, climate"
          icon={<BarChart3 className="h-5 w-5" />}
          trendLabel="Coverage"
          trendValue="+6 added"
          trendTone="up"
          isLoading={isLoading}
        />
        <StatsCard
          title="Active Users"
          value="1,284"
          description="Exploring regional trends"
          icon={<Users className="h-5 w-5" />}
          trendLabel="Last 30 days"
          trendValue="+8.1%"
          trendTone="up"
          isLoading={isLoading}
        />
        <StatsCard
          title="Change Signals"
          value="128"
          description="Significant shifts detected"
          icon={<TrendingUp className="h-5 w-5" />}
          trendLabel="Change points"
          trendValue="+12"
          trendTone="up"
          isLoading={isLoading}
        />
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        {/* Left panel */}
        <div className="w-full md:w-2/3">
          {isLoading ? (
            <Skeleton className="h-[400px] w-full rounded-2xl" />
          ) : (
            <div className="h-[410px] rounded-2xl ring-1 ring-ring bg-card backdrop-blur-xl p-6 shadow-lg supports-backdrop-filter:bg-card/70">
              graph
            </div>
          )}
        </div>

        {/* Right panel */}
        <div className="w-full md:w-1/3">
          {isLoading ? (
            <Skeleton className="h-[400px] w-full rounded-2xl" />
          ) : (
            <div className="h-[410px] rounded-2xl ring-1 ring-ring bg-card backdrop-blur-xl p-6 shadow-lg supports-backdrop-filter:bg-card/70">
              Graphs
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
