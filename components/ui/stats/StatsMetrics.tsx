import {
  BarChart3,
  Wallet,
  Tag,
  Fuel,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export function StatsMetrics() {
  const metrics = [
    {
      label: "Total Volume",
      value: "1,402 ETH",
      change: "+12.5%",
      isUp: true,
      icon: BarChart3,
    },
    {
      label: "Active Wallets",
      value: "34.2K",
      change: "+5.2%",
      isUp: true,
      icon: Wallet,
    },
    {
      label: "NFTs Sold",
      value: "12,045",
      change: "-2.1%",
      isUp: false,
      icon: Tag,
    },
    {
      label: "Avg Gas",
      value: "24 Gwei",
      change: "-0.8%",
      isUp: false,
      icon: Fuel,
      suffix: "(Cheaper)",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 rounded-2xl p-6 bg-stats-surface border border-stats-border shadow-sm group hover:border-primary/30 transition-colors"
        >
          <div className="flex items-center gap-2">
            <m.icon className="text-slate-400 w-5 h-5 group-hover:text-primary transition-colors" />
            <p className="text-text-secondary text-sm font-bold uppercase tracking-wider">
              {m.label}
            </p>
          </div>
          <p className="text-white text-3xl font-bold leading-tight">
            {m.value}
          </p>
          <p
            className={`text-sm font-bold flex items-center gap-1 ${
              m.isUp
                ? "text-green-500"
                : m.change.includes("Gas")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {m.isUp ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            {m.change}
            {m.suffix && (
              <span className="text-slate-400 font-normal ml-1">
                {m.suffix}
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
