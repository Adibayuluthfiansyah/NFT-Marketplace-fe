import { Search } from "lucide-react";

export function NavSearch() {
  return (
    <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <input
        type="text"
        placeholder="Search items, collections, and accounts"
        className="w-full h-10 pl-10 pr-4 rounded-full bg-card border border-border text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground"
      />
    </div>
  );
}
