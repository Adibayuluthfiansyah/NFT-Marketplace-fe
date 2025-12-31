"use client";

import { X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterSection } from "./FilterSection";
import { cn } from "@/lib/utils";

interface ExploreSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const STATUS_OPTIONS = [
  { label: "Buy Now", value: "buy-now" },
  { label: "On Auction", value: "auction" },
  { label: "New", value: "new" },
  { label: "Has Offers", value: "offers" },
];

const CATEGORIES = ["Art", "Music", "Photography", "Virtual Worlds", "Collectibles", "Sports", "Utility"];

const COLLECTIONS = [
  { id: "1", name: "Bored Ape YC" },
  { id: "2", name: "Azuki" },
  { id: "3", name: "Doodles" },
];

const ARTISTS = ["Beeple", "Pak", "XCOPY", "Fewocious"];

export function ExploreSidebar({ isOpen, onClose }: ExploreSidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 h-screen lg:h-[calc(100vh-80px)] lg:top-20",
          "w-80 bg-card border-r border-border",
          "overflow-y-auto transition-transform duration-300 z-50",
          "flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-primary hover:text-primary/80"
            >
              Clear all
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Filters Content */}
        <div className="flex-1 p-6 space-y-6">
          {/* Status Filter */}
          <FilterSection title="Status">
            <div className="grid grid-cols-2 gap-2">
              {STATUS_OPTIONS.map((option) => (
                <Button
                  key={option.value}
                  variant="outline"
                  size="sm"
                  className="justify-start text-sm font-medium border-border hover:border-primary hover:text-primary hover:bg-primary/5"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </FilterSection>

          {/* Price Range Filter */}
          <FilterSection title="Price Range">
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Min"
                className="flex-1 bg-background border-border focus:border-primary"
              />
              <span className="text-muted-foreground">to</span>
              <Input
                type="number"
                placeholder="Max"
                className="flex-1 bg-background border-border focus:border-primary"
              />
            </div>
            <Button
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Apply
            </Button>
          </FilterSection>

          {/* Categories Filter */}
          <FilterSection title="Categories">
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {CATEGORIES.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Collections Filter */}
          <FilterSection title="Collections">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search collections"
                className="pl-9 bg-background border-border focus:border-primary"
              />
            </div>
            <div className="space-y-1">
              {COLLECTIONS.map((collection) => (
                <div
                  key={collection.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground">
                    {collection.name.charAt(0)}
                  </div>
                  <span className="text-sm text-foreground">{collection.name}</span>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Artists Filter */}
          <FilterSection title="Artists" className="border-b-0">
            <div className="space-y-2">
              {ARTISTS.map((artist) => (
                <label
                  key={artist}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {artist}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>
        </div>
      </aside>
    </>
  );
}
