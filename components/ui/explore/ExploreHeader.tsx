"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Grid3x3, LayoutList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ViewMode, SortOption } from "@/app/types/explore";
import { cn } from "@/lib/utils";

interface ExploreHeaderProps {
  onMobileFilterOpen: () => void;
  viewMode?: ViewMode;
  onViewModeChange?: (mode: ViewMode) => void;
  sortBy?: SortOption;
  onSortChange?: (sort: SortOption) => void;
}

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Recently Listed", value: "recently-listed" },
  { label: "Price: Low to High", value: "price-low-high" },
  { label: "Price: High to Low", value: "price-high-low" },
  { label: "Most Favorite", value: "most-favorite" },
  { label: "Ending Soon", value: "ending-soon" },
];

export function ExploreHeader({
  onMobileFilterOpen,
  viewMode = "grid",
  onViewModeChange,
  sortBy = "recently-listed",
  onSortChange,
}: ExploreHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col gap-4 mb-6">
      {/* Mobile Filter Button */}
      <Button
        onClick={onMobileFilterOpen}
        variant="outline"
        className="lg:hidden flex items-center justify-center gap-2 border-border hover:border-primary hover:text-primary"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters
      </Button>

      {/* Main Header Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search items, collections, and accounts"
            className="pl-10 bg-background border-border focus:border-primary h-11"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative min-w-[200px]">
          <select
            value={sortBy}
            onChange={(e) => onSortChange?.(e.target.value as SortOption)}
            className="w-full h-11 pl-4 pr-10 rounded-lg bg-background border border-border focus:border-primary focus:ring-0 text-sm font-medium appearance-none cursor-pointer outline-none text-foreground"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* View Toggle */}
        <div className="hidden sm:flex gap-1 bg-background border border-border rounded-lg p-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onViewModeChange?.("grid")}
            className={cn(
              "w-9 h-9",
              viewMode === "grid"
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <Grid3x3 className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onViewModeChange?.("list")}
            className={cn(
              "w-9 h-9",
              viewMode === "list"
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <LayoutList className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
