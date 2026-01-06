"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Zap, Globe, ShieldCheck } from "lucide-react";

import { Navbar } from "@/components/ui/layout/Navbar";
import { UniversalNFTCard, UniversalNFTData } from "@/components/ui/common";
import StarBackground from "@/components/ui/landing/StarBackground";
import {
  AnimatedList,
  AnimatedListItem,
  AnimatedSection,
  fadeInUp,
} from "@/components/ui/animations";

const Hero3D = dynamic(
  () =>
    import("@/components/ui/landing/Hero3D").then((mod) => ({
      default: mod.Hero3D,
    })),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-background/50" />,
  }
);

const containerVar: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVar: Variants = {
  hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

export default function LandingPage() {
  const stats = [
    { value: "430K+", label: "Total Assets" },
    { value: "150K+", label: "Auctions" },
    { value: "25K+", label: "Artists" },
    { value: "12M+", label: "Volume (ETH)" },
  ];

  const featuredNFTs: UniversalNFTData[] = [
    {
      id: 1,
      name: "Ethereal #88",
      creator: "Karafuru",
      image:
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=500",
      price: "1.20",
      trend: "+12%",
      priority: true,
    },
    {
      id: 2,
      name: "Cyber Punk v2",
      creator: "Labs",
      image:
        "https://images.unsplash.com/photo-1633101585299-90c749b5ee94?q=80&w=500",
      price: "0.85",
      trend: "+8%",
      priority: true,
    },
    {
      id: 3,
      name: "Ape Mutant",
      creator: "Yuga",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500",
      price: "3.50",
      trend: "+24%",
    },
    {
      id: 4,
      name: "Azuki Element",
      creator: "Chiru",
      image:
        "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=500",
      price: "2.10",
      trend: "+15%",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden selection:bg-primary/20 selection:text-primary-foreground">
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-70">
        <StarBackground />
      </div>

      <Navbar />

      {/* HERO SECTION  */}
      <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden px-6 py-24">
        {/* Layer 3D lebih terang */}
        <div className="absolute inset-0 z-10 opacity-100 mix-blend-screen">
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
        </div>

        {/* Gradient Overlay lebih subtle */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/20 via-background/40 to-background pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto flex flex-col items-center gap-8">
          <motion.div
            variants={containerVar}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Main Title */}
            <motion.h1
              variants={itemVar}
              className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8 text-foreground uppercase"
            >
              Discover Collect
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary">
                and Sell NFTs
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVar}
              className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
            >
              The worlds first and largest digital marketplace for crypto
              collectibles and non-fungible tokens. Buy, sell, and discover
              exclusive digital items.
            </motion.p>

            
            {/* Buttons */}
            <motion.div
              variants={itemVar}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
            >
              <Link href="/explore">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all shadow-primary flex items-center justify-center gap-2"
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/create">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-card border border-border text-foreground font-semibold text-base hover:bg-muted transition-all flex items-center justify-center"
                >
                  Create
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS  */}
      <section className="relative z-10 py-16 border-y border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedList className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedListItem key={index}>
                <div className="flex flex-col items-center justify-center text-center gap-2 group cursor-default">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </AnimatedListItem>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Trending Collections
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Explore the most popular NFT collections on the marketplace
              </p>
            </div>

            <Link href="/explore">
              <motion.button
                whileHover={{ x: 5 }}
                className="text-foreground font-semibold flex items-center gap-2 hover:text-primary transition-colors"
              >
                View All <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </AnimatedSection>

          <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredNFTs.map((nft) => (
              <AnimatedListItem key={nft.id}>
                <UniversalNFTCard
                  variant="featured"
                  nft={nft}
                  showTrend={true}
                />
              </AnimatedListItem>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* FEATURES GRID  */}
      <section className="relative z-10 py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for creators and collectors with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Instant transactions with zero lag. Buy and sell at the speed of light.",
              },
              {
                icon: ShieldCheck,
                title: "Secure & Trusted",
                desc: "Audited smart contracts and industry-leading security measures.",
              },
              {
                icon: Globe,
                title: "Global Community",
                desc: "Join thousands of creators and collectors worldwide.",
              },
            ].map((item, i) => (
              <AnimatedSection
                key={i}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/*  CTA SECTION */}
      <section className="relative z-10 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />

        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <AnimatedSection variants={containerVar}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Ready to Get Started?
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Join thousands of creators and collectors in the worlds leading
              NFT marketplace
            </p>

            <Link href="/explore">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg shadow-primary-lg hover:shadow-primary transition-all"
              >
                Explore Marketplace
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
