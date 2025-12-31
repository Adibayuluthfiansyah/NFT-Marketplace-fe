"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MetricData } from "@/app/types/stats";
import { cn } from "@/lib/utils";

interface StatsMetricsProps {
  metrics: MetricData[];
}

interface MetricCardProps {
  metric: MetricData;
}

function MetricCard({ metric }: MetricCardProps) {
  const Icon = metric.icon;
  
  return (
    <Card className="flex flex-col gap-3 p-6 bg-card border-border hover:border-primary/30 transition-colors group">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          {metric.label}
        </p>
      </div>
      
      <p className="text-3xl font-bold text-foreground">
        {metric.value}
      </p>
      
      <div
        className={cn(
          "text-sm font-semibold flex items-center gap-1",
          metric.isPositive ? "text-green-500" : "text-red-500"
        )}
      >
        {metric.isPositive ? (
          <TrendingUp className="w-4 h-4" />
        ) : (
          <TrendingDown className="w-4 h-4" />
        )}
        <span>{metric.change}</span>
        {metric.suffix && (
          <span className="text-muted-foreground font-normal ml-1">
            {metric.suffix}
          </span>
        )}
      </div>
    </Card>
  );
}

export function StatsMetrics({ metrics }: StatsMetricsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} metric={metric} />
      ))}
    </div>
  );
}
