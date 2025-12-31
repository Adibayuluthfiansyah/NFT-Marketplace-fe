import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <Tabs value={activeTab} onValueChange={onTabChange} className="mb-8">
      <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-auto p-0 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="px-6 py-3 rounded-t-lg text-sm font-bold whitespace-nowrap data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-muted/50 data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground border-b-2 data-[state=active]:border-b-primary data-[state=inactive]:border-transparent rounded-b-none"
          >
            {tab.name}{" "}
            {tab.count !== undefined && (
              <span className="ml-1 text-xs opacity-50 font-normal">
                {tab.count}
              </span>
            )}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
