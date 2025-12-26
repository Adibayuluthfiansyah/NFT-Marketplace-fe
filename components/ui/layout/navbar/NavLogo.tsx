import Link from "next/link";
import { Hexagon } from "lucide-react";

export function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 text-slate-900 dark:text-white group"
    >
      <div className="size-8 text-primary group-hover:scale-110 transition-transform duration-300">
        <Hexagon className="w-full h-full fill-current" />
      </div>
      <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
        7ONG NFT
      </h2>
    </Link>
  );
}
