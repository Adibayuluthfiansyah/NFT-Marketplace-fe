import { Headphones, MessageCircle, MessageSquare, Globe } from "lucide-react";

export function ResourcesSupport() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 border border-border-dark p-8 md:p-12 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <Headphones className="w-64 h-64 text-white" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Butuh bantuan lebih lanjut?
        </h2>
        <p className="text-text-muted max-w-xl text-lg">
          Jika Anda tidak dapat menemukan jawaban yang Anda cari, tim dukungan
          kami dan komunitas siap membantu Anda 24/7.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-bold transition-transform hover:scale-105">
            <MessageCircle className="w-5 h-5" />
            Hubungi Dukungan
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[rgb(var(--discord))] hover:bg-[rgb(var(--discord-hover))] text-white font-bold transition-transform hover:scale-105">
            <MessageSquare className="w-5 h-5" />
            Gabung Discord
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[rgb(var(--twitter))] hover:bg-[rgb(var(--twitter-hover))] text-white font-bold transition-transform hover:scale-105">
            <Globe className="w-5 h-5" />
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
}
