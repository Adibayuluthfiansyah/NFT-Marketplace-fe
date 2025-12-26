import Link from "next/link";
import { Wallet } from "lucide-react";

export function NavActions() {
  return (
    <div className="flex items-center gap-4 ml-8">
      {/* Wallet Icon Link */}
      <Link href="/wallet">
        <div className="hidden sm:flex relative items-center justify-center size-10 rounded-full bg-surface-dark border border-white/10 text-gray-400 cursor-pointer hover:text-white hover:border-white/30 transition-colors">
          <Wallet className="w-5 h-5" />
        </div>
      </Link>

      {/* Connect Wallet Button (Neon Style) */}
      <button className="hidden sm:flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(127,13,242,0.4)] active:scale-95">
        Connect Wallet
      </button>

      {/* Profile Avatar */}
      <Link href="/profile">
        <div
          className="size-10 rounded-full bg-linear-to-tr from-purple-500 to-blue-500 border-2 border-white/20 cursor-pointer hover:border-primary transition-all shadow-lg"
          title="My Profile"
        ></div>
      </Link>
    </div>
  );
}
