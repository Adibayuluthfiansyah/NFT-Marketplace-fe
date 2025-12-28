import { Metadata } from "next";
import { resourcesMetadata } from "@/lib/metadata";

export const metadata: Metadata = resourcesMetadata;

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
