"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { GuideItem } from "@/app/types/resources";

interface GuidesSectionProps {
  guides: GuideItem[];
  title?: string;
  description?: string;
}

export function GuidesSection({
  guides,
  title = "Popular Guides",
  description = "Step-by-step tutorials to help you get started",
}: GuidesSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Button variant="link" className="text-primary hover:text-primary/80">
          View all guides <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <a key={guide.id} href={guide.href} className="group">
            <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              {guide.imageUrl && (
                <div className="aspect-video w-full bg-muted overflow-hidden relative">
                  <Image
                    src={guide.imageUrl}
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-0"
                  >
                    {guide.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{guide.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {guide.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {guide.description}
                </p>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
