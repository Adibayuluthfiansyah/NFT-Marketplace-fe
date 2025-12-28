"use client";

import { Maximize2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export function StatsCharts() {
  // Convert SVG path to data points (extracted from original path coordinates)
  const volumeData = [
    { time: "00:00", ETH: 109 },
    { time: "01:00", ETH: 21 },
    { time: "02:00", ETH: 41 },
    { time: "03:00", ETH: 93 },
    { time: "04:00", ETH: 33 },
    { time: "05:00", ETH: 101 },
    { time: "06:00", ETH: 61 },
    { time: "07:00", ETH: 45 },
    { time: "08:00", ETH: 121 },
    { time: "09:00", ETH: 149 },
    { time: "10:00", ETH: 1 },
    { time: "11:00", ETH: 81 },
    { time: "12:00", ETH: 129 },
    { time: "13:00", ETH: 25 },
    { time: "14:00", ETH: 65 },
    { time: "15:00", ETH: 89 },
    { time: "16:00", ETH: 112 },
    { time: "17:00", ETH: 77 },
    { time: "18:00", ETH: 95 },
    { time: "19:00", ETH: 55 },
    { time: "20:00", ETH: 103 },
    { time: "21:00", ETH: 73 },
    { time: "22:00", ETH: 118 },
    { time: "23:00", ETH: 87 },
    { time: "24:00", ETH: 105 },
  ];

  const categoryData = [
    { name: "PFP Art", value: 45, color: "rgb(90 11 184)" },
    { name: "Gaming", value: 25, color: "rgb(var(--chart-green))" },
    { name: "Utility", value: 15, color: "rgb(var(--chart-orange))" },
    { name: "Others", value: 15, color: "#302839" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      {/* Volume Chart */}
      <Card className="lg:col-span-2 flex flex-col gap-2 rounded-2xl border-stats-border bg-stats-surface p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-white text-lg font-bold">Volume Trends</p>
            <p className="text-text-secondary text-sm">
              Ethereum Network • Last 24 Hours
            </p>
          </div>
          <button className="size-8 flex items-center justify-center rounded-full bg-stats-border hover:bg-white/10 text-white transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        <div className="w-full h-[200px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={volumeData}>
              <defs>
                <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(90 11 184)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="rgb(90 11 184)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                stroke="#64748b"
                tick={{ fill: "#64748b", fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                interval="preserveEnd"
                ticks={["00:00", "06:00", "12:00", "18:00", "24:00"]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a1a2e",
                  border: "1px solid #2a2a3e",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                itemStyle={{ color: "#fff" }}
                labelStyle={{ color: "#94a3b8" }}
              />
              <Area
                type="natural"
                dataKey="ETH"
                stroke="rgb(90 11 184)"
                strokeWidth={3}
                fill="url(#colorVolume)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Category Donut */}
      <Card className="flex flex-col gap-4 rounded-2xl border-stats-border bg-stats-surface p-6">
        <p className="text-white text-lg font-bold">Category Share</p>
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
                contentStyle={{
                  backgroundColor: "#1a1a2e",
                  border: "1px solid #2a2a3e",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                itemStyle={{ color: "#fff" }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">45%</span>
              <span className="text-xs text-text-secondary uppercase font-bold">
                PFP
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-auto">
          {categoryData.map((c) => (
            <div key={c.name} className="flex items-center gap-2">
              <div
                className="size-3 rounded-full"
                style={{ backgroundColor: c.color }}
              ></div>
              <span className="text-sm font-medium text-white">{c.name}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
