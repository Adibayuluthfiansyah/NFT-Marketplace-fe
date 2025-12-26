import { LineChart } from "lucide-react";

export function NFTPriceHistory() {
  const bars = [20, 35, 30, 50, 45, 60, 55, 70, 65, 80, 85];

  return (
    <div className="bg-surface-dark/50 rounded-2xl border border-white/10 overflow-hidden p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <LineChart className="w-5 h-5 text-gray-400" />
          <h3 className="font-bold text-lg text-white">Price History</h3>
        </div>
        <div className="flex bg-white/5 rounded-lg p-1 border border-white/5">
          {["7d", "14d", "30d", "All"].map((period, i) => (
            <button
              key={period}
              className={`px-3 py-1 text-xs font-bold rounded ${
                i === 3
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="h-48 w-full flex items-end justify-between gap-1 px-2 relative border-b border-white/5 pb-6">
        {/* Background Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6 pr-2">
          {[1, 2, 3, 4].map((l) => (
            <div
              key={l}
              className="border-t border-dashed border-white/5 w-full h-0"
            ></div>
          ))}
        </div>

        {/* CSS Bars */}
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-full bg-primary/20 hover:bg-primary rounded-t-sm transition-all relative group cursor-pointer"
            style={{ height: `${h}%` }}
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark border border-white/10 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-20 pointer-events-none transition-opacity">
              {(h / 20 + 1.5).toFixed(1)} ETH
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
        <span>May 12</span>
        <span>Today</span>
      </div>
    </div>
  );
}
