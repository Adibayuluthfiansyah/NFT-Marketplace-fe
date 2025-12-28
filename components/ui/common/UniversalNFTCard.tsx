import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { memo } from "react";

export interface UniversalNFTData {
  id: number;
  name: string;
  image: string;
  price: string;
  creator?: string;
  author?: string;
  likes?: number | string;
  badge?: string;
  badgeColor?: string;
  trend?: string;
  timeLeft?: string;
  priceLabel?: string;
  description?: string;
  tokenId?: number;
  seller?: string;
  isSold?: boolean;
  priority?: boolean; // For image loading priority
}

interface UniversalNFTCardProps {
  variant?: "explore" | "featured" | "marketplace" | "profile";
  nft: UniversalNFTData;
  showLikes?: boolean;
  showBadge?: boolean;
  showTrend?: boolean;
  actionButton?: {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
  };
  onBuy?: (id: number) => void;
}

const UniversalNFTCardComponent = ({
  variant = "explore",
  nft,
  showLikes = true,
  showBadge = true,
  showTrend = true,
  actionButton,
  onBuy,
}: UniversalNFTCardProps) => {
  const cardId = nft.tokenId || nft.id;
  const creatorName = nft.creator || nft.author || nft.seller;

  // Variant: Explore (default dari ExploreCard)
  if (variant === "explore") {
    return (
      <motion.div 
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative flex flex-col bg-surface-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
      >
        {/* Image Area */}
        <div className="relative aspect-square overflow-hidden bg-gray-800">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Image
              src={nft.image}
              alt={nft.name}
              className="absolute inset-0 w-full h-full object-cover"
              width={400}
              height={400}
              priority={nft.priority}
              loading={nft.priority ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </motion.div>
          {/* Likes Badge */}
          {showLikes && nft.likes !== undefined && (
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-white/10 z-10 cursor-pointer"
            >
              <Heart className="w-3 h-3 text-gray-400 hover:text-red-500 transition-colors" />
              <span className="text-xs font-bold text-white">{nft.likes}</span>
            </motion.div>
          )}

          {/* Special Badge (Live/Offer) */}
          {showBadge && nft.badge && (
            <div
              className={`absolute bottom-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wide border border-white/10 z-10 ${
                nft.badgeColor || "bg-primary"
              }`}
            >
              {nft.badge}
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="p-4 flex flex-col gap-3 flex-1">
          <div>
            <h3 className="text-base font-bold text-white leading-tight group-hover:text-primary transition-colors truncate w-full">
              {nft.name}
            </h3>
            {creatorName && (
              <p className="text-xs text-gray-400 mt-1">{creatorName}</p>
            )}
          </div>

          <div className="mt-auto pt-3 border-t border-white/5 flex justify-between items-end">
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                {nft.priceLabel || "Price"}
              </p>
              <div className="flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-white" />
                <span className="text-base font-bold text-white">
                  {nft.price}
                </span>
              </div>
            </div>
            {nft.timeLeft && (
              <span className="text-xs text-gray-400 font-mono">
                {nft.timeLeft}
              </span>
            )}
          </div>

          {/* Action Button */}
          {actionButton && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={actionButton.onClick}
              className={`w-full mt-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 shadow-lg
                ${
                  actionButton.variant === "primary" ||
                  actionButton.label === "Buy Now"
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-primary/10 hover:bg-primary text-primary hover:text-white backdrop-blur-sm border border-primary/30"
                }
              `}
            >
              {actionButton.label}
            </motion.button>
          )}
        </div>
      </motion.div>
    );
  }

  // Variant: Featured (dari FeaturedNFTCard - landing page)
  if (variant === "featured") {
    return (
      <Link href={`/nft/${cardId}`}>
        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
          className="group relative flex flex-col bg-surface-dark rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/30 cursor-pointer"
        >
          {/* Trend Badge */}
          {showTrend && nft.trend && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1"
            >
              <TrendingUp className="w-3 h-3" />
              {nft.trend}
            </motion.div>
          )}

          {/* Image with Gradient Overlay */}
          <div className="relative aspect-square overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={nft.image}
                alt={nft.name}
                fill
                className="object-cover"
                priority={nft.priority}
                loading={nft.priority ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-surface-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-3">
            <h3 className="text-xl font-black group-hover:text-primary transition-colors">
              {nft.name}
            </h3>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">{creatorName}</span>
              </p>
            </div>

            <div className="flex justify-between items-center mt-2 pt-3 border-t border-white/10">
              <div>
                <p className="text-xs text-gray-500 mb-1">Harga</p>
                <p className="text-lg font-black text-primary">
                  {nft.price} ETH
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-sm transition-all"
              >
                Beli
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // Variant: Marketplace (dari NFTCard)
  if (variant === "marketplace") {
    return (
      <div className="overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 group">
        {/* Gambar NFT */}
        <Link href={`/nft/${cardId}`}>
          <div className="p-0 relative aspect-square">
            <Image
              src={nft.image}
              alt={nft.name}
              width={500}
              height={500}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            {nft.tokenId && (
              <Badge className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white border-none">
                #{nft.tokenId}
              </Badge>
            )}
          </div>
        </Link>

        {/* Info NFT */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg text-foreground truncate">
                {nft.name}
              </h3>
              {nft.seller && (
                <p className="text-sm text-muted-foreground truncate w-37.5">
                  By {nft.seller.slice(0, 6)}...{nft.seller.slice(-4)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Harga & Tombol Beli */}
        <div className="p-4 pt-0 flex justify-between items-center">
          <div>
            <p className="text-xs text-muted-foreground">Current Price</p>
            <p className="font-bold text-primary text-lg">{nft.price} ETH</p>
          </div>
          <Button
            onClick={() => onBuy?.(cardId)}
            className="bg-primary hover:bg-primary/80 text-white font-semibold shadow-primary-sm"
          >
            Buy Now
          </Button>
        </div>
      </div>
    );
  }

  // Variant: Profile (simple card for user collections)
  if (variant === "profile") {
    return (
      <Link href={`/nft/${cardId}`}>
        <motion.div 
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="group relative flex flex-col bg-surface-dark rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 cursor-pointer"
        >
          {/* Image */}
          <div className="relative aspect-square overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={nft.image}
                alt={nft.name}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </motion.div>
            {nft.isSold && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">SOLD</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors truncate">
              {nft.name}
            </h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-400">{nft.price} ETH</span>
              {nft.tokenId && (
                <span className="text-xs text-gray-500">#{nft.tokenId}</span>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return null;
};

// Memoize the component to prevent unnecessary re-renders
export const UniversalNFTCard = memo(UniversalNFTCardComponent);
