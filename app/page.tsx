"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Navbar } from "@/components/ui/layout/Navbar";
import { StatCard } from "@/components/ui/landing/StatCard";
import { SectionHeader } from "@/components/ui/landing/SectionHeader";
import { UniversalNFTCard, UniversalNFTData } from "@/components/ui/common";
import { ArrowRight, Sparkles, Rocket } from "lucide-react";
import Link from "next/link";
import {
  AnimatedSection,
  AnimatedList,
  AnimatedListItem,
  heroTitle,
  heroSubtitle,
  heroButtons,
  fadeInUp,
} from "@/components/ui/animations";
import { motion } from "framer-motion";

// Lazy load heavy 3D component
const Hero3D = dynamic(() => import("@/components/ui/landing/Hero3D").then(mod => ({ default: mod.Hero3D })), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
  ),
});

export default function LandingPage() {
  const stats = [
    { value: "430K+", label: "Koleksi NFT" },
    { value: "150K+", label: "Transaksi Sukses" },
    { value: "25K+", label: "Kreator Aktif" },
    { value: "50K+", label: "Member Komunitas" },
  ];

  const featuredNFTs: UniversalNFTData[] = [
    {
      id: 1,
      name: "Cosmic Cube #08",
      creator: "NeonArtist",
      image:
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=500",
      price: "1.20",
      trend: "+12%",
      priority: true,
    },
    {
      id: 2,
      name: "Liquid Dream",
      creator: "FlowState",
      image:
        "https://images.unsplash.com/photo-1633101585299-90c749b5ee94?q=80&w=500",
      price: "0.85",
      trend: "+8%",
      priority: true,
    },
    {
      id: 3,
      name: "Retro Peaks",
      creator: "VaporWave",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500",
      price: "3.50",
      trend: "+24%",
    },
    {
      id: 4,
      name: "Digital Sunset",
      creator: "PixelMaster",
      image:
        "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=500",
      price: "2.10",
      trend: "+15%",
    },
  ];

  return (
    <div className="min-h-screen bg-background-dark font-display text-white overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-screen min-h-150 flex items-center justify-center overflow-hidden">
        <Suspense fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
        }>
          <Hero3D />
        </Suspense>

        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/30 z-0 pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-8 pointer-events-none">
          {/* Main Heading */}
          <AnimatedSection variants={heroTitle}>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight">
              Jual Beli NFT
              <br />
              <span className="inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400 drop-shadow-[0_0_40px_rgba(139,63,217,0.5)]">
                Lebih Mudah
              </span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection variants={heroSubtitle}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-medium">
              Platform NFT dengan visual 3D yang imersif, transaksi cepat, dan
              komunitas yang aktif
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection variants={heroButtons}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 pointer-events-auto">
              <Link href="/explore">
                <motion.button
                  className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white font-bold text-lg shadow-2xl shadow-primary/50 transition-all flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Jelajahi Koleksi
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/create">
                <motion.button
                  className="px-10 py-5 rounded-2xl bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-primary/50 backdrop-blur-lg text-white font-bold text-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buat NFT
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimatedList className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedListItem key={index}>
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  index={index}
                />
              </AnimatedListItem>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* FEATURED NFTs SECTION */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <SectionHeader
                badge={{ icon: Sparkles, text: "Hot Picks" }}
                title="NFT"
                highlight="Trending"
                description="Koleksi paling banyak diminati minggu ini"
                alignment="left"
              />
            </div>

            <Link href="/explore">
              <motion.button
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-white font-bold transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Semua
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </AnimatedSection>

          <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredNFTs.map((nft) => (
              <AnimatedListItem key={nft.id}>
                <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <UniversalNFTCard
                    variant="featured"
                    nft={nft}
                    showTrend={true}
                  />
                </motion.div>
              </AnimatedListItem>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <AnimatedSection variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-sm font-bold uppercase tracking-wider mb-8">
              <Rocket className="w-4 h-4" />
              Siap Memulai?
            </div>
          </AnimatedSection>

          <AnimatedSection variants={heroTitle}>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Bergabunglah dengan
              <br />
              <span className="inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">
                Revolusi NFT
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection variants={heroSubtitle}>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ribuan kreator telah memulai perjalanan mereka. Jangan sampai
              tertinggal!
            </p>
          </AnimatedSection>

          <AnimatedSection variants={heroButtons}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/explore">
                <motion.button
                  className="group px-12 py-6 rounded-2xl bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white font-black text-xl shadow-2xl shadow-primary/50 transition-all flex items-center gap-3"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mulai Sekarang
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/resources-page">
                <motion.button
                  className="px-12 py-6 rounded-2xl bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-primary/50 backdrop-blur-lg text-white font-bold text-xl transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Pelajari Lebih Lanjut
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
