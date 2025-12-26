import { useState } from "react";

export function StatsHeader() {
  const [filter, setFilter] = useState("24h");

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-6 mb-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white">
          Market Statistics
        </h1>
        <p className="text-text-secondary text-base">
          Real-time data on the top NFT collections and market trends.
        </p>
      </div>

      <div className="flex h-10 items-center justify-center rounded-full bg-stats-border p-1">
        {["24h", "7d", "30d", "All"].map((item) => (
          <label
            key={item}
            className={`flex cursor-pointer h-full items-center justify-center rounded-full px-4 text-sm font-bold transition-all ${
              filter === item
                ? "bg-stats-bg text-primary shadow-sm"
                : "text-text-secondary hover:text-white"
            }`}
          >
            <span className="truncate">{item}</span>
            <input
              type="radio"
              name="time-filter"
              className="hidden"
              checked={filter === item}
              onChange={() => setFilter(item)}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
