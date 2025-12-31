import { LucideIcon } from "lucide-react";

export type TimeRange = "24h" | "7d" | "30d" | "all";

export interface MetricData {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  suffix?: string;
}

export interface VolumeDataPoint {
  time: string;
  volume: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number; // Index signature for Recharts compatibility
}

export interface CollectionRanking {
  rank: number;
  name: string;
  floorPrice: string;
  volume: string;
  change: string;
  isVerified: boolean;
  imageUrl?: string;
}

export interface TrendingSale {
  id: string;
  nftName: string;
  collectionName: string;
  price: string;
  timeAgo: string;
  imageUrl?: string;
}

export interface StatsOverview {
  totalVolume: string;
  activeWallets: string;
  nftsSold: string;
  avgGas: string;
  volumeChange: string;
  walletsChange: string;
  salesChange: string;
  gasChange: string;
}
