"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/layout/Navbar";
import { ExploreSidebar } from "@/components/ui/explore/ExploreSidebar";
import { ExploreHeader } from "@/components/ui/explore/ExploreHeader";
import { ActiveFilters } from "@/components/ui/explore/ActiveFilters";
import { Pagination } from "@/components/ui/explore/Pagination";
import { UniversalNFTCard, UniversalNFTData } from "@/components/ui/common";
import { NFTGridSkeleton } from "@/components/ui/loading";
import {
  AnimatedList,
  AnimatedListItem,
  AnimatedSection,
  fadeInUp,
} from "@/components/ui/animations";
import { motion } from "framer-motion";

export default function ExplorePage() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [nfts, setNfts] = useState<UniversalNFTData[]>([]);

  // Simulate data loading
  useEffect(() => {
    const loadNFTs = async () => {
      setIsLoading(true);
      
      // Remove artificial delay - load immediately
      const nftData: UniversalNFTData[] = [
        {
          id: 1,
          name: "Cosmic Cube #08",
          author: "NeonArtist",
          image:
            "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=500",
          likes: 242,
          priceLabel: "Highest Bid",
          price: "1.20 ETH",
          timeLeft: "2h left",
          badge: "Live Auction",
        },
        {
          id: 2,
          name: "Liquid Dream",
          author: "FlowState",
          image:
            "https://images.unsplash.com/photo-1633101585299-90c749b5ee94?q=80&w=500",
          likes: 85,
          priceLabel: "Price",
          price: "0.85 ETH",
        },
        {
          id: 3,
          name: "Retro Peaks",
          author: "VaporWave",
          image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500",
          likes: "1.2k",
          priceLabel: "Price",
          price: "3.50 ETH",
        },
        {
          id: 4,
          name: "Punk #9090",
          author: "LarvaLabs",
          image:
            "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=500",
          likes: 45,
          priceLabel: "Top Offer",
          price: "45.0 ETH",
          badge: "Offer Only",
          badgeColor: "bg-black/60",
        },
        {
          id: 5,
          name: "Ethereal Glow #2",
          author: "LuminaArt",
          image:
            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=500",
          likes: 312,
          priceLabel: "Price",
          price: "2.50 ETH",
        },
        {
          id: 6,
          name: "Meta Human #001",
          author: "FutureTech",
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=500",
          likes: 12,
          priceLabel: "Price",
          price: "0.15 ETH",
        },
        {
          id: 7,
          name: "Crypto Punk Blue",
          author: "PunkFan",
          image:
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=500",
          likes: 99,
          priceLabel: "Highest Bid",
          price: "5.30 ETH",
          timeLeft: "1d 4h left",
          badge: "Live Auction",
        },
        {
          id: 8,
          name: "Golden Wave",
          author: "GoldMaster",
          image:
            "https://images.unsplash.com/photo-1614726365723-49cfae92782f?q=80&w=500",
          likes: 88,
          priceLabel: "Price",
          price: "10.0 ETH",
        },
      ];
      
      setNfts(nftData);
      setIsLoading(false);
    };

    loadNFTs();
  }, []);

  return (
    <div className="min-h-screen bg-background-dark font-display text-white flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-1 w-full max-w-480 mx-auto flex flex-col lg:flex-row">
        {/* Modular Sidebar */}
        <ExploreSidebar
          isOpen={isMobileFilterOpen}
          onClose={() => setIsMobileFilterOpen(false)}
        />

        <div className="flex-1 p-6 md:p-8">
          {/* Modular Header */}
          <AnimatedSection variants={fadeInUp}>
            <ExploreHeader
              onMobileFilterOpen={() => setIsMobileFilterOpen(true)}
            />
          </AnimatedSection>

          {/* Modular Active Filters */}
          <AnimatedSection variants={fadeInUp} delay={0.1}>
            <ActiveFilters />
          </AnimatedSection>

          <AnimatedSection variants={fadeInUp} delay={0.2}>
            <p className="text-sm text-gray-500 mb-6 font-medium">
              Showing {nfts.length} results
            </p>
          </AnimatedSection>

          {/* Grid Loop with Universal NFT Card */}
          {isLoading ? (
            <NFTGridSkeleton count={8} />
          ) : (
            <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {nfts.map((nft) => (
                <AnimatedListItem key={nft.id}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <UniversalNFTCard
                      variant="explore"
                      nft={nft}
                      showLikes={true}
                      showBadge={true}
                      actionButton={{
                        label:
                          nft.badge === "Live Auction" ? "Place Bid" : "Buy Now",
                        variant:
                          nft.badge === "Live Auction" ? "secondary" : "primary",
                      }}
                    />
                  </motion.div>
                </AnimatedListItem>
              ))}
            </AnimatedList>
          )}

          {/* Modular Pagination */}
          {!isLoading && (
            <AnimatedSection variants={fadeInUp} delay={0.3}>
              <Pagination />
            </AnimatedSection>
          )}
        </div>
      </main>
    </div>
  );
}
