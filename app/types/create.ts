// Type definitions for Create NFT page

export interface NFTFormData {
  name: string;
  externalLink?: string;
  description?: string;
  collection: string;
  category: string;
  supply: number;
  blockchain: string;
  properties?: NFTProperty[];
  levels?: NFTLevel[];
  stats?: NFTStat[];
  file?: File;
}

export interface NFTProperty {
  id: string;
  type: string;
  name: string;
}

export interface NFTLevel {
  id: string;
  name: string;
  value: number;
  maxValue: number;
}

export interface NFTStat {
  id: string;
  name: string;
  value: number;
}

export interface CollectionOption {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface CategoryOption {
  id: string;
  name: string;
  selected: boolean;
}

export interface BlockchainOption {
  id: string;
  name: string;
  icon: string;
  gasEstimate?: string;
}

export interface AttributeSection {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  type: "properties" | "levels" | "stats";
}
