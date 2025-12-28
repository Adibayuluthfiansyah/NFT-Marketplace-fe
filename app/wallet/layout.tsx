import { Metadata } from "next";
import { walletMetadata } from "@/lib/metadata";

export const metadata: Metadata = walletMetadata;

export default function WalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
