import { Search } from "lucide-react";

export function ResourcesHero() {
  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat min-h-100 flex flex-col items-center justify-center p-6 gap-8 border border-border-dark shadow-2xl bg-gradient-to-b from-background-dark/70 to-background-dark/90"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232')`,
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="flex flex-col gap-3 text-center max-w-2xl z-10">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2">
            Pusat Bantuan
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            Bagaimana kami bisa membantu?
          </h1>
          <p className="text-gray-300 text-base md:text-lg mt-2">
            Temukan panduan, tutorial, dan jawaban atas pertanyaan seputar dunia
            NFT.
          </p>
        </div>

        <div className="w-full max-w-140 z-10">
          <div className="relative flex items-center w-full h-14 rounded-full bg-background-dark/80 backdrop-blur-md border border-border-dark focus-within:border-primary transition-all shadow-lg group">
            <div className="pl-5 pr-3 text-text-muted group-focus-within:text-primary transition-colors">
              <Search className="w-6 h-6" />
            </div>
            <input
              className="w-full bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 text-base h-full outline-none"
              placeholder="Cari artikel, topik, atau istilah (mis: Gas Fee)..."
              type="text"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary/90 text-white rounded-full px-6 text-sm font-bold transition-transform active:scale-95">
              Cari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
