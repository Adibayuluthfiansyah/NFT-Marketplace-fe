import { Wallet, Copy, ChevronDown } from "lucide-react";

interface WalletBalanceCardProps {
  balance: string;
  balanceUSD: string;
  address: string;
  onDisconnect?: () => void;
}

export function WalletBalanceCard({
  balance,
  balanceUSD,
  address,
  onDisconnect,
}: WalletBalanceCardProps) {
  return (
    <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-card border border-border shadow-xl">
      {/* Abstract Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 opacity-50 transition-opacity group-hover:opacity-70"></div>

      <div className="relative z-10 p-8 flex flex-col h-full justify-between gap-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-muted rounded-xl backdrop-blur-sm border border-border">
              <Wallet className="text-foreground w-6 h-6" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Connected Address
              </p>
              <div className="flex items-center gap-2 group/copy cursor-pointer">
                <p className="text-foreground font-mono text-sm tracking-wide">
                  {address}
                </p>
                <Copy className="text-muted-foreground w-4 h-4 group-hover/copy:text-primary transition-colors" />
              </div>
            </div>
          </div>
          <button
            onClick={onDisconnect}
            className="text-xs font-bold text-muted-foreground bg-muted hover:bg-muted/80 px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors uppercase tracking-wider"
          >
            Disconnect
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm font-medium">
            Total Balance
          </p>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              {balance} ETH
            </h2>
            <span className="text-xl text-muted-foreground font-normal">
              ${balanceUSD} USD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
