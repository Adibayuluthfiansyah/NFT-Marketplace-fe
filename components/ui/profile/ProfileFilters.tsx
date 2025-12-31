import { Search, Grid } from "lucide-react";

interface ProfileFiltersProps {
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  onSortChange?: (sort: string) => void;
  onViewChange?: () => void;
}

export function ProfileFilters({
  searchPlaceholder = "Search by name",
  onSearch,
  onSortChange,
  onViewChange,
}: ProfileFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder={searchPlaceholder}
          onChange={(e) => onSearch?.(e.target.value)}
          className="w-full bg-card border border-border rounded-xl py-3 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all"
        />
      </div>
      <div className="flex gap-2">
        <select
          onChange={(e) => onSortChange?.(e.target.value)}
          className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none cursor-pointer"
        >
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Recently Listed</option>
        </select>
        <button
          onClick={onViewChange}
          className="bg-card border border-border rounded-xl px-4 py-3 text-muted-foreground hover:text-foreground"
        >
          <Grid className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
