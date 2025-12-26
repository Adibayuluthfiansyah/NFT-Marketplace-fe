import { Maximize2 } from "lucide-react";

export function StatsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      {/* Volume Chart */}
      <div className="lg:col-span-2 flex flex-col gap-2 rounded-2xl border border-stats-border bg-stats-surface p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-white text-lg font-bold">Volume Trends</p>
            <p className="text-text-secondary text-sm">
              Ethereum Network • Last 24 Hours
            </p>
          </div>
          <button className="size-8 flex items-center justify-center rounded-full bg-stats-border hover:bg-white/10 text-white transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Mock SVG Chart (Sama persis dari HTML) */}
        <div className="relative w-full h-50 flex items-end mt-4">
          <svg
            className="w-full h-full"
            viewBox="0 0 478 150"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 109C18.15 109 18.15 21 36.3 21C54.4 21 54.4 41 72.6 41C90.7 41 90.7 93 108.9 93C127 93 127 33 145.2 33C163.3 33 163.3 101 181.5 101C199.6 101 199.6 61 217.8 61C236 61 236 45 254.1 45C272.3 45 272.3 121 290.4 121C308.6 121 308.6 149 326.7 149C344.9 149 344.9 1 363 1C381.2 1 381.2 81 399.3 81C417.5 81 417.5 129 435.6 129C453.8 129 453.8 25 472 25"
              stroke="#7f0df2"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M0 109C18.15 109 18.15 21 36.3 21C54.4 21 54.4 41 72.6 41C90.7 41 90.7 93 108.9 93C127 93 127 33 145.2 33C163.3 33 163.3 101 181.5 101C199.6 101 199.6 61 217.8 61C236 61 236 45 254.1 45C272.3 45 272.3 121 290.4 121C308.6 121 308.6 149 326.7 149C344.9 149 344.9 1 363 1C381.2 1 381.2 81 399.3 81C417.5 81 417.5 129 435.6 129C453.8 129 453.8 25 472 25V150H0V109Z"
              fill="url(#gradient)"
              opacity="0.2"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7f0df2" stopOpacity="1" />
                <stop offset="100%" stopColor="#7f0df2" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex justify-between mt-2 px-2 text-xs font-bold text-text-secondary tracking-wider">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </div>

      {/* Category Donut */}
      <div className="flex flex-col gap-4 rounded-2xl border border-stats-border bg-stats-surface p-6 shadow-sm">
        <p className="text-white text-lg font-bold">Category Share</p>
        <div className="flex-1 flex items-center justify-center relative min-h-45">
          {/* CSS Conic Gradient Donut */}
          <div
            className="size-40 rounded-full relative flex items-center justify-center"
            style={{
              background:
                "conic-gradient(#7f0df2 0% 45%, #0bda73 45% 70%, #fa6f38 70% 85%, #302839 85% 100%)",
            }}
          >
            <div className="size-28 rounded-full bg-stats-surface flex flex-col items-center justify-center z-10">
              <span className="text-2xl font-bold text-white">45%</span>
              <span className="text-xs text-text-secondary uppercase font-bold">
                PFP
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-auto">
          {[
            { label: "PFP Art", color: "bg-primary" },
            { label: "Gaming", color: "bg-[#0bda73]" },
            { label: "Utility", color: "bg-[#fa6f38]" },
            { label: "Others", color: "bg-stats-border" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-2">
              <div className={`size-3 rounded-full ${c.color}`}></div>
              <span className="text-sm font-medium text-white">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
