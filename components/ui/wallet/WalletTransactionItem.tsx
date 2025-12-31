import { ExternalLink, LucideIcon } from "lucide-react";
import Image from "next/image";

export interface Transaction {
  id: number;
  name: string;
  collection: string;
  type: string;
  price: string;
  fiat: string;
  date: string;
  image: string;
  icon: LucideIcon;
  isPositive: boolean;
}

interface WalletTransactionItemProps {
  transaction: Transaction;
}

export function WalletTransactionItem({
  transaction: tx,
}: WalletTransactionItemProps) {
  return (
    <div className="group flex flex-col md:grid md:grid-cols-12 gap-4 px-6 py-4 border-b border-border last:border-0 hover:bg-muted/50 transition-colors items-center">
      {/* Item Column */}
      <div className="col-span-4 flex items-center gap-4 w-full">
        <div
          className="h-12 w-12 rounded-lg bg-cover bg-center shrink-0 border border-border"
          style={{ backgroundImage: `url(${tx.image})` }}
        ></div>
        <div className="flex flex-col">
          <span className="text-foreground font-bold">{tx.name}</span>
          <span className="text-muted-foreground text-xs">{tx.collection}</span>
        </div>
      </div>

      {/* Type Column */}
      <div className="col-span-2 flex items-center gap-2 w-full mt-2 md:mt-0">
        <span className={`${getTransactionColor(tx.type)} p-1.5 rounded-full`}>
          <tx.icon className="w-3.5 h-3.5" />
        </span>
        <span className="text-foreground text-sm font-medium">{tx.type}</span>
      </div>

      {/* Price Column */}
      <div className="col-span-3 text-left md:text-right w-full mt-2 md:mt-0">
        <div className="flex flex-col md:items-end">
          <span
            className={`font-bold ${
              tx.isPositive ? "text-green-500" : "text-foreground"
            }`}
          >
            {tx.price}
          </span>
          <span className="text-muted-foreground text-xs">{tx.fiat}</span>
        </div>
      </div>

      {/* Date & Link Column */}
      <div className="col-span-3 text-left md:text-right w-full flex items-center md:justify-end gap-2 mt-2 md:mt-0">
        <span className="text-muted-foreground text-sm">{tx.date}</span>
        <ExternalLink className="text-primary w-4 h-4 cursor-pointer hover:text-primary/80 transition-colors" />
      </div>
    </div>
  );
}

function getTransactionColor(type: string): string {
  switch (type) {
    case "Minted":
      return "bg-primary/10 text-primary";
    case "Sold":
      return "bg-green-500/10 text-green-500";
    case "Bought":
      return "bg-secondary/10 text-secondary";
    default:
      return "bg-muted text-muted-foreground";
  }
}
