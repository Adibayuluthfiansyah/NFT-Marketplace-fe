interface ProfileTab {
  name: string;
  value: string;
  count?: number;
}

interface ProfileTabsProps {
  tabs: ProfileTab[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function ProfileTabs({ tabs, activeTab, onTabChange }: ProfileTabsProps) {
  return (
    <div className="flex overflow-x-auto items-center gap-2 mb-8 border-b border-white/10 pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;
        return (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={`px-6 py-3 rounded-t-lg text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
              isActive
                ? "border-primary text-white bg-white/5"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            {tab.name}{" "}
            {tab.count !== undefined && (
              <span className="ml-1 text-xs opacity-50 font-normal">
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
