"use client";

import { Navbar } from "@/components/ui/layout/Navbar";
import { ResourcesHero } from "@/components/ui/resources-page/ResourcesHero";
import { ResourcesCategories } from "@/components/ui/resources-page/ResourcesCategories";
import { ResourcesGuides } from "@/components/ui/resources-page/ResourcesGuides";
import { ResourcesGlossary } from "@/components/ui/resources-page/ResourcesGlossary";
import { ResourcesSupport } from "@/components/ui/resources-page/ResourcesSupport";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background-dark font-display text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center py-8 px-4 md:px-10 lg:px-40">
        <div className="w-full max-w-5xl flex flex-col gap-12">
          <ResourcesHero />

          <ResourcesCategories />

          {/* Split Content: Guides (Kiri) & Glossary (Kanan) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-8">
            <div className="lg:col-span-7">
              <ResourcesGuides />
            </div>
            <div className="lg:col-span-5">
              <ResourcesGlossary />
            </div>
          </div>

          <ResourcesSupport />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-dark bg-background-dark py-10 px-6 lg:px-40 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <span className="font-bold text-lg">NFT Mini</span>
          </div>
          <div className="flex gap-6 text-sm text-text-muted">
            <a href="#" className="hover:text-white transition-colors">
              Tentang Kami
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Karir
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
          <div className="text-xs text-text-muted">
            © 2025 NFT Mini. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
