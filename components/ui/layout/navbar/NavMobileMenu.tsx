"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Wallet, User } from "lucide-react";

export function NavMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Explore", href: "/explore" },
    { name: "Stats", href: "/stats" },
    { name: "Resources", href: "/resources-page" },
    { name: "Create", href: "/create" },
    { name: "Wallet", href: "/wallet" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <>
      {/* Hamburger Button (Mobile Only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center size-10 rounded-lg bg-surface-dark border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-surface-dark border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-lg font-bold text-white">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center size-8 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col gap-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name === "Wallet" && <Wallet className="w-5 h-5" />}
                    {link.name === "Profile" && <User className="w-5 h-5" />}
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Connect Wallet Button (Mobile) */}
            <button className="mt-8 w-full flex items-center justify-center rounded-xl h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all shadow-lg shadow-primary/25 active:scale-95">
              Connect Wallet
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
