"use client";

import { useState } from "react";
import { Menu, X, User, Heart, Grid, Settings, HelpCircle, Activity, Users, FileText, LucideIcon } from "lucide-react";

interface MenuItem {
  name: string;
  icon: LucideIcon;
  active?: boolean;
}

interface ProfileMobileMenuProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

export function ProfileMobileMenu({ activeItem, onItemClick }: ProfileMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const accountItems: MenuItem[] = [
    { name: "Profile", icon: User, active: activeItem === "Profile" },
    { name: "Favorites", icon: Heart, active: activeItem === "Favorites" },
    { name: "My Collections", icon: Grid, active: activeItem === "My Collections" },
    { name: "Settings", icon: Settings, active: activeItem === "Settings" },
  ];

  const resourceItems: MenuItem[] = [
    { name: "Help Center", icon: HelpCircle },
    { name: "Platform Status", icon: Activity },
    { name: "Partners", icon: Users },
    { name: "Blog", icon: FileText },
  ];

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile/tablet */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 rounded-full shadow-2xl shadow-primary/50 flex items-center justify-center text-white transition-all hover:scale-110"
        aria-label="Toggle account menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-dark border-t border-white/10 rounded-t-3xl transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {/* My Account Section */}
          <div className="mb-6">
            <h4 className="font-bold text-white text-lg mb-4">My Account</h4>
            <nav className="flex flex-col gap-2">
              {accountItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onItemClick?.(item.name);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
                    item.active
                      ? "bg-primary/10 text-primary"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Resources</h4>
            <nav className="flex flex-col gap-2">
              {resourceItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-left"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
