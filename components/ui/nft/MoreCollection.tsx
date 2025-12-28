import Link from "next/link";
import { UniversalNFTCard, UniversalNFTData } from "@/components/ui/common";

export function MoreCollection() {
  // Generate NFT data menggunakan UniversalNFTData interface
  const items: UniversalNFTData[] = [1, 2, 3, 4, 5].map((item) => ({
    id: 1000 + item,
    tokenId: 1000 + item,
    name: `Azuki #${1000 + item}`,
    image: `https://images.unsplash.com/photo-${
      item === 1
        ? "1633101585299-90c749b5ee94"
        : item === 2
        ? "1642543492481-44e81e3914a7"
        : "1618005182384-a83a8bd57fbe"
    }?w=500&q=80`,
    price: `3.${9 - item}`,
    likes: 24,
    seller: "Azuki Collection",
  }));

  return (
    <div className="mt-16 mb-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-white">
          More from this collection
        </h3>
        <Link href="/explore" className="text-primary font-bold hover:underline">
          View collection
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {items.map((nft) => (
          <UniversalNFTCard
            key={nft.id}
            variant="marketplace"
            nft={nft}
            showLikes={true}
          />
        ))}
      </div>
    </div>
  );
}
