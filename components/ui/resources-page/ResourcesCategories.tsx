import { Rocket, ShoppingCart, Tag, Palette } from "lucide-react";

export function ResourcesCategories() {
  const categories = [
    {
      icon: Rocket,
      title: "Memulai",
      desc: "Panduan dasar untuk pemula yang baru mengenal NFT.",
      color: "text-primary",
      bg: "bg-primary/20",
    },
    {
      icon: ShoppingCart,
      title: "Membeli",
      desc: "Cara menyiapkan dompet dan membeli NFT pertama Anda.",
      color: "text-blue-400",
      bg: "bg-blue-500/20",
    },
    {
      icon: Tag,
      title: "Menjual",
      desc: "Listing, lelang, dan strategi penjualan aset digital.",
      color: "text-green-400",
      bg: "bg-green-500/20",
    },
    {
      icon: Palette,
      title: "Membuat",
      desc: "Minting karya seni Anda dan pengaturan royalti.",
      color: "text-pink-400",
      bg: "bg-pink-500/20",
    },
  ];

  return (
    <div>
      <h2 className="text-white text-2xl font-bold leading-tight text-center mb-8">
        Jelajahi Berdasarkan Topik
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <a
            key={cat.title}
            href="#"
            className="group flex flex-col gap-4 rounded-xl border border-border-dark bg-card-dark p-6 hover:border-primary/50 hover:bg-card-dark/80 transition-all cursor-pointer"
          >
            <div
              className={`size-12 rounded-full ${cat.bg} ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
            >
              <cat.icon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-1">{cat.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {cat.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
