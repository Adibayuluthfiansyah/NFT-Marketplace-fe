import { Search } from "lucide-react";

export function NavSearch() {
  return (
    <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="text"
        placeholder="Search items, collections, and accounts"
        className="w-full h-10 pl-10 pr-4 rounded-full bg-surface-dark border border-white/10 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-500"
      />
    </div>
  );
}
