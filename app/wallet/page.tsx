"use client";

import { Navbar } from "@/components/ui/layout/Navbar";
import {
  WalletHeader,
  WalletBalanceCard,
  WalletQuickActions,
  WalletTransactionList,
  Transaction,
} from "@/components/ui/wallet";
import { Coins, Tag, ShoppingBag } from "lucide-react";

export default function WalletPage() {
  const transactions: Transaction[] = [
    {
      id: 1,
      name: "CyberPunk #001",
      collection: "CyberPunk Collection",
      type: "Minted",
      price: "-0.05 ETH",
      fiat: "$148.20",
      date: "2 hours ago",
      image:
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=200",
      icon: Coins,
      isPositive: false,
    },
    {
      id: 2,
      name: "Bored Ape #44",
      collection: "Bored Ape Club",
      type: "Sold",
      price: "+1.20 ETH",
      fiat: "$3,550.00",
      date: "Yesterday",
      image:
        "https://images.unsplash.com/photo-1633101585299-90c749b5ee94?q=80&w=200",
      icon: Tag,
      isPositive: true,
    },
    {
      id: 3,
      name: "Land Plot (-34, 120)",
      collection: "Decentraland",
      type: "Bought",
      price: "-0.80 ETH",
      fiat: "$2,360.00",
      date: "3 days ago",
      image:
        "https://images.unsplash.com/photo-1614726365723-49cfae92782f?q=80&w=200",
      icon: ShoppingBag,
      isPositive: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8">
            <WalletHeader network="Ethereum Mainnet" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <WalletBalanceCard
                balance="4.20"
                balanceUSD="12,450.00"
                address="0x8a72...4f91"
              />
              <WalletQuickActions />
            </div>

            <WalletTransactionList transactions={transactions} />
          </div>
        </div>
      </main>
    </div>
  );
}
