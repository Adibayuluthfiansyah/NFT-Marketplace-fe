import { ShoppingCart, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 px-6 py-4 bg-background-dark/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center  text-white">
          <h1 className="text-xl font-bold tracking-tight text-white">7ONG</h1>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-white">NFT</h2>
      </div>

      <div className="hidden md:flex flex-1 justify-center gap-8">
        {["Explore", "Stats", "Resources", "Create"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-bold text-white hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center justify-center size-10 rounded-full bg-surface-dark border border-white/10 text-gray-400 cursor-pointer hover:text-primary transition-colors">
          <ShoppingCart className="w-5 h-5" />
        </div>
        <div className="hidden sm:flex items-center justify-center size-10 rounded-full bg-surface-dark border border-white/10 text-gray-400 cursor-pointer hover:text-primary transition-colors">
          <Wallet className="w-5 h-5" />
        </div>

        <Button className="rounded-full h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/25 border-none">
          Connect Wallet
        </Button>

        {/* Avatar Placeholder */}
        <div className="size-10 rounded-full bg-linear-to-tr from-purple-400 to-blue-500 border-2 border-white/10 cursor-pointer"></div>
      </div>
    </header>
  );
}
