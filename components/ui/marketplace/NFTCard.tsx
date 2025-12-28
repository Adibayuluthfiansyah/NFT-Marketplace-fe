import Image from "next/image";
import { NFTItem } from "@/app/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NFTCardProps {
  item: NFTItem;
  onBuy?: (id: number) => void;
}

export function NFTCard({ item, onBuy }: NFTCardProps) {
  return (
    <Card className="overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300 group">
      {/* Gambar NFT */}
      <Link href={`/nft/${item.tokenId}`}>
        <CardHeader className="p-0 relative aspect-square">
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={500}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white border-none">
            #{item.tokenId}
          </Badge>
        </CardHeader>
      </Link>

      {/* Info NFT */}
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-foreground truncate">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground truncate w-37.5">
              By {item.seller.slice(0, 6)}...{item.seller.slice(-4)}
            </p>
          </div>
        </div>
      </CardContent>

      {/* Harga & Tombol Beli */}
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div>
          <p className="text-xs text-muted-foreground">Current Price</p>
          <p className="font-bold text-primary text-lg">{item.price} ETH</p>
        </div>
        <Button
          onClick={() => onBuy?.(item.tokenId)}
          className="bg-primary hover:bg-primary/80 text-white font-semibold shadow-primary-sm"
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
