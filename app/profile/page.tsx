"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Navbar } from "@/components/ui/layout/Navbar";
import { UniversalNFTCard, UniversalNFTData } from "@/components/ui/common";
import {
  ProfileBanner,
  ProfileCard,
  ProfileSidebar,
  ProfileTabs,
  ProfileFilters,
  ProfileMobileMenu,
} from "@/components/ui/profile";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("on-sale");

  const userNFTs: UniversalNFTData[] = [
    {
      id: 101,
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
      id: 102,
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

  const tabs = [
    { name: "On Sale", value: "on-sale", count: 8 },
    { name: "Owned", value: "owned", count: 8 },
    { name: "Created", value: "created", count: 8 },
    { name: "Collections", value: "collections", count: 8 },
    { name: "Activity", value: "activity", count: 8 },
  ];

  return (
    <main className="min-h-screen bg-background-dark text-white font-display pb-12">
      <Navbar />

      <ProfileBanner image="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070" />

      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* --- LEFT SIDEBAR (Profile Card & Menu) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-80 flex flex-col gap-6 shrink-0"
          >
            <ProfileCard
              name="Mas Adibayu"
              address="0x1234...5678"
              bio="Digital artist and crypto enthusiast. Collecting the rarest NFTs in the metaverse."
              avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000"
            />
            <ProfileSidebar activeItem="Profile" />
          </motion.div>

          {/* --- RIGHT CONTENT (Tabs & Grid) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 w-full min-w-0"
          >
            <ProfileTabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            <ProfileFilters />

            {/* NFT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {userNFTs.map((nft, index) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <UniversalNFTCard
                    variant="profile"
                    nft={nft}
                    showLikes={false}
                  />
                </motion.div>
              ))}

              {/* Create New NFT Cards */}
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + (userNFTs.length + i) * 0.05 }}
                >
                  <Link href="/create">
                    <div className="bg-surface-dark border border-white/10 rounded-2xl aspect-square flex flex-col items-center justify-center text-gray-500 hover:border-primary/50 hover:text-primary transition-all cursor-pointer group">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                        className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-all mb-4"
                      >
                        <Plus className="w-8 h-8 opacity-50 group-hover:opacity-100" />
                      </motion.div>
                      <span className="text-sm font-bold">Create new NFT</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="mt-12 flex justify-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-sm font-bold text-white transition-colors flex items-center gap-2"
              >
                Load More{" "}
                <span className="text-xs opacity-50">(12 hidden)</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu for Sidebar Items */}
      <ProfileMobileMenu activeItem="Profile" />
    </main>
  );
}

