"use client";

import { Navbar } from "@/components/ui/layout/Navbar";
import { StatsHeader } from "@/components/ui/stats/StatsHeader";
import { StatsMetrics } from "@/components/ui/stats/StatsMetrics";
import { StatsCharts } from "@/components/ui/stats/StatsCharts";
import { StatsLeaderboard } from "@/components/ui/stats/StatsLeaderboard";

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-stats-bg font-display text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full flex flex-col py-8 px-4 sm:px-6 lg:px-20 xl:px-40">
        <div className="max-w-350 mx-auto w-full">
          <StatsHeader />
          <StatsMetrics />
          <StatsCharts />
          <StatsLeaderboard />
        </div>
      </main>
    </div>
  );
}
