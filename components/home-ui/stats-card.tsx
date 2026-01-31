// components/home-ui/stats-card.tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

type TrendTone = "up" | "down" | "neutral"

interface StatsCardProps {
  title: string
  value?: string | number
  description?: string
  icon?: React.ReactNode
  trendLabel?: string
  trendValue?: string
  trendTone?: TrendTone
  isLoading?: boolean
  className?: string
}

const toneClasses: Record<TrendTone, string> = {
  up: "text-emerald-600 dark:text-emerald-400",
  down: "text-rose-600 dark:text-rose-400",
  neutral: "text-muted-foreground",
}

export default function StatsCard({
  title,
  value,
  description = "",
  icon,
  trendLabel,
  trendValue,
  trendTone = "neutral",
  isLoading = false,
  className,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border bg-card backdrop-blur-sm shadow-lg",
        "supports-backdrop-filter:bg-card/70",
        "transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl",
        "hover:ring-1 hover:ring-ring",
        className
      )}
    >
      {/* soft gradient sheen */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-card/25 to-transparent dark:from-card/10" />

      <div className="relative z-10 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 space-y-1">
            {isLoading ? (
              <Skeleton className="h-4 w-32" />
            ) : (
              <p className="text-sm text-muted-foreground">{title}</p>
            )}

            {isLoading ? (
              <Skeleton className="mt-2 h-8 w-40" />
            ) : (
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {value}
              </h3>
            )}
          </div>

          {isLoading ? (
            <Skeleton className="h-10 w-10 rounded-xl" />
          ) : icon ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {icon}
            </div>
          ) : null}
        </div>

        {/* Description (RegionLens copy) */}
        <div className="mt-3">
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-11/12" />
              <Skeleton className="h-3 w-8/12" />
            </div>
          ) : (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {/* Trend */}
        {(trendLabel || trendValue || isLoading) && (
          <div className="mt-4 flex items-center justify-between text-xs">
            {isLoading ? (
              <>
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-14" />
              </>
            ) : (
              <>
                <span className="text-muted-foreground">{trendLabel}</span>
                {trendValue ? (
                  <span className={cn("font-medium", toneClasses[trendTone])}>
                    {trendValue}
                  </span>
                ) : null}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
