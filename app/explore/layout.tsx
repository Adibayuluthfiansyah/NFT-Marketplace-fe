import { Metadata } from "next";
import { exploreMetadata } from "@/lib/metadata";

export const metadata: Metadata = exploreMetadata;

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
