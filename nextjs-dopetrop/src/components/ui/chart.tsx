"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    config?: Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  }
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-chart=""
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = () => null
const ChartTooltipContent = () => null  
const ChartLegend = () => null
const ChartLegendContent = () => null

const useChart = () => ({
  config: {},
})

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  useChart,
}