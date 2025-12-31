import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge?: {
    icon: LucideIcon;
    text: string;
  };
  title: string;
  highlight?: string;
  description: string;
  alignment?: "left" | "center";
}

export function SectionHeader({ 
  badge, 
  title, 
  highlight, 
  description,
  alignment = "center" 
}: SectionHeaderProps) {
  const alignmentClasses = alignment === "center" ? "text-center items-center" : "text-left items-start";
  
  return (
    <div className={`flex flex-col ${alignmentClasses} gap-4 mb-12`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          <badge.icon className="w-3 h-3" />
          {badge.text}
        </div>
      )}
      
      <h2 className="text-5xl md:text-6xl font-black">
        {title}{" "}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      
      <p className={`text-muted-foreground text-lg ${alignment === "center" ? "max-w-2xl" : ""}`}>
        {description}
      </p>
    </div>
  );
}
