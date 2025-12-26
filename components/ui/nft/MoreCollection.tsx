import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";

export function MoreCollection() {
  const items = [1, 2, 3, 4, 5];

  return (
    <div className="mt-16 mb-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-white">
          More from this collection
        </h3>
        <a href="#" className="text-primary font-bold hover:underline">
          View collection
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {items.map((item) => (
          <Link key={item} href={`/nft/${1000 + item}`}>
            <div className="bg-surface-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer shadow-lg h-full">
              {/* Gambar NFT */}
              <div className="aspect-square bg-gray-800 overflow-hidden relative">
                <Image
                  src={`https://images.unsplash.com/photo-${
                    item === 1
                      ? "1633101585299-90c749b5ee94"
                      : item === 2
                      ? "1642543492481-44e81e3914a7"
                      : "1618005182384-a83a8bd57fbe"
                  }?w=500&q=80`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="NFT"
                  width={500}
                  height={500}
                />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md rounded-full px-2 py-1 text-white text-[10px] font-bold flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-white" /> 24
                </div>
              </div>

              {/* Info Bawah */}
              <div className="p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sm text-white">
                    Azuki #{1000 + item}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    #{1000 + item}
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-2 flex justify-between items-center group-hover:bg-primary/10 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">
                      Price
                    </span>
                    <span className="text-sm font-bold text-white">
                      3.{9 - item} ETH
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">Last: 3.5</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
