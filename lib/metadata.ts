import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://70ng-market.com";

// Default metadata
export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "70NG Market - Platform NFT Terpercaya Indonesia",
    template: "%s | 70NG Market",
  },
  description:
    "Marketplace NFT dengan visual 3D yang imersif. Jual beli NFT dengan mudah, transaksi cepat, dan komunitas aktif. Platform NFT terpercaya di Indonesia.",
  keywords: [
    "NFT",
    "NFT Indonesia",
    "marketplace NFT",
    "jual beli NFT",
    "crypto art",
    "digital collectibles",
    "blockchain",
    "ethereum",
    "NFT marketplace",
    "70NG Market",
  ],
  authors: [{ name: "70NG Market Team" }],
  creator: "70NG Market",
  publisher: "70NG Market",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    title: "70NG Market - Platform NFT Terpercaya Indonesia",
    description:
      "Marketplace NFT dengan visual 3D yang imersif. Jual beli NFT dengan mudah, transaksi cepat, dan komunitas aktif.",
    siteName: "70NG Market",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "70NG Market - NFT Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "70NG Market - Platform NFT Terpercaya Indonesia",
    description:
      "Marketplace NFT dengan visual 3D yang imersif. Jual beli NFT dengan mudah, transaksi cepat, dan komunitas aktif.",
    images: [`${baseUrl}/og-image.jpg`],
    creator: "@70NGMarket",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// Page-specific metadata generators
export const exploreMetadata: Metadata = {
  title: "Jelajahi NFT",
  description:
    "Jelajahi ribuan koleksi NFT unik dari kreator di seluruh dunia. Temukan, beli, dan koleksi NFT favorit Anda.",
  openGraph: {
    title: "Jelajahi NFT | 70NG Market",
    description:
      "Jelajahi ribuan koleksi NFT unik dari kreator di seluruh dunia. Temukan, beli, dan koleksi NFT favorit Anda.",
  },
};

export const createMetadata: Metadata = {
  title: "Buat NFT",
  description:
    "Mint dan jual NFT Anda sendiri dengan mudah. Upload karya, set harga, dan mulai hasilkan income dari seni digital Anda.",
  openGraph: {
    title: "Buat NFT | 70NG Market",
    description:
      "Mint dan jual NFT Anda sendiri dengan mudah. Upload karya, set harga, dan mulai hasilkan income dari seni digital Anda.",
  },
};

export const profileMetadata: Metadata = {
  title: "Profil",
  description: "Kelola koleksi NFT Anda, lihat statistik, dan atur profil kreator Anda.",
  openGraph: {
    title: "Profil | 70NG Market",
    description: "Kelola koleksi NFT Anda, lihat statistik, dan atur profil kreator Anda.",
  },
};

export const walletMetadata: Metadata = {
  title: "Dompet",
  description:
    "Kelola aset kripto Anda, lihat riwayat transaksi, dan pantau portofolio NFT Anda.",
  openGraph: {
    title: "Dompet | 70NG Market",
    description:
      "Kelola aset kripto Anda, lihat riwayat transaksi, dan pantau portofolio NFT Anda.",
  },
};

export const statsMetadata: Metadata = {
  title: "Statistik",
  description:
    "Lihat data dan tren pasar NFT terkini. Analisis volume perdagangan, harga, dan popularitas koleksi.",
  openGraph: {
    title: "Statistik | 70NG Market",
    description:
      "Lihat data dan tren pasar NFT terkini. Analisis volume perdagangan, harga, dan popularitas koleksi.",
  },
};

export const resourcesMetadata: Metadata = {
  title: "Sumber Daya",
  description:
    "Pelajari tentang NFT, blockchain, dan cara menggunakan platform 70NG Market. Panduan lengkap untuk pemula.",
  openGraph: {
    title: "Sumber Daya | 70NG Market",
    description:
      "Pelajari tentang NFT, blockchain, dan cara menggunakan platform 70NG Market. Panduan lengkap untuk pemula.",
  },
};

// NFT Detail metadata generator (dynamic)
export function generateNFTMetadata(nft: {
  name: string;
  description: string;
  image: string;
  creator: string;
  price: string;
}): Metadata {
  return {
    title: nft.name,
    description: nft.description,
    openGraph: {
      title: `${nft.name} | 70NG Market`,
      description: nft.description,
      images: [
        {
          url: nft.image,
          width: 1200,
          height: 1200,
          alt: nft.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: nft.name,
      description: nft.description,
      images: [nft.image],
    },
  };
}
