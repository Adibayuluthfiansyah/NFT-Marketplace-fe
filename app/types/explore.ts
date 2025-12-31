export interface FilterOption {
  label: string;
  value: string;
  checked?: boolean;
}

export interface CollectionOption {
  id: string;
  name: string;
  icon?: string;
}

export interface PriceRange {
  min: string;
  max: string;
}

export interface ExploreFilters {
  status: string[];
  priceRange: PriceRange;
  categories: string[];
  collections: string[];
  artists: string[];
}

export type SortOption = 
  | "recently-listed"
  | "price-low-high"
  | "price-high-low"
  | "most-favorite"
  | "ending-soon";

export type ViewMode = "grid" | "list";

export interface ActiveFilter {
  id: string;
  label: string;
  type: keyof ExploreFilters;
}
