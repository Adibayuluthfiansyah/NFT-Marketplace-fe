import Image from "next/image";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

interface FeaturedNFTCardProps {
  id: number;
  name: string;
  creator: string;
  image: string;
  price: string;
  trend?: string;
}

export function FeaturedNFTCard({
  id,
  name,
  creator,
  image,
  price,
  trend,
}: FeaturedNFTCardProps) {
  return (
    <Link href={`/nft/${id}`}>
      <div className="group relative flex flex-col bg-surface-dark rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 cursor-pointer">
        {/* Trend Badge */}
        {trend && (
          <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            {trend}
          </div>
        )}

        {/* Image with Gradient Overlay */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3">
          <h3 className="text-xl font-black group-hover:text-primary transition-colors">
            {name}
          </h3>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
            <p className="text-sm text-gray-400">
              <span className="text-white font-semibold">{creator}</span>
            </p>
          </div>

          <div className="flex justify-between items-center mt-2 pt-3 border-t border-white/10">
            <div>
              <p className="text-xs text-gray-500 mb-1">Harga</p>
              <p className="text-lg font-black text-primary">{price} ETH</p>
            </div>
            <button className="px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-sm transition-all">
              Beli
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
