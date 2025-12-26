import { ExternalLink } from "lucide-react";
import Image from "next/image";
export function NFTImage({ image }: { image: string }) {
  return (
    <div className="w-full relative group">
      {/* Efek Glow Belakang */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

      {/* Container Gambar */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-dark border border-white/10 shadow-2xl">
        <div className="absolute top-4 right-4 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="size-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
        <Image
          src={image}
          alt="NFT Detail"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
