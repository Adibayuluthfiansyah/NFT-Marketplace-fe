export interface NFTItem {
  tokenId: number;
  name: string;
  description: string;
  image: string;
  price: string; 
  seller: string;
  isSold: boolean;
}

export interface Collection {
  rank: number;
  name: string;
  logo: string;
  floorPrice: string;
  volumeChange: string;
  verified: boolean;
  isPositive: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  active?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}