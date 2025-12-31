"use client";

import { Navbar } from "@/components/ui/layout/Navbar";
import { ResourcesHero } from "@/components/ui/resources/ResourcesHero";
import { ResourcesGrid } from "@/components/ui/resources/ResourcesGrid";
import { GuidesSection } from "@/components/ui/resources/GuidesSection";
import { FAQSection } from "@/components/ui/resources/FAQSection";
import {
  BookOpen,
  Code,
  MessageCircle,
  Headphones,
  FileText,
  Video,
  Users,
  Lightbulb,
  Shield,
} from "lucide-react";
import {
  ResourceSection,
  GuideItem,
  FAQItem,
  QuickLink,
} from "@/app/types/resources";

export default function ResourcesPage() {
  const quickLinks: QuickLink[] = [
    { id: "1", label: "Getting Started", href: "#getting-started" },
    { id: "2", label: "API Documentation", href: "#api-docs" },
    { id: "3", label: "Contact Support", href: "#support" },
  ];

  const resourceSections: ResourceSection[] = [
    {
      id: "learn",
      title: "Learn",
      description: "Educational resources to help you understand NFTs and Web3",
      cards: [
        {
          id: "1",
          title: "Getting Started Guide",
          description: "Learn the basics of NFTs, wallets, and how to start your journey",
          icon: BookOpen,
          href: "/resources/getting-started",
          category: "learn",
        },
        {
          id: "2",
          title: "Video Tutorials",
          description: "Watch step-by-step video guides covering essential topics",
          icon: Video,
          href: "/resources/tutorials",
          category: "learn",
        },
        {
          id: "3",
          title: "NFT Glossary",
          description: "Understand common terms and concepts in the NFT space",
          icon: FileText,
          href: "/resources/glossary",
          category: "learn",
        },
      ],
    },
    {
      id: "build",
      title: "Build",
      description: "Tools and documentation for developers and creators",
      cards: [
        {
          id: "4",
          title: "API Documentation",
          description: "Complete API reference with code examples and best practices",
          icon: Code,
          href: "/resources/api-docs",
          category: "build",
        },
        {
          id: "5",
          title: "Smart Contract Guide",
          description: "Learn how to create and deploy your own NFT smart contracts",
          icon: Shield,
          href: "/resources/smart-contracts",
          category: "build",
        },
        {
          id: "6",
          title: "Creator Tools",
          description: "Resources for artists and creators to mint and sell NFTs",
          icon: Lightbulb,
          href: "/resources/creator-tools",
          category: "build",
        },
      ],
    },
    {
      id: "support",
      title: "Support",
      description: "Get help when you need it",
      cards: [
        {
          id: "7",
          title: "Help Center",
          description: "Browse our comprehensive knowledge base and FAQs",
          icon: Headphones,
          href: "/resources/help",
          category: "support",
        },
        {
          id: "8",
          title: "Community Forum",
          description: "Connect with other users and get answers from the community",
          icon: Users,
          href: "/resources/community",
          category: "support",
        },
        {
          id: "9",
          title: "Contact Support",
          description: "Reach out to our support team for personalized assistance",
          icon: MessageCircle,
          href: "/resources/contact",
          category: "support",
        },
      ],
    },
  ];

  const guides: GuideItem[] = [
    {
      id: "1",
      title: "How to Create Your First NFT",
      description: "Step-by-step tutorial on minting your first NFT on our platform",
      readTime: "8 min read",
      category: "Getting Started",
      href: "/guides/create-nft",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    },
    {
      id: "2",
      title: "Understanding Gas Fees",
      description: "Learn about Ethereum gas fees and how to optimize your transactions",
      readTime: "5 min read",
      category: "Blockchain",
      href: "/guides/gas-fees",
      imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop",
    },
    {
      id: "3",
      title: "Wallet Security Best Practices",
      description: "Essential tips to keep your crypto wallet and NFTs secure",
      readTime: "10 min read",
      category: "Security",
      href: "/guides/wallet-security",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    },
  ];

  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "What is an NFT?",
      answer:
        "NFT stands for Non-Fungible Token. It's a unique digital asset that represents ownership of a specific item or piece of content on the blockchain. Unlike cryptocurrencies, each NFT is one-of-a-kind and cannot be exchanged on a like-for-like basis.",
      category: "general",
    },
    {
      id: "2",
      question: "How do I connect my wallet?",
      answer:
        "Click the 'Connect Wallet' button in the top right corner. Select your preferred wallet provider (MetaMask, WalletConnect, etc.), and follow the prompts to connect. Make sure you have the wallet extension installed in your browser.",
      category: "getting started",
    },
    {
      id: "3",
      question: "What are gas fees?",
      answer:
        "Gas fees are transaction costs on the Ethereum blockchain. They compensate miners for the computational energy required to process transactions. Gas fees vary based on network congestion and transaction complexity.",
      category: "blockchain",
    },
    {
      id: "4",
      question: "How do I buy an NFT?",
      answer:
        "First, connect your wallet and ensure you have enough ETH to cover the NFT price and gas fees. Browse the marketplace, select an NFT you like, and click 'Buy Now'. Review the transaction details and confirm the purchase in your wallet.",
      category: "buying",
    },
    {
      id: "5",
      question: "Can I sell my NFT?",
      answer:
        "Yes! Go to your profile, select the NFT you want to sell, and click 'Sell'. Set your desired price and listing duration. Once listed, other users can purchase your NFT. You'll receive the sale proceeds minus platform fees.",
      category: "selling",
    },
    {
      id: "6",
      question: "What wallets are supported?",
      answer:
        "We support major Ethereum wallets including MetaMask, WalletConnect, Coinbase Wallet, and Rainbow. Make sure your wallet is configured for the Ethereum mainnet.",
      category: "getting started",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <ResourcesHero quickLinks={quickLinks} />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
          {/* Resource Categories */}
          <ResourcesGrid sections={resourceSections} />

          {/* Popular Guides */}
          <GuidesSection guides={guides} />

          {/* FAQ Section */}
          <FAQSection faqs={faqs} />
        </div>
      </main>
    </div>
  );
}
