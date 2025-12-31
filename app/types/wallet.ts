// Type definitions for Wallet page

import { LucideIcon } from "lucide-react";

export interface Transaction {
  id: number;
  name: string;
  collection: string;
  type: TransactionType;
  price: string;
  fiat: string;
  date: string;
  image: string;
  icon: LucideIcon;
  isPositive: boolean;
}

export type TransactionType = "Minted" | "Sold" | "Bought" | "Transfer" | "Listed";

export interface WalletBalance {
  eth: string;
  usd: string;
}

export interface WalletAddress {
  full: string;
  short: string;
}

export type NetworkType = "Ethereum Mainnet" | "Polygon" | "Sepolia Testnet";

export interface QuickAction {
  id: string;
  label: string;
  icon: LucideIcon;
  variant: "primary" | "secondary";
  onClick: () => void;
}
