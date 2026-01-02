import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { Footer } from "@/components/ui/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { defaultMetadata } from "@/lib/metadata";
import { Providers } from "./provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
          <Footer />
          <Toaster position="top-right" theme="dark" richColors />
        </Providers>
      </body>
    </html>
  );
}
