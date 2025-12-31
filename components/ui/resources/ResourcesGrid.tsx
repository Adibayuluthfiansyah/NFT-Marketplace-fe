"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { ResourceSection } from "@/app/types/resources";
import { cn } from "@/lib/utils";

interface ResourcesGridProps {
  sections: ResourceSection[];
}

export function ResourcesGrid({ sections }: ResourcesGridProps) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.id} className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">{section.title}</h2>
            <p className="text-muted-foreground">{section.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.cards.map((card) => {
              const Icon = card.icon;
              
              return (
                <a
                  key={card.id}
                  href={card.href}
                  className="group"
                >
                  <Card className="h-full p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground flex-1">
                        {card.description}
                      </p>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
