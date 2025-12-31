"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActiveFilter } from "@/app/types/explore";
import { cn } from "@/lib/utils";

interface ActiveFiltersProps {
  filters?: ActiveFilter[];
  onRemoveFilter?: (filterId: string) => void;
  onClearAll?: () => void;
  className?: string;
}

export function ActiveFilters({
  filters = [],
  onRemoveFilter,
  onClearAll,
  className,
}: ActiveFiltersProps) {
  if (filters.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap items-center gap-2 mb-6", className)}>
      <span className="text-sm font-medium text-muted-foreground">
        Active filters:
      </span>
      
      {filters.map((filter) => (
        <div
          key={filter.id}
          className="flex items-center gap-2 pl-3 pr-2 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
        >
          <span>{filter.label}</span>
          <button
            onClick={() => onRemoveFilter?.(filter.id)}
            className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
            aria-label={`Remove ${filter.label} filter`}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}

      <Button
        variant="ghost"
        size="sm"
        onClick={onClearAll}
        className="text-sm text-muted-foreground hover:text-foreground h-auto py-1.5 px-2"
      >
        Clear all
      </Button>
    </div>
  );
}
