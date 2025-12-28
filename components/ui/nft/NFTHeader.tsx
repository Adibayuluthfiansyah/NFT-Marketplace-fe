import {
  CheckCircle,
  RefreshCw,
  Share2,
  MoreHorizontal,
  Eye,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
        <TooltipProvider>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <RefreshCw className="w-5 h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refresh metadata</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More options</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
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
        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 cursor-pointer transition-colors">
          <Heart className="w-4 h-4" /> <span>205 favorites</span>
        </button>
      </div>
    </div>
  );
}
