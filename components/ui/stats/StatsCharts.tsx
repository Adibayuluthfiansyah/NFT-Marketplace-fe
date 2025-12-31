"use client";

import { Maximize2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  TooltipProps,
} from "recharts";
import { VolumeDataPoint, CategoryData } from "@/app/types/stats";

interface StatsChartsProps {
  volumeData: VolumeDataPoint[];
  categoryData: CategoryData[];
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
  }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="text-muted-foreground text-sm mb-1">{label}</p>
        <p className="text-foreground font-semibold">
          {payload[0].value} ETH
        </p>
      </div>
    );
  }
  return null;
}

export function StatsCharts({ volumeData, categoryData }: StatsChartsProps) {
  const topCategory = categoryData.reduce((prev, current) =>
    prev.value > current.value ? prev : current
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      {/* Volume Chart */}
      <Card className="lg:col-span-2 flex flex-col gap-4 p-6 bg-card border-border">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-foreground">Volume Trends</h3>
            <p className="text-sm text-muted-foreground">
              Ethereum Network • Last 24 Hours
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 rounded-full hover:bg-muted"
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>

        <div className="w-full h-[200px] mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={volumeData}>
              <defs>
                <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#7c3aed"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="#7c3aed"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8", fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                interval="preserveEnd"
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="volume"
                stroke="#7c3aed"
                strokeWidth={2}
                fill="url(#volumeGradient)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Category Distribution */}
      <Card className="flex flex-col gap-4 p-6 bg-card border-border">
        <h3 className="text-lg font-bold text-foreground">Category Share</h3>
        
        <div className="flex-1 flex items-center justify-center relative min-h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                        <p className="text-foreground font-semibold">
                          {payload[0].name}: {payload[0].value}%
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center Label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">
                {topCategory.value}%
              </span>
              <span className="text-xs text-muted-foreground uppercase font-semibold">
                {topCategory.name}
              </span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          {categoryData.map((category) => (
            <div key={category.name} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <span className="text-sm font-medium text-foreground">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
