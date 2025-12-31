"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/app/types/resources";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
}

interface FAQItemComponentProps {
  faq: FAQItem;
}

function FAQItemComponent({ faq }: FAQItemComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="overflow-hidden bg-card border-border">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {faq.question}
            </h3>
            {isOpen && (
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
          <ChevronDown
            className={cn(
              "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 mt-1",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </button>
    </Card>
  );
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our platform",
}: FAQSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(faqs.map((faq) => faq.category)))];
  
  const filteredFAQs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "capitalize",
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "border-border hover:border-primary hover:text-primary"
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="space-y-3">
        {filteredFAQs.map((faq) => (
          <FAQItemComponent key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
}
