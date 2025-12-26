"use client";
import Image from "next/image";
import { Navbar } from "@/components/ui/layout/Navbar";
import { Search, Flame, Heart, Verified } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark text-white font-display">
      <Navbar />

      <div className="flex flex-col items-center w-full px-4 md:px-8 py-8 space-y-12 max-w-360 mx-auto">
        {/* --- HERO SECTION --- */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex flex-col gap-4 text-left">
              <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
                Discover, Collect, and Sell Extraordinary NFTs
              </h1>
              <p className="text-gray-300 text-lg max-w-lg leading-relaxed font-body">
                The worlds first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs).
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <button className="flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-transform active:scale-95 shadow-lg shadow-primary/30">
                Explore
              </button>
              <button className="flex items-center justify-center rounded-full h-12 px-8 bg-surface-dark border border-white/10 hover:bg-white/5 text-white text-base font-bold transition-all">
                Create
              </button>
            </div>

            <div className="flex items-center gap-8 mt-4 pt-6 border-t border-white/10">
              {[
                { val: "430k+", label: "Artworks" },
                { val: "150k+", label: "Auctions" },
                { val: "25k+", label: "Artists" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold">{stat.val}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group w-full max-w-150 justify-self-center lg:justify-self-end">
            {/* Abstract Glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            {/* Hero Image Card */}
            <div className="relative w-full aspect-square md:aspect-4/3 bg-surface-dark rounded-2xl overflow-hidden shadow-2xl">
              <Image
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="NFT Hero"
                width={800}
                height={600}
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-wider">
                    Current Bid
                  </p>
                  <p className="text-xl font-bold text-white">2.50 ETH</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-wider">
                    Ending in
                  </p>
                  <p className="text-xl font-bold text-white font-mono">
                    12h 43m 20s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SEARCH BAR --- */}
        <section className="w-full max-w-4xl relative z-10 -mt-4">
          <div className="flex w-full items-center rounded-2xl h-16 bg-surface-dark border-2 border-transparent focus-within:border-primary/50 shadow-xl shadow-black/20 transition-all overflow-hidden">
            <div className="flex items-center justify-center pl-6 pr-2 text-gray-400">
              <Search className="w-6 h-6" />
            </div>
            <input
              className="flex-1 h-full bg-transparent border-none text-white placeholder:text-gray-400 text-lg font-medium px-2 focus:ring-0 focus:outline-none"
              placeholder="Search items, collections, and accounts..."
            />
            <button className="mr-2 h-12 px-6 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-colors">
              Search
            </button>
          </div>
        </section>

        {/* --- CATEGORIES --- */}
        <section className="w-full flex flex-col gap-6">
          <h2 className="text-2xl font-bold px-1">Trending Categories</h2>
          <div className="flex flex-wrap gap-3">
            <button className="flex h-10 items-center gap-2 rounded-full bg-primary text-white px-6 transition-transform hover:scale-105">
              <span className="text-sm font-bold">All</span>
            </button>
            {["Art", "Music", "Gaming", "Photography", "Virtual Worlds"].map(
              (cat) => (
                <button
                  key={cat}
                  className="flex h-10 items-center gap-2 rounded-full bg-surface-dark border border-white/5 hover:border-primary/50 px-6 transition-all hover:scale-105 hover:bg-surface-dark/80"
                >
                  <span className="text-sm font-medium">{cat}</span>
                </button>
              )
            )}
          </div>
        </section>

        {/* --- LIVE AUCTIONS GRID --- */}
        <section className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold px-1 flex items-center gap-2">
              <Flame className="text-primary w-6 h-6 fill-primary" /> Live
              Actions
            </h2>
            <a
              href="#"
              className="text-sm font-bold text-primary hover:text-white transition-colors"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* MOCK CARD LOOP */}
            {[1, 2, 3, 4].map((item, idx) => (
              <div
                key={item}
                className="group relative flex flex-col bg-surface-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-800">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={`https://images.unsplash.com/photo-${
                      idx === 0
                        ? "1633101585299-90c749b5ee94"
                        : idx === 1
                        ? "1642543492481-44e81e3914a7"
                        : "1618005182384-a83a8bd57fbe"
                    }?w=500&q=80`}
                    alt="NFT"
                    fill
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-white/10">
                    <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                    <span className="text-xs font-bold text-white">242</span>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                        Cosmic Cube #{idx}8
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        By{" "}
                        <span className="text-white font-medium">
                          NeonArtist
                        </span>
                      </p>
                    </div>
                    <div className="size-8 rounded-full bg-linear-to-br from-yellow-400 to-red-500 border border-white/10"></div>
                  </div>

                  <div className="h-px bg-white/5 my-1"></div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                        Current Bid
                      </p>
                      <div className="flex items-center gap-1">
                        <span className="text-base font-bold">1.20 ETH</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-bold transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- TOP COLLECTIONS TABLE --- */}
        <section className="w-full flex flex-col gap-6 pt-8">
          <h2 className="text-2xl font-bold px-1">Top Collections</h2>
          <div className="w-full overflow-x-auto rounded-2xl border border-white/5 bg-surface-dark">
            <div className="min-w-150 w-full p-4">
              <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/5 text-xs font-bold uppercase text-gray-500 tracking-wider px-2">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-5">Collection</div>
                <div className="col-span-3 text-right">Floor Price</div>
                <div className="col-span-3 text-right">Volume (24h)</div>
              </div>

              {/* Rows */}
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="grid grid-cols-12 gap-4 py-4 items-center hover:bg-white/5 rounded-lg px-2 transition-colors cursor-pointer"
                >
                  <div className="col-span-1 text-center font-bold">{num}</div>
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-gray-700"></div>
                    <span className="font-bold">Bored Ape Yacht Club</span>
                    <Verified className="w-4 h-4 text-blue-500 fill-blue-500" />
                  </div>
                  <div className="col-span-3 text-right font-medium">
                    10.5 ETH
                  </div>
                  <div className="col-span-3 text-right font-bold text-green-500">
                    +124%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
