import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import { Footer } from "@/components/ui/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { defaultMetadata } from "@/lib/metadata";
import "./globals.css";

// Setup Font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
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
        className={`${spaceGrotesk.variable} ${notoSans.variable} font-display bg-background-dark text-white min-h-screen flex flex-col`}
      >
        {children}
        <Footer />
        <Toaster position="top-right" theme="dark" richColors />
      </body>
    </html>
  );
}
