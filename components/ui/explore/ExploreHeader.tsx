import { Search, ChevronDown, Filter, Grid, List } from "lucide-react";

interface ExploreHeaderProps {
  onMobileFilterOpen: () => void;
}

export function ExploreHeader({ onMobileFilterOpen }: ExploreHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-0 md:relative z-20">
      <button
        onClick={onMobileFilterOpen}
        className="lg:hidden flex items-center justify-center gap-2 h-12 px-4 rounded-xl bg-surface-dark border border-white/10 text-sm font-bold w-full md:w-auto text-white"
      >
        <Filter className="w-4 h-4" /> Filters
      </button>

      <div className="flex-1 flex gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            className="w-full h-12 pl-12 pr-4 rounded-xl bg-surface-dark border border-white/10 focus:border-primary focus:ring-0 transition-colors outline-none text-white placeholder-gray-500"
            placeholder="Search by name or attribute"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative min-w-45">
          <select className="w-full h-12 pl-4 pr-10 rounded-xl bg-surface-dark border border-white/10 focus:border-primary focus:ring-0 text-sm font-bold appearance-none cursor-pointer outline-none text-white">
            <option>Recently Listed</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Favorite</option>
            <option>Ending Soon</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-white" />
        </div>

        {/* View Toggle */}
        <div className="hidden sm:flex gap-1 bg-surface-dark border border-white/10 rounded-xl p-1 h-12">
          <button className="flex items-center justify-center w-10 h-full rounded-lg bg-white/10 text-primary">
            <Grid className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center w-10 h-full rounded-lg hover:bg-white/5 text-gray-500">
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
