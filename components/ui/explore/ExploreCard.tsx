import { Heart, DollarSign } from "lucide-react";
import Image from "next/image";

interface ExploreNFTProps {
  data: {
    id: number;
    name: string;
    author: string;
    image: string;
    likes: number | string;
    priceLabel: string;
    price: string;
    timeLeft?: string;
    badge?: string;
    badgeColor?: string;
    action: string;
  };
}

export function ExploreCard({ data }: ExploreNFTProps) {
  return (
    <div className="group relative flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
      {/* Image Area */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={data.image}
          alt={data.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={400}
          height={400}
        />
        {/* Likes Badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-border z-10">
          <Heart className="w-3 h-3 text-muted-foreground hover:text-red-500 transition-colors" />
          <span className="text-xs font-bold text-foreground">{data.likes}</span>
        </div>

        {/* Special Badge (Live/Offer) */}
        {data.badge && (
          <div
            className={`absolute bottom-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wide border border-border z-10 ${
              data.badgeColor || "bg-primary"
            }`}
          >
            {data.badge}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors truncate w-full">
            {data.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{data.author}</p>
        </div>

        <div className="mt-auto pt-3 border-t border-border flex justify-between items-end">
          <div>
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
              {data.priceLabel}
            </p>
            <div className="flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-foreground" />
              <span className="text-base font-bold text-foreground">
                {data.price}
              </span>
            </div>
          </div>
          {data.timeLeft && (
            <span className="text-xs text-muted-foreground font-mono">
              {data.timeLeft}
            </span>
          )}
        </div>

        {/* Action Button */}
        <button
          className={`w-full mt-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 shadow-lg
            ${
              data.action === "Buy Now"
                ? "bg-primary hover:bg-primary/90 text-white"
                : "bg-primary/10 hover:bg-primary text-primary hover:text-white backdrop-blur-sm border border-primary/30"
            }
          `}
        >
          {data.action}
        </button>
      </div>
    </div>
  );
}
