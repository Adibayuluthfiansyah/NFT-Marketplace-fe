"use client";

import { Tag, ChevronUp } from "lucide-react";

interface Trait {
  label: string;
  val: string;
  pct: string;
}

export function NFTProperties({ traits }: { traits: Trait[] }) {
  return (
    <div className="bg-surface-dark/50 rounded-2xl border border-white/10 overflow-hidden">
      <div className="px-5 py-4 flex items-center justify-between border-b border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          <Tag className="w-5 h-5 text-gray-400" />
          <h3 className="font-bold text-lg text-white">Properties</h3>
        </div>
        <ChevronUp className="w-5 h-5 text-gray-400" />
      </div>
      <div className="p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {traits.map((prop, i) => (
          <div
            key={i}
            className="bg-primary/5 border border-primary/20 rounded-xl p-3 text-center flex flex-col items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer group"
          >
            <span className="text-[10px] text-primary uppercase font-bold tracking-wider mb-1">
              {prop.label}
            </span>
            <span className="text-white font-medium text-sm mb-1">
              {prop.val}
            </span>
            <span className="text-[10px] text-gray-500 group-hover:text-gray-400">
              {prop.pct} have this
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
