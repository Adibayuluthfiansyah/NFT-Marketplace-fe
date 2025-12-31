import { DM_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-slate-900 dark:text-foreground group"
    >
      <div className="relative w-10 h-10 shrink-0">
        <Image
          src="/logofix.png"
          alt="7ONG NFT Logo"
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-300"
          sizes="40px"
        />
      </div>
      <h2
        className={`${dmSans.className} text-2xl font-bold tracking-tighter leading-none mt-0.5`}
      >
        70NG
      </h2>
    </Link>
  );
}
