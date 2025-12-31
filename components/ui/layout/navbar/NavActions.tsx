import Link from "next/link";
import { Wallet } from "lucide-react";
import { ProfileDropdown } from "./ProfileDropdown";

export function NavActions() {
  const handleDisconnect = () => {
    // TODO: Implement wallet disconnect logic
    console.log("Disconnecting wallet...");
  };

  return (
    <div className="flex items-center gap-4 ml-8">
      {/* Wallet Icon Link */}
      <Link href="/wallet">
        <div className="hidden sm:flex relative items-center justify-center size-10 rounded-full bg-card border border-border text-muted-foreground cursor-pointer hover:text-foreground hover:border-primary transition-colors">
          <Wallet className="w-5 h-5" />
        </div>
      </Link>

      {/* Connect Wallet Button */}
      <button className="hidden sm:flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold transition-all shadow-lg shadow-primary/25 active:scale-95">
        Connect Wallet
      </button>

      {/* Profile Dropdown */}
      <ProfileDropdown
        address="0x1234...5678"
        ensName="mas.eth"
        onDisconnect={handleDisconnect}
      />
    </div>
  );
}
