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
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="group relative flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-card-hover transition-all duration-300"
      >
        {/* Image Area */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={nft.image}
            alt={nft.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={400}
            height={400}
            priority={nft.priority}
            loading={nft.priority ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Likes Badge */}
          {showLikes && nft.likes !== undefined && (
            <div className="absolute top-3 right-3 bg-card/80 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-border z-10">
              <Heart className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-semibold text-foreground">{nft.likes}</span>
            </div>
          )}

          {/* Special Badge (Live/Offer) */}
          {showBadge && nft.badge && (
            <div
              className={`absolute bottom-3 left-3 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wide z-10 ${
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
            <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-1">
              {nft.name}
            </h3>
            {creatorName && (
              <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{creatorName}</p>
            )}
          </div>

          <div className="mt-auto pt-3 border-t border-border flex justify-between items-end">
            <div>
              <p className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wide mb-1">
                {nft.priceLabel || "Price"}
              </p>
              <span className="text-base font-bold text-foreground">
                {nft.price} <span className="text-sm font-normal text-muted-foreground">ETH</span>
              </span>
            </div>
            {nft.timeLeft && (
              <span className="text-xs text-muted-foreground font-medium">
                {nft.timeLeft}
              </span>
            )}
          </div>

          {/* Action Button */}
          {actionButton && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={actionButton.onClick}
              className={`w-full mt-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-sm
                ${
                  actionButton.variant === "primary" ||
                  actionButton.label === "Buy Now"
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20"
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
          whileHover={{ y: -8 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="group relative flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
        >
          {/* Trend Badge */}
          {showTrend && nft.trend && (
            <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-secondary/90 backdrop-blur-sm text-secondary-foreground text-xs font-semibold flex items-center gap-1.5 shadow-sm">
              <TrendingUp className="w-3.5 h-3.5" />
              {nft.trend}
            </div>
          )}

          {/* Image with Gradient Overlay */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            <Image
              src={nft.image}
              alt={nft.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={nft.priority}
              loading={nft.priority ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-3.5">
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {nft.name}
              </h3>
              {creatorName && (
                <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                  {creatorName}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Price</p>
                <p className="text-base font-bold text-foreground">
                  {nft.price} <span className="text-sm font-normal text-muted-foreground">ETH</span>
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground font-medium text-sm transition-all shadow-sm"
              >
                Buy
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
          className="group relative flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 cursor-pointer"
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
            <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
              {nft.name}
            </h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-muted-foreground">{nft.price} ETH</span>
              {nft.tokenId && (
                <span className="text-xs text-muted-foreground">#{nft.tokenId}</span>
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
