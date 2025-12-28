"use client";

import { Tag } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface Trait {
  label: string;
  val: string;
  pct: string;
}

export function NFTProperties({ traits }: { traits: Trait[] }) {
  return (
    <Card className="bg-surface-dark/50 border-white/10 overflow-hidden">
      <Accordion type="single" collapsible defaultValue="properties">
        <AccordionItem value="properties" className="border-none">
          <AccordionTrigger className="px-5 py-4 hover:bg-white/5 transition-colors hover:no-underline">
            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5 text-gray-400" />
              <h3 className="font-bold text-lg text-white">Properties</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {traits.map((prop, i) => (
                <div
                  key={i}
                  className="bg-primary/5 border border-primary/20 rounded-xl p-3 text-center flex flex-col items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer group"
                >
                  <span className="text-[10px] text-primary uppercase font-bold tracking-wider mb-1">
                    {prop.label}
                  </span>
                  <span className="text-white font-medium text-sm mb-1">
                    {prop.val}
                  </span>
                  <span className="text-[10px] text-gray-500 group-hover:text-gray-400">
                    {prop.pct} have this
                  </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
