import { FileText, ChevronRight } from "lucide-react";

export function ResourcesGuides() {
  const articles = [
    {
      title: "Apa itu Gas Fee dan mengapa saya harus membayarnya?",
      cat: "Blockchain",
      time: "5 menit baca",
    },
    {
      title: "Cara mengamankan dompet crypto Anda dari phishing",
      cat: "Keamanan",
      time: "7 menit baca",
    },
    {
      title: "Panduan langkah demi langkah Minting NFT pertama",
      cat: "Membuat",
      time: "10 menit baca",
    },
    {
      title: "Memahami berbagai jenis lelang di NFT Mini",
      cat: "Menjual",
      time: "4 menit baca",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-white text-2xl font-bold">Panduan Populer</h2>
        <a href="#" className="text-primary text-sm font-bold hover:underline">
          Lihat Semua
        </a>
      </div>

      <div className="flex flex-col gap-3">
        {articles.map((article, i) => (
          <a
            key={i}
            href="#"
            className="flex items-center gap-4 p-4 rounded-xl bg-card-dark border border-border-dark hover:border-primary/40 transition-colors group"
          >
            <div className="text-text-muted group-hover:text-primary transition-colors">
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-medium group-hover:text-primary transition-colors text-sm md:text-base">
                {article.title}
              </h4>
              <p className="text-text-muted text-xs mt-1">
                {article.cat} • {article.time}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-text-muted" />
          </a>
        ))}
      </div>
    </div>
  );
}
