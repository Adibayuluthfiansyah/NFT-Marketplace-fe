import { Filter, ChevronDown, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface ExploreSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExploreSidebar({ isOpen, onClose }: ExploreSidebarProps) {
  return (
    <aside
      className={`
      lg:flex flex-col w-full lg:w-80 lg:h-[calc(100vh-80px)] lg:sticky lg:top-20
      overflow-y-auto border-r border-white/10 bg-background-dark p-6 gap-6
      ${isOpen ? "flex fixed inset-0 z-50 bg-background-dark" : "hidden"}
    `}
    >
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">Filters</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
          <X className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold flex items-center gap-2 text-white">
          <Filter className="w-5 h-5" /> Filters
        </h3>
        <Button variant="link" className="text-sm text-primary font-bold p-0 h-auto">
          Reset
        </Button>
      </div>

      {/* Filter: Status */}
      <div className="border-b border-white/10 pb-6">
        <button className="flex items-center justify-between w-full font-bold mb-4 text-white">
          <span>Status</span>
          <ChevronDown className="w-5 h-5" />
        </button>
        <div className="grid grid-cols-2 gap-2">
          <Button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold">
            Buy Now
          </Button>
          <Button variant="outline" className="bg-surface-dark border-white/10 hover:border-primary/50 text-white text-sm font-medium">
            On Auction
          </Button>
        </div>
      </div>

      {/* Filter: Price Range */}
      <div className="border-b border-white/10 pb-6">
        <button className="flex items-center justify-between w-full font-bold mb-4 text-white">
          <span>Price Range</span>
          <ChevronDown className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 mb-3">
          <Input
            className="flex-1 bg-transparent rounded-lg border-white/10 text-sm text-white focus:border-primary"
            placeholder="Min"
            type="number"
          />
          <span className="text-gray-400">to</span>
          <Input
            className="flex-1 bg-transparent rounded-lg border-white/10 text-sm text-white focus:border-primary"
            placeholder="Max"
            type="number"
          />
        </div>
        <Button variant="outline" className="w-full bg-surface-dark border-white/10 hover:bg-primary hover:text-white hover:border-primary text-sm font-bold">
          Apply
        </Button>
      </div>

      {/* Filter: Categories */}
      <div className="border-b border-white/10 pb-6">
        <button className="flex items-center justify-between w-full font-bold mb-4 text-white">
          <span>Categories</span>
          <ChevronDown className="w-5 h-5" />
        </button>
        <div className="flex flex-col gap-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
          {[
            "Art",
            "Music",
            "Photography",
            "Virtual Worlds",
            "Collectibles",
          ].map((cat, i) => (
            <label
              key={cat}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                defaultChecked={i === 0}
                className="rounded border-white/20 text-primary focus:ring-0 bg-transparent"
                type="checkbox"
              />
              <span className="text-sm font-medium text-gray-400 group-hover:text-primary transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter: Collections */}
      <div className="border-b border-white/10 pb-6">
        <button className="flex items-center justify-between w-full font-bold mb-4 text-white">
          <span>Collections</span>
          <ChevronDown className="w-5 h-5" />
        </button>
        <div className="relative mb-3">
          <Search className="absolute left-3 top-2.5 text-gray-400 text-sm w-4 h-4" />
          <input
            className="w-full bg-surface-dark rounded-lg border border-white/10 pl-9 pr-3 py-2 text-sm text-white focus:border-primary focus:ring-0 outline-none"
            placeholder="Filter collections"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          {["Bored Ape YC", "Azuki", "Doodles"].map((col) => (
            <div
              key={col}
              className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors text-white"
            >
              <div className="size-6 rounded-full bg-gray-700"></div>
              <span className="text-sm font-medium">{col}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter: Artists */}
      <div>
        <button className="flex items-center justify-between w-full font-bold mb-4 text-white">
          <span>Artists</span>
          <ChevronDown className="w-5 h-5" />
        </button>
        <div className="flex flex-col gap-2">
          {["Beeple", "Pak", "XCOPY"].map((artist) => (
            <label
              key={artist}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                className="rounded border-white/20 text-primary focus:ring-0 bg-transparent"
                type="checkbox"
              />
              <span className="text-sm font-medium text-gray-400 group-hover:text-primary transition-colors">
                {artist}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
