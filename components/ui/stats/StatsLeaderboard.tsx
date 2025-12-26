import { BadgeCheck } from "lucide-react";

export function StatsLeaderboard() {
  const collections = [
    {
      rank: 1,
      name: "Bored Ape YC",
      floor: "24.5 ETH",
      vol: "450 ETH",
      change: "+14%",
      img: "bg-orange-500",
    },
    {
      rank: 2,
      name: "CryptoPunks",
      floor: "58.2 ETH",
      vol: "320 ETH",
      change: "-2%",
      img: "bg-blue-500",
    },
    {
      rank: 3,
      name: "Azuki",
      floor: "6.4 ETH",
      vol: "180 ETH",
      change: "+8.5%",
      img: "bg-red-500",
    },
    {
      rank: 4,
      name: "Art Blocks",
      floor: "0.8 ETH",
      vol: "112 ETH",
      change: "+22%",
      img: "bg-purple-500",
    },
  ];

  const sales = [
    {
      name: "Cyber #9042",
      col: "CyberKongz",
      price: "4.2 ETH",
      time: "2 mins ago",
      img: "bg-pink-500",
    },
    {
      name: "Doodle #221",
      col: "Doodles",
      price: "8.5 ETH",
      time: "5 mins ago",
      img: "bg-yellow-500",
    },
    {
      name: "Clone X #18",
      col: "RTFKT",
      price: "12.0 ETH",
      time: "12 mins ago",
      img: "bg-cyan-500",
    },
    {
      name: "Chromie #88",
      col: "Squiggle",
      price: "14.1 ETH",
      time: "22 mins ago",
      img: "bg-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* Top Collections */}
      <div className="flex flex-col rounded-2xl border border-stats-border bg-stats-surface overflow-hidden shadow-sm">
        <div className="flex justify-between items-center p-6 pb-2">
          <h3 className="text-xl font-bold text-white">Top Collections</h3>
          <a
            href="#"
            className="text-primary text-sm font-bold hover:underline"
          >
            View All
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-stats-border/50">
                <th className="p-4 pl-6 text-xs font-bold text-slate-400 uppercase tracking-wider w-16">
                  Rank
                </th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Collection
                </th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">
                  Floor
                </th>
                <th className="p-4 pr-6 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">
                  Volume
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {collections.map((c) => (
                <tr
                  key={c.name}
                  className="group hover:bg-stats-border/30 transition-colors border-b border-stats-border/30 last:border-0"
                >
                  <td className="p-4 pl-6 font-bold text-slate-500">
                    {c.rank}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`size-10 rounded-full ${c.img}`}></div>
                      <div className="flex flex-col">
                        <span className="font-bold text-white">{c.name}</span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <BadgeCheck className="w-3 h-3 text-blue-400" />{" "}
                          Verified
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right font-medium text-white">
                    {c.floor}
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="font-bold text-white">{c.vol}</div>
                    <div
                      className={`text-xs ${
                        c.change.includes("-")
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {c.change}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trending Sales */}
      <div className="flex flex-col rounded-2xl border border-stats-border bg-stats-surface overflow-hidden shadow-sm">
        <div className="flex justify-between items-center p-6 pb-2">
          <h3 className="text-xl font-bold text-white">Trending Sales</h3>
          <div className="flex gap-2">
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider animate-pulse">
              Live
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          {sales.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 border-b border-stats-border/30 hover:bg-stats-border/30 transition-colors cursor-pointer group last:border-0"
            >
              <div className="flex items-center gap-4">
                <div className={`size-12 rounded-lg ${s.img}`}></div>
                <div className="flex flex-col">
                  <span className="font-bold text-white group-hover:text-primary transition-colors">
                    {s.name}
                  </span>
                  <span className="text-xs text-slate-500">{s.col}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold text-white text-lg">{s.price}</span>
                <span className="text-xs text-slate-500">{s.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
