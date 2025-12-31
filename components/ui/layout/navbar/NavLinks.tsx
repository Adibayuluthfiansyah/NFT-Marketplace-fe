import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  const links = [
    { name: "Explore", href: "/explore" },
    { name: "Stats", href: "/stats" },
    { name: "Resources", href: "/resources" },
    { name: "Create", href: "/create" },
  ];

  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm font-bold transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
