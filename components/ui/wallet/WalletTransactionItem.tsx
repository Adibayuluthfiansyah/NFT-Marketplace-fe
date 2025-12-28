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
  statusColor: string;
  bgStatus: string;
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
    <div className="group flex flex-col md:grid md:grid-cols-12 gap-4 px-6 py-4 border-b border-border-dark last:border-0 hover:bg-white/2 transition-colors items-center">
      {/* Item Column */}
      <div className="col-span-4 flex items-center gap-4 w-full">
        <div
          className="h-12 w-12 rounded-lg bg-cover bg-center shrink-0 border border-white/5"
          style={{ backgroundImage: `url(${tx.image})` }}
        ></div>
        <div className="flex flex-col">
          <span className="text-white font-bold">{tx.name}</span>
          <span className="text-text-secondary text-xs">{tx.collection}</span>
        </div>
      </div>

      {/* Type Column */}
      <div className="col-span-2 flex items-center gap-2 w-full mt-2 md:mt-0">
        <span className={`${tx.statusColor} ${tx.bgStatus} p-1 rounded-full`}>
          <tx.icon className="w-3.5 h-3.5" />
        </span>
        <span className="text-white text-sm font-medium">{tx.type}</span>
      </div>

      {/* Price Column */}
      <div className="col-span-3 text-left md:text-right w-full mt-2 md:mt-0">
        <div className="flex flex-col md:items-end">
          <span
            className={`font-bold ${
              tx.isPositive ? "text-green-400" : "text-white"
            }`}
          >
            {tx.price}
          </span>
          <span className="text-text-secondary text-xs">{tx.fiat}</span>
        </div>
      </div>

      {/* Date & Link Column */}
      <div className="col-span-3 text-left md:text-right w-full flex items-center md:justify-end gap-2 mt-2 md:mt-0">
        <span className="text-text-secondary text-sm">{tx.date}</span>
        <ExternalLink className="text-primary w-4.5 h-4.5 cursor-pointer hover:text-white transition-colors" />
      </div>
    </div>
  );
}
