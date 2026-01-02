export interface NFTTrait {
  label: string;
  val: string;
  pct: string;
}

export interface NFTPriceHistoryItem {
  date: string;
  price: string;
  event: "Sale" | "Mint" | "Transfer" | "List";
}

export interface NFTOffer {
  from: string;
  price: string;
  expires: string;
}

export interface NFTMetadata {
  id: string;
  tokenId: number;
  name: string;
  collection: string;
  description: string;
  image: string;
  owner: string;
  creator: string;
  price: string;
  priceUSD: string;
  traits: NFTTrait[];
  views: number;
  favorites: number;
  createdAt: string;
  blockchain: string;
  contractAddress: string;
}

export interface NFTDetailPageProps {
  params: {
    id: string;
  };
}
