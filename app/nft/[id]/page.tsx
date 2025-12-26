"use client";

import { use } from "react";
import { Navbar } from "@/components/ui/layout/Navbar";
import { FileText, Link } from "lucide-react";
import { NFTImage } from "@/components/ui/nft/NFTImage";
import { NFTProperties } from "@/components/ui/nft/NFTProperties";
import { NFTHeader } from "@/components/ui/nft/NFTHeader";
import { NFTActionCard } from "@/components/ui/nft/NFTActionCard";
import { NFTPriceHistory } from "@/components/ui/nft/NFTPriceHistory";
import { MoreCollection } from "@/components/ui/nft/MoreCollection";

export default function NFTDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 3. GUNAKAN 'use()' UNTUK BUKA PARAMS
  const resolvedParams = use(params);
  const id = resolvedParams.id || "9999";

  const traits = [
    { label: "Type", val: "Human", pct: "12%" },
    { label: "Hair", val: "Pink", pct: "3%" },
    { label: "Clothing", val: "Kimono", pct: "5%" },
    { label: "Eyes", val: "Determined", pct: "8%" },
    { label: "Mouth", val: "Smirk", pct: "14%" },
    { label: "Background", val: "Off White A", pct: "18%" },
  ];

  return (
    <main className="min-h-screen bg-background-dark text-white font-display pb-12">
      <Navbar />

      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-10 py-8">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
          <Link href="/">Home</Link>
          Home
          <span className="text-gray-500">/</span>
          <a
            href="#"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            Collections
          </a>
          <span className="text-gray-500">/</span>
          <span className="text-white font-medium">Azuki</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            {/* Kirim URL gambar ke komponen */}
            <NFTImage image="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974" />

            <div className="bg-surface-dark/50 rounded-2xl border border-white/10 overflow-hidden">
              <div className="px-5 py-4 flex items-center gap-3 border-b border-white/10 bg-white/5">
                <FileText className="w-5 h-5 text-gray-400" />
                <h3 className="font-bold text-lg text-white">Description</h3>
              </div>
              <div className="p-5 text-gray-300 leading-relaxed text-sm">
                <p>
                  Azuki starts with a collection of 10,000 avatars that give you
                  membership access to The Garden.
                </p>
              </div>
            </div>

            <NFTProperties traits={traits} />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            <NFTHeader id={id} />
            <NFTActionCard />
            <NFTPriceHistory />
          </div>
        </div>
        <MoreCollection />
      </div>
    </main>
  );
}
