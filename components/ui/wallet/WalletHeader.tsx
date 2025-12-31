import { ChevronDown } from "lucide-react";

interface WalletHeaderProps {
  network?: string;
  onNetworkChange?: () => void;
}

export function WalletHeader({ network = "Ethereum Mainnet", onNetworkChange }: WalletHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="flex min-w-72 flex-col gap-2">
        <h1 className="text-4xl font-black leading-tight tracking-tight text-foreground">
          My Wallet
        </h1>
        <p className="text-muted-foreground text-base font-normal leading-normal">
          Manage your crypto assets and view transaction history.
        </p>
      </div>

      {/* Network Selector */}
      <div
        onClick={onNetworkChange}
        className="flex items-center gap-2 bg-card border border-border rounded-full py-2 px-4 cursor-pointer hover:border-primary/50 transition-colors"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-sm font-medium text-foreground">{network}</span>
        <ChevronDown className="text-muted-foreground w-4 h-4 ml-1" />
      </div>
    </div>
  );
}
