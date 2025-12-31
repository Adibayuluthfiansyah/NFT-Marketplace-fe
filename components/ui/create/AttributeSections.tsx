"use client";

import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { AttributeSection } from "@/app/types/create";

interface AttributeSectionsProps {
  sections: AttributeSection[];
  onAdd: (type: AttributeSection["type"]) => void;
}

export function AttributeSections({ sections, onAdd }: AttributeSectionsProps) {
  return (
    <div className="space-y-3">
      {sections.map((section) => (
        <Card
          key={section.id}
          className="p-4 hover:bg-muted/50 transition-colors cursor-pointer group"
          onClick={() => onAdd(section.type)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <section.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {section.description}
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg border border-border group-hover:border-primary flex items-center justify-center transition-colors">
              <Plus className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
