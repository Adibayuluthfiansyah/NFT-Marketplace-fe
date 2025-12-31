"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TimeRange } from "@/app/types/stats";
import { cn } from "@/lib/utils";

interface StatsHeaderProps {
  selectedRange?: TimeRange;
  onRangeChange?: (range: TimeRange) => void;
}

const TIME_RANGES: { label: string; value: TimeRange }[] = [
  { label: "24 Hours", value: "24h" },
  { label: "7 Days", value: "7d" },
  { label: "30 Days", value: "30d" },
  { label: "All Time", value: "all" },
];

export function StatsHeader({
  selectedRange = "24h",
  onRangeChange,
}: StatsHeaderProps) {
  const [activeRange, setActiveRange] = useState<TimeRange>(selectedRange);

  const handleRangeChange = (range: TimeRange) => {
    setActiveRange(range);
    onRangeChange?.(range);
  };

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-6 mb-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-foreground">
          Market Statistics
        </h1>
        <p className="text-base text-muted-foreground">
          Real-time data on the top NFT collections and market trends
        </p>
      </div>

      <div className="flex gap-2 p-1 bg-muted rounded-lg">
        {TIME_RANGES.map((range) => (
          <Button
            key={range.value}
            variant="ghost"
            size="sm"
            onClick={() => handleRangeChange(range.value)}
            className={cn(
              "px-4 font-semibold transition-all",
              activeRange === range.value
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-background"
            )}
          >
            {range.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
