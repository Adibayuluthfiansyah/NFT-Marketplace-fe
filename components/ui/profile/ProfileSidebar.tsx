import { User, Heart, Grid, Settings, HelpCircle, Activity, Users, FileText, LucideIcon } from "lucide-react";

interface MenuItem {
  name: string;
  icon: LucideIcon;
  active?: boolean;
}

interface ProfileSidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

export function ProfileSidebar({ activeItem, onItemClick }: ProfileSidebarProps) {
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
    <div className="hidden lg:flex flex-col gap-8 px-2">
      <div className="flex flex-col gap-3">
        <h4 className="font-bold text-white px-3">My Account</h4>
        <nav className="flex flex-col gap-1">
          {accountItems.map((item) => (
            <a
              key={item.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onItemClick?.(item.name);
              }}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="font-bold text-white px-3">Resources</h4>
        <nav className="flex flex-col gap-1">
          {resourceItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
