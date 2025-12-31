"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { QuickLink } from "@/app/types/resources";

interface ResourcesHeroProps {
  quickLinks?: QuickLink[];
  onSearch?: (query: string) => void;
}

export function ResourcesHero({ quickLinks = [], onSearch }: ResourcesHeroProps) {
  return (
    <div 
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat border-b border-border py-16 lg:py-24"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232')`,
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block text-primary font-bold tracking-widest text-xs uppercase mb-3">
          Help Center
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          How can we help you?
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Find guides, tutorials, and answers to questions about the NFT world
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative flex items-center w-full h-14 rounded-full bg-card/80 backdrop-blur-md border border-border focus-within:border-primary transition-all shadow-lg group">
            <div className="pl-5 pr-3 text-muted-foreground group-focus-within:text-primary transition-colors">
              <Search className="w-6 h-6" />
            </div>
            <Input
              placeholder="Search articles, topics, or terms (e.g. Gas Fee)..."
              className="flex-1 bg-transparent border-none h-full text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) => onSearch?.(e.target.value)}
            />
            <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 text-sm font-bold transition-transform active:scale-95">
              Search
            </button>
          </div>
        </div>

        {/* Quick Links */}
        {quickLinks.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm text-muted-foreground mr-2">Quick links:</span>
            {quickLinks.map((link) => (
              <Button
                key={link.id}
                variant="link"
                size="sm"
                className="text-primary hover:text-primary/80 h-auto p-0"
                asChild
              >
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
