"use client";

import { NavLogo } from "./navbar/NavLogo";
import { NavSearch } from "./navbar/NavSearch";
import { NavLinks } from "./navbar/NavLinks";
import { NavActions } from "./navbar/NavActions";
import { NavMobileMenu } from "./navbar/NavMobileMenu";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border px-6 py-4 bg-background/80 backdrop-blur-md transition-all">
      <NavLogo />

      {/* Search Bar ditaruh di antara logo dan menu */}
      <NavSearch />

      <div className="flex items-center gap-4">
        <NavLinks />
        <NavActions />
        <NavMobileMenu />
      </div>
    </nav>
  );
}
