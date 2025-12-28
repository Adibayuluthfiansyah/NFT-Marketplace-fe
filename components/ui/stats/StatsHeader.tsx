"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function StatsHeader() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-6 mb-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white">
          Market Statistics
        </h1>
        <p className="text-text-secondary text-base">
          Real-time data on the top NFT collections and market trends.
        </p>
      </div>

      <Tabs defaultValue="24h">
        <TabsList className="h-10 rounded-full bg-stats-border p-1">
          <TabsTrigger 
            value="24h" 
            className="rounded-full px-4 text-sm font-bold data-[state=active]:bg-stats-bg data-[state=active]:text-primary data-[state=active]:shadow-sm text-text-secondary hover:text-white"
          >
            24h
          </TabsTrigger>
          <TabsTrigger 
            value="7d"
            className="rounded-full px-4 text-sm font-bold data-[state=active]:bg-stats-bg data-[state=active]:text-primary data-[state=active]:shadow-sm text-text-secondary hover:text-white"
          >
            7d
          </TabsTrigger>
          <TabsTrigger 
            value="30d"
            className="rounded-full px-4 text-sm font-bold data-[state=active]:bg-stats-bg data-[state=active]:text-primary data-[state=active]:shadow-sm text-text-secondary hover:text-white"
          >
            30d
          </TabsTrigger>
          <TabsTrigger 
            value="All"
            className="rounded-full px-4 text-sm font-bold data-[state=active]:bg-stats-bg data-[state=active]:text-primary data-[state=active]:shadow-sm text-text-secondary hover:text-white"
          >
            All
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
