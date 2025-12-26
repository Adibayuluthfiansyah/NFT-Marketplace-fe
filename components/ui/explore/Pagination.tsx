import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  return (
    <div className="flex justify-center mt-12 mb-4">
      <div className="flex items-center gap-2">
        <button className="size-10 flex items-center justify-center rounded-lg bg-surface-dark border border-white/10 hover:border-primary text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold transition-colors">
          1
        </button>
        {[2, 3].map((page) => (
          <button
            key={page}
            className="size-10 flex items-center justify-center rounded-lg bg-surface-dark border border-white/10 hover:border-primary hover:text-primary text-white transition-colors"
          >
            {page}
          </button>
        ))}
        <span className="text-gray-400 px-2">...</span>
        <button className="size-10 flex items-center justify-center rounded-lg bg-surface-dark border border-white/10 hover:border-primary hover:text-primary text-white transition-colors">
          12
        </button>
        <button className="size-10 flex items-center justify-center rounded-lg bg-surface-dark border border-white/10 hover:border-primary text-white transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
