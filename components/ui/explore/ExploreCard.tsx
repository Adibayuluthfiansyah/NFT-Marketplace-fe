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
    <div className="group relative flex flex-col bg-surface-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
      {/* Image Area */}
      <div className="relative aspect-square overflow-hidden bg-gray-800">
        <Image
          src={data.image}
          alt={data.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={400}
          height={400}
        />
        {/* Likes Badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-white/10 z-10">
          <Heart className="w-3 h-3 text-gray-400 hover:text-red-500 transition-colors" />
          <span className="text-xs font-bold text-white">{data.likes}</span>
        </div>

        {/* Special Badge (Live/Offer) */}
        {data.badge && (
          <div
            className={`absolute bottom-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wide border border-white/10 z-10 ${
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
          <h3 className="text-base font-bold text-white leading-tight group-hover:text-primary transition-colors truncate w-full">
            {data.name}
          </h3>
          <p className="text-xs text-gray-400 mt-1">{data.author}</p>
        </div>

        <div className="mt-auto pt-3 border-t border-white/5 flex justify-between items-end">
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
              {data.priceLabel}
            </p>
            <div className="flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-white" />
              <span className="text-base font-bold text-white">
                {data.price}
              </span>
            </div>
          </div>
          {data.timeLeft && (
            <span className="text-xs text-gray-400 font-mono">
              {data.timeLeft}
            </span>
          )}
        </div>

        {/* Hover Button */}
        <button
          className={`
          w-full mt-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 shadow-lg
          lg:opacity-0 lg:group-hover:opacity-100 lg:absolute lg:bottom-4 lg:left-0 lg:right-0 lg:mx-4 lg:w-[calc(100%-2rem)] lg:translate-y-2 lg:group-hover:translate-y-0
          ${
            data.action === "Buy Now"
              ? "bg-primary hover:bg-primary/90 text-white"
              : "bg-primary/10 hover:bg-primary text-primary hover:text-white backdrop-blur-sm"
          }
        `}
        >
          {data.action}
        </button>
      </div>
    </div>
  );
}
