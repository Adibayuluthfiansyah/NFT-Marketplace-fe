"use client";

import { Navbar } from "@/components/ui/layout/Navbar";
import {
  Wallet,
  Copy,
  Plus,
  ArrowUp,
  ArrowDown,
  ArrowLeftRight,
  ExternalLink,
  Coins,
  Tag,
  ShoppingBag,
  ChevronRight,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function WalletPage() {
  // Data Mock untuk History (Sesuai HTML Row 1-3)
  const transactions = [
    {
      id: 1,
      name: "CyberPunk #001",
      collection: "CyberPunk Collection",
      type: "Minted",
      price: "-0.05 ETH",
      fiat: "$148.20",
      date: "2 hours ago",
      image:
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=200", // Placeholder Cyberpunk
      statusColor: "text-primary",
      bgStatus: "bg-primary/10",
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
        "https://images.unsplash.com/photo-1633101585299-90c749b5ee94?q=80&w=200", // Placeholder Ape
      statusColor: "text-green-400",
      bgStatus: "bg-green-400/10",
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
        "https://images.unsplash.com/photo-1614726365723-49cfae92782f?q=80&w=200", // Placeholder Land
      statusColor: "text-blue-400",
      bgStatus: "bg-blue-400/10",
      icon: ShoppingBag,
      isPositive: false,
    },
  ];

  return (
    // Gunakan bg-dark-base sesuai desain HTML
    <div className="min-h-screen bg-dark-base font-display text-white">
      <Navbar />

      <main className="flex h-full grow flex-col py-8 px-4 sm:px-10 lg:px-40">
        <div className="flex flex-col max-w-[1200px] mx-auto w-full flex-1 gap-8">
          {/* --- PAGE HEADER --- */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex min-w-72 flex-col gap-2">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em]">
                My Wallet
              </h1>
              <p className="text-text-secondary text-base font-normal leading-normal">
                Manage your crypto assets and view transaction history.
              </p>
            </div>

            {/* Network Selector */}
            <div className="flex items-center gap-2 bg-dark-surface border border-dark-border rounded-full py-2 px-4 cursor-pointer hover:border-white/20 transition-colors">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-white">
                Ethereum Mainnet
              </span>
              <ChevronDown className="text-text-secondary w-4 h-4 ml-1" />
            </div>
          </div>

          {/* --- DASHBOARD GRID --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Balance Card (Col Span 2) */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-dark-surface border border-dark-border shadow-xl">
              {/* Abstract Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-900/10 opacity-50 transition-opacity group-hover:opacity-70"></div>

              <div className="relative z-10 p-8 flex flex-col h-full justify-between gap-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                      <Wallet className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm font-medium">
                        Connected Address
                      </p>
                      <div className="flex items-center gap-2 group/copy cursor-pointer">
                        <p className="text-white font-mono text-sm tracking-wide">
                          0x8a72...4f91
                        </p>
                        <Copy className="text-text-secondary w-4 h-4 group-hover/copy:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-white/70 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors uppercase tracking-wider">
                    Disconnect
                  </button>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-text-secondary text-sm font-medium">
                    Total Balance
                  </p>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                      4.20 ETH
                    </h2>
                    <span className="text-xl text-text-secondary font-normal">
                      $12,450.00 USD
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <div className="bg-dark-surface border border-dark-border rounded-2xl p-6 h-full flex flex-col justify-center gap-4">
                <p className="text-white font-bold text-lg">Quick Actions</p>
                <div className="grid grid-cols-1 gap-3">
                  <button className="flex w-full cursor-pointer items-center justify-between rounded-xl p-4 bg-primary text-white hover:bg-primary/90 transition-all group shadow-lg shadow-primary/20">
                    <div className="flex items-center gap-3">
                      <span className="bg-white/20 p-1.5 rounded-full">
                        <Plus className="w-4 h-4" />
                      </span>
                      <span className="text-base font-bold">Add Funds</span>
                    </div>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="flex w-full cursor-pointer items-center justify-between rounded-xl p-4 bg-dark-base border border-dark-border text-white hover:border-primary/50 hover:bg-dark-border transition-all group">
                    <div className="flex items-center gap-3">
                      <span className="text-text-secondary">
                        <ArrowUp className="w-5 h-5" />
                      </span>
                      <span className="text-base font-bold">Withdraw</span>
                    </div>
                  </button>

                  <button className="flex w-full cursor-pointer items-center justify-between rounded-xl p-4 bg-dark-base border border-dark-border text-white hover:border-primary/50 hover:bg-dark-border transition-all group">
                    <div className="flex items-center gap-3">
                      <span className="text-text-secondary">
                        <ArrowLeftRight className="w-5 h-5" />
                      </span>
                      <span className="text-base font-bold">Swap</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --- TRANSACTION HISTORY --- */}
          <div className="flex flex-col gap-6 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dark-border pb-2">
              <h2 className="text-white text-2xl font-bold leading-tight">
                Transaction History
              </h2>

              {/* Filters */}
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                {["All", "Purchases", "Sales", "Minting"].map((filter, i) => (
                  <button
                    key={filter}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                      i === 0
                        ? "bg-dark-border text-white shadow-sm hover:bg-primary"
                        : "bg-transparent border border-dark-border text-text-secondary hover:bg-dark-border hover:text-white"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Transaction List */}
            <div className="flex flex-col rounded-2xl bg-dark-surface border border-dark-border overflow-hidden">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-dark-base/50 text-xs font-bold uppercase tracking-wider text-text-secondary">
                <div className="col-span-4">Item</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-3 text-right">Price</div>
                <div className="col-span-3 text-right">Date</div>
              </div>

              {/* Rows */}
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="group flex flex-col md:grid md:grid-cols-12 gap-4 px-6 py-4 border-b border-dark-border last:border-0 hover:bg-white/[0.02] transition-colors items-center"
                >
                  {/* Item Column */}
                  <div className="col-span-4 flex items-center gap-4 w-full">
                    <div
                      className="h-12 w-12 rounded-lg bg-cover bg-center shrink-0 border border-white/5"
                      style={{ backgroundImage: `url(${tx.image})` }}
                    ></div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold">{tx.name}</span>
                      <span className="text-text-secondary text-xs">
                        {tx.collection}
                      </span>
                    </div>
                  </div>

                  {/* Type Column */}
                  <div className="col-span-2 flex items-center gap-2 w-full mt-2 md:mt-0">
                    <span
                      className={`${tx.statusColor} ${tx.bgStatus} p-1 rounded-full`}
                    >
                      <tx.icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-white text-sm font-medium">
                      {tx.type}
                    </span>
                  </div>

                  {/* Price Column */}
                  <div className="col-span-3 text-left md:text-right w-full mt-2 md:mt-0">
                    <div className="flex flex-col md:items-end">
                      <span
                        className={`font-bold ${
                          tx.isPositive ? "text-green-400" : "text-white"
                        }`}
                      >
                        {tx.price}
                      </span>
                      <span className="text-text-secondary text-xs">
                        {tx.fiat}
                      </span>
                    </div>
                  </div>

                  {/* Date & Link Column */}
                  <div className="col-span-3 text-left md:text-right w-full flex items-center md:justify-end gap-2 mt-2 md:mt-0">
                    <span className="text-text-secondary text-sm">
                      {tx.date}
                    </span>
                    <ExternalLink className="text-primary w-[18px] h-[18px] cursor-pointer hover:text-white transition-colors" />
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center py-4">
              <button className="text-text-secondary hover:text-white text-sm font-medium flex items-center gap-1 transition-colors">
                View all transactions
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
