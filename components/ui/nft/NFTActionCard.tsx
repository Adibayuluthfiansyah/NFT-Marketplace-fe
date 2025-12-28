import { Clock, Wallet, Tag } from "lucide-react";

export function NFTActionCard() {
  return (
    <div className="bg-surface-dark/50 rounded-2xl border border-white/10 overflow-hidden p-6 shadow-xl shadow-black/20">
      <div className="flex flex-col gap-6">
        <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3 text-sm text-gray-300 border border-white/5">
          <Clock className="w-5 h-5 text-gray-400" />
          <span>
            Sale ends in{" "}
            <span className="font-bold text-white">
              2 days 14 hours 32 minutes
            </span>
          </span>
        </div>

        <div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-2">
            Current Price
          </p>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-white">4.5 ETH</span>
            <span className="text-lg text-gray-500">$12,482.10</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold text-lg h-12 py-3 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]">
            <Wallet className="w-5 h-5" />
            Buy Now
          </button>
          <button className="flex-1 bg-transparent border-2 border-white/20 text-white font-bold text-lg h-12 py-3 rounded-full flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-all active:scale-[0.98]">
            <Tag className="w-5 h-5" />
            Make Offer
          </button>
        </div>
      </div>
    </div>
  );
}
