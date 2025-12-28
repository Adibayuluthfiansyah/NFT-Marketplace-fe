import {
  CheckCircle,
  RefreshCw,
  Share2,
  MoreHorizontal,
  Eye,
  Heart,
} from "lucide-react";

export function NFTHeader({ id }: { id: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-primary hover:text-primary/80 font-bold text-lg flex items-center gap-1"
        >
          Azuki Collection
          <CheckCircle className="w-5 h-5 fill-primary text-background-dark" />
        </a>
        <div className="flex items-center gap-2">
          {[RefreshCw, Share2, MoreHorizontal].map((Icon, i) => (
            <button
              key={i}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors border border-transparent hover:border-white/10"
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
        Azuki #{id}
      </h1>

      <div className="flex items-center gap-6 mt-1 flex-wrap">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Owned by</span>
          <a
            href="#"
            className="flex items-center gap-2 text-white hover:text-primary font-medium"
          >
            <div className="size-5 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500"></div>
            CryptoKing
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Eye className="w-4 h-4" /> <span>4.2K views</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 cursor-pointer transition-colors">
          <Heart className="w-4 h-4" /> <span>205 favorites</span>
        </div>
      </div>
    </div>
  );
}
