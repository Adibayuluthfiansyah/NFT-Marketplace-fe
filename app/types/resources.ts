import { LucideIcon } from "lucide-react";

export interface ResourceCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  category: ResourceCategory;
}

export type ResourceCategory = "learn" | "build" | "support" | "community";

export interface ResourceSection {
  id: string;
  title: string;
  description: string;
  cards: ResourceCard[];
}

export interface GuideItem {
  id: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  href: string;
  imageUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuickLink {
  id: string;
  label: string;
  href: string;
  icon?: LucideIcon;
}
