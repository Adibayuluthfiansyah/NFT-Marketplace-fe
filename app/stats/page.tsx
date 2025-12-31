"use client";

import { Navbar } from "@/components/ui/layout/Navbar";
import { StatsHeader } from "@/components/ui/stats/StatsHeader";
import { StatsMetrics } from "@/components/ui/stats/StatsMetrics";
import { StatsCharts } from "@/components/ui/stats/StatsCharts";
import { StatsLeaderboard } from "@/components/ui/stats/StatsLeaderboard";
import { BarChart3, Wallet, Tag, Fuel } from "lucide-react";
import { MetricData, VolumeDataPoint, CategoryData, CollectionRanking, TrendingSale } from "@/app/types/stats";

export default function StatsPage() {
  // Sample data - Replace with real data from API
  const metrics: MetricData[] = [
    {
      label: "Total Volume",
      value: "1,402 ETH",
      change: "+12.5%",
      isPositive: true,
      icon: BarChart3,
    },
    {
      label: "Active Wallets",
      value: "34.2K",
      change: "+5.2%",
      isPositive: true,
      icon: Wallet,
    },
    {
      label: "NFTs Sold",
      value: "12,045",
      change: "-2.1%",
      isPositive: false,
      icon: Tag,
    },
    {
      label: "Avg Gas",
      value: "24 Gwei",
      change: "-0.8%",
      isPositive: false,
      icon: Fuel,
      suffix: "(Cheaper)",
    },
  ];

  const volumeData: VolumeDataPoint[] = [
    { time: "00:00", volume: 109 },
    { time: "01:00", volume: 21 },
    { time: "02:00", volume: 41 },
    { time: "03:00", volume: 93 },
    { time: "04:00", volume: 33 },
    { time: "05:00", volume: 101 },
    { time: "06:00", volume: 61 },
    { time: "07:00", volume: 45 },
    { time: "08:00", volume: 121 },
    { time: "09:00", volume: 149 },
    { time: "10:00", volume: 1 },
    { time: "11:00", volume: 81 },
    { time: "12:00", volume: 129 },
    { time: "13:00", volume: 25 },
    { time: "14:00", volume: 65 },
    { time: "15:00", volume: 89 },
    { time: "16:00", volume: 112 },
    { time: "17:00", volume: 77 },
    { time: "18:00", volume: 95 },
    { time: "19:00", volume: 55 },
    { time: "20:00", volume: 103 },
    { time: "21:00", volume: 73 },
    { time: "22:00", volume: 118 },
    { time: "23:00", volume: 87 },
  ];

  const categoryData: CategoryData[] = [
    { name: "PFP Art", value: 45, color: "#7c3aed" },
    { name: "Gaming", value: 25, color: "#06b6d4" },
    { name: "Utility", value: 15, color: "#8b5cf6" },
    { name: "Others", value: 15, color: "#4b5563" },
  ];

  const topCollections: CollectionRanking[] = [
    {
      rank: 1,
      name: "Bored Ape YC",
      floorPrice: "24.5 ETH",
      volume: "450 ETH",
      change: "+14%",
      isVerified: true,
    },
    {
      rank: 2,
      name: "CryptoPunks",
      floorPrice: "58.2 ETH",
      volume: "320 ETH",
      change: "-2%",
      isVerified: true,
    },
    {
      rank: 3,
      name: "Azuki",
      floorPrice: "6.4 ETH",
      volume: "180 ETH",
      change: "+8.5%",
      isVerified: true,
    },
    {
      rank: 4,
      name: "Art Blocks",
      floorPrice: "0.8 ETH",
      volume: "112 ETH",
      change: "+22%",
      isVerified: true,
    },
  ];

  const trendingSales: TrendingSale[] = [
    {
      id: "1",
      nftName: "Cyber #9042",
      collectionName: "CyberKongz",
      price: "4.2 ETH",
      timeAgo: "2 mins ago",
    },
    {
      id: "2",
      nftName: "Doodle #221",
      collectionName: "Doodles",
      price: "8.5 ETH",
      timeAgo: "5 mins ago",
    },
    {
      id: "3",
      nftName: "Clone X #18",
      collectionName: "RTFKT",
      price: "12.0 ETH",
      timeAgo: "12 mins ago",
    },
    {
      id: "4",
      nftName: "Chromie #88",
      collectionName: "Squiggle",
      price: "14.1 ETH",
      timeAgo: "22 mins ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 w-full flex flex-col py-8 px-4 sm:px-6 lg:px-20 xl:px-40">
        <div className="max-w-[1920px] mx-auto w-full">
          <StatsHeader />
          <StatsMetrics metrics={metrics} />
          <StatsCharts volumeData={volumeData} categoryData={categoryData} />
          <StatsLeaderboard
            topCollections={topCollections}
            trendingSales={trendingSales}
          />
        </div>
      </main>
    </div>
  );
}
