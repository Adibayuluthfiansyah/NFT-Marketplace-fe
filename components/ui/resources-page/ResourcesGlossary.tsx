export function ResourcesGlossary() {
  const terms = [
    {
      term: "Blockchain",
      desc: "Buku besar digital terdesentralisasi yang mencatat transaksi di banyak komputer.",
    },
    {
      term: "Minting",
      desc: "Proses mengubah file digital menjadi aset crypto di blockchain.",
    },
    {
      term: "Royalti",
      desc: "Pembayaran yang didapat kreator setiap kali karya mereka dijual kembali.",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-white text-2xl font-bold mb-2">Glosarium Cepat</h2>
      <div className="flex flex-col gap-3 rounded-2xl bg-card-dark border border-border-dark p-6">
        {terms.map((item, i) => (
          <div
            key={i}
            className={`border-b border-border-dark pb-4 last:border-0 last:pb-0 ${
              i > 0 ? "pt-2" : ""
            }`}
          >
            <h5 className="text-white font-bold text-sm mb-1">{item.term}</h5>
            <p className="text-text-muted text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

        <div className="pt-4 mt-2">
          <button className="w-full py-2 rounded-lg border border-border-dark text-white text-sm font-medium hover:bg-border-dark/50 transition-colors">
            Lihat Glosarium Lengkap
          </button>
        </div>
      </div>
    </div>
  );
}
