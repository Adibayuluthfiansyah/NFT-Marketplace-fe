"use client";

import Image from "next/image";
import { Navbar } from "@/components/ui/layout/Navbar";
import { NFTCard } from "@/components/ui/marketplace/NFTCard";
import {
  Settings,
  Heart,
  Grid,
  User,
  HelpCircle,
  Activity,
  Users,
  FileText,
  Search,
  Copy,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("on-sale");

  const userNFTs = [
    {
      tokenId: 101,
      name: "Azuki #1212",
      description: "Azuki start with a collection of 10,000 avatars.",
      image:
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974",
      price: "4.0",
      seller: "0xAdibayu...123",
      isSold: false,
    },
    {
      tokenId: 102,
      name: "Ape Kids #901",
      description: "Cool kids on the block.",
      image:
        "https://images.unsplash.com/photo-1633101585299-90c749b5ee94?q=80&w=1974",
      price: "0.15",
      seller: "0xAdibayu...123",
      isSold: false,
    },
  ];

  return (
    <main className="min-h-screen bg-background-dark text-white font-display pb-12">
      <Navbar />

      {/* --- BANNER AREA --- */}
      <div className="relative h-48 md:h-64 bg-linear-to-r from-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-background-dark"></div>
      </div>

      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* --- LEFT SIDEBAR (Profile Card & Menu) --- */}
          <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
            {/* Profile Info Card */}
            <div className="bg-surface-dark border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-4 border-surface-dark mb-4 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>

              <h2 className="text-2xl font-bold text-white mb-1">
                Mas Adibayu
              </h2>
              <div className="flex items-center gap-2 text-primary text-sm font-bold mb-6 cursor-pointer hover:underline">
                <span>0x1234...5678</span>
                <Copy className="w-3 h-3" />
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Digital artist and crypto enthusiast. Collecting the rarest NFTs
                in the metaverse.
              </p>

              <div className="flex gap-3">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl h-10 shadow-lg shadow-primary/20">
                  Follow
                </Button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Navigation Menu (Sesuai HTML kamu) */}
            <div className="hidden lg:flex flex-col gap-8 px-2">
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-white px-3">My Account</h4>
                <nav className="flex flex-col gap-1">
                  {[
                    { name: "Profile", icon: User, active: true },
                    { name: "Favorites", icon: Heart, active: false },
                    { name: "My Collections", icon: Grid, active: false },
                    { name: "Settings", icon: Settings, active: false },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        item.active
                          ? "bg-primary/10 text-primary"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-white px-3">Resources</h4>
                <nav className="flex flex-col gap-1">
                  {[
                    { name: "Help Center", icon: HelpCircle },
                    { name: "Platform Status", icon: Activity },
                    { name: "Partners", icon: Users },
                    { name: "Blog", icon: FileText },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT (Tabs & Grid) --- */}
          <div className="flex-1 w-full min-w-0">
            {/* Tab Navigation */}
            <div className="flex overflow-x-auto items-center gap-2 mb-8 border-b border-white/10 pb-1 scrollbar-hide">
              {["On Sale", "Owned", "Created", "Collections", "Activity"].map(
                (tab) => {
                  const value = tab.toLowerCase().replace(" ", "-");
                  const isActive = activeTab === value;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(value)}
                      className={`px-6 py-3 rounded-t-lg text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
                        isActive
                          ? "border-primary text-white bg-white/5"
                          : "border-transparent text-gray-400 hover:text-white"
                      }`}
                    >
                      {tab}{" "}
                      <span className="ml-1 text-xs opacity-50 font-normal">
                        8
                      </span>
                    </button>
                  );
                }
              )}
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name"
                  className="w-full bg-surface-dark border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-all"
                />
              </div>
              <div className="flex gap-2">
                <select className="bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none cursor-pointer">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Recently Listed</option>
                </select>
                <button className="bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-gray-400 hover:text-white">
                  <Grid className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NFT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {userNFTs.map((item) => (
                <NFTCard key={item.tokenId} item={item} />
              ))}

              {/* Dummy Items biar grid penuh kayak di desain */}
              {[3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-surface-dark border border-white/10 rounded-2xl aspect-3/4 flex flex-col items-center justify-center text-gray-500 hover:border-white/20 transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                    <span className="text-2xl opacity-50">+</span>
                  </div>
                  <span className="text-sm font-bold">List new item</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-sm font-bold text-white transition-colors flex items-center gap-2">
                Load More{" "}
                <span className="text-xs opacity-50">(12 hidden)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Icon tambahan yang belum di-import di atas, bisa kamu sesuaikan
function Share2({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function MoreHorizontal({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}
