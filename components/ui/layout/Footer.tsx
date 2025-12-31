"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const marketplaceLinks = [
    { label: "Explore", href: "/explore" },
    { label: "Create", href: "/create" },
    { label: "Stats", href: "/stats" },
    { label: "Activity", href: "/activity" },
  ];

  const myAccountLinks = [
    { label: "Profile", href: "/profile" },
    { label: "Wallet", href: "/wallet" },
    { label: "Settings", href: "/settings" },
    { label: "Favorites", href: "/favorites" },
  ];

  const resourcesLinks = [
    { label: "Help Center", href: "/help" },
    { label: "Partners", href: "/partners" },
    { label: "Blog", href: "/blog" },
    { label: "Newsletter", href: "/newsletter" },
  ];

  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ];

  const socialLinks = [
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Github, href: "#", label: "Github" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative mt-auto border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/logofix.png"
                  alt="70NG NFT Logo"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                70NG NFT MarketPlace
              </h2>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              The worlds first and largest digital marketplace for crypto
              collectibles and non-fungible tokens.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Marketplace Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Marketplace
            </h3>
            <ul className="space-y-3">
              {marketplaceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* My Account Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              My Account
            </h3>
            <ul className="space-y-3">
              {myAccountLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 70NG NFT MarketPlace. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
