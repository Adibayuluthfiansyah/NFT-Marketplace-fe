import { Plus, ArrowUp, ArrowLeftRight, ChevronRight } from "lucide-react";

interface WalletQuickActionsProps {
  onAddFunds?: () => void;
  onWithdraw?: () => void;
  onSwap?: () => void;
}

export function WalletQuickActions({
  onAddFunds,
  onWithdraw,
  onSwap,
}: WalletQuickActionsProps) {
  return (
    <div className="lg:col-span-1 flex flex-col gap-4">
      <div className="bg-card border border-border rounded-2xl p-6 h-full flex flex-col justify-center gap-4">
        <p className="text-foreground font-bold text-lg">Quick Actions</p>
        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={onAddFunds}
            className="flex w-full cursor-pointer items-center justify-between rounded-xl p-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all group shadow-lg shadow-primary/20"
          >
            <div className="flex items-center gap-3">
              <span className="bg-primary-foreground/20 p-1.5 rounded-full">
                <Plus className="w-4 h-4" />
              </span>
              <span className="text-base font-bold">Add Funds</span>
            </div>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onWithdraw}
            className="flex w-full cursor-pointer items-center justify-between rounded-xl p-4 bg-background border border-border text-foreground hover:border-primary/50 hover:bg-muted transition-all group"
          >
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">
                <ArrowUp className="w-5 h-5" />
              </span>
              <span className="text-base font-bold">Withdraw</span>
            </div>
          </button>

          <button
            onClick={onSwap}
            className="flex w-full cursor-pointer items-center justify-between rounded-xl p-4 bg-background border border-border text-foreground hover:border-primary/50 hover:bg-muted transition-all group"
          >
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">
                <ArrowLeftRight className="w-5 h-5" />
              </span>
              <span className="text-base font-bold">Swap</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
