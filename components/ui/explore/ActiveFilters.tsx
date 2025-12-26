import { X } from "lucide-react";

export function ActiveFilters() {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20">
        <span>Art</span>
        <button className="hover:text-red-500 flex items-center">
          <X className="w-3 h-3" />
        </button>
      </div>
      {["Gaming", "Music"].map((tag) => (
        <div
          key={tag}
          className="flex items-center gap-2 px-4 py-2 bg-surface-dark border border-white/10 rounded-full text-sm font-medium hover:border-primary/50 cursor-pointer transition-colors text-white"
        >
          <span>{tag}</span>
        </div>
      ))}
      <button className="text-primary text-sm font-bold hover:underline px-2">
        Clear All
      </button>
    </div>
  );
}
