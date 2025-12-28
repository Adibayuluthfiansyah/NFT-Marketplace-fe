"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export function Footer() {
  const mainLinks = [
    { label: "Explore", href: "/explore" },
    { label: "Create", href: "/create" },
    { label: "Stats", href: "/stats" },
    { label: "Wallet", href: "/wallet" },
  ];

  const socialLinks = [
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Github, href: "#", label: "Github" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative mt-auto z-10 border-t border-white/5 bg-background-dark/80 backdrop-blur-xl">
      {/* Purple Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main Content - Centered */}
        <div className="flex flex-col items-center gap-8">
          {/* Logo & Tagline */}
          <Link href="/">
            <div className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/logofix.png"
                    alt="70NG NFT Logo"
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
                <h2 className="text-lg font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                  70NG Market
                </h2>
              </div>
              <p className="text-sm text-gray-400 text-center max-w-md">
                Discover, Collect, & Sell Unique NFTs
              </p>
            </div>
          </Link>

          {/* Navigation Links - Card Style */}
          <div className="flex flex-wrap justify-center gap-4">
            {mainLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="group relative px-6 py-2.5 rounded-lg bg-surface-dark/50 border border-white/5 hover:border-primary/50 hover:bg-surface-dark/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                  <span className="text-sm font-medium text-gray-300 group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                </div>
              </Link>
            ))}
          </div>

          {/* Social Icons - With Purple Glow */}
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                className="group relative"
                aria-label={label}
              >
                <div className="relative p-2.5 rounded-full bg-surface-dark/50 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:scale-110">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-xl transition-all duration-500" />
                </div>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-gray-500">
            <p className="text-center">
              © 2025 70NG Market. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
