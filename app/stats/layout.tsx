import { Metadata } from "next";
import { statsMetadata } from "@/lib/metadata";

export const metadata: Metadata = statsMetadata;

export default function StatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
