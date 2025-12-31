import { ArrowRight } from "lucide-react";
import { WalletTransactionItem, Transaction } from "./WalletTransactionItem";

interface WalletTransactionListProps {
  transactions: Transaction[];
  onViewAll?: () => void;
}

export function WalletTransactionList({
  transactions,
  onViewAll,
}: WalletTransactionListProps) {
  return (
    <div className="flex flex-col gap-6 pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-2">
        <h2 className="text-foreground text-2xl font-bold leading-tight">
          Transaction History
        </h2>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
          {["All", "Purchases", "Sales", "Minting"].map((filter, i) => (
            <button
              key={filter}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                i === 0
                  ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                  : "bg-transparent border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Transaction List */}
      <div className="flex flex-col rounded-2xl bg-card border border-border overflow-hidden">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <div className="col-span-4">Item</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-3 text-right">Price</div>
          <div className="col-span-3 text-right">Date</div>
        </div>

        {/* Rows */}
        {transactions.map((tx) => (
          <WalletTransactionItem key={tx.id} transaction={tx} />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center py-4">
        <button
          onClick={onViewAll}
          className="text-muted-foreground hover:text-foreground text-sm font-medium flex items-center gap-1 transition-colors"
        >
          View all transactions
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
