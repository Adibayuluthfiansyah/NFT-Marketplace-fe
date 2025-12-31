"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { NFTFormData, CollectionOption } from "@/app/types/create";

interface CreateFormFieldsProps {
  formData: Partial<NFTFormData>;
  collections: CollectionOption[];
  categories: string[];
  selectedCategory: string;
  onInputChange: (field: keyof NFTFormData, value: string | number) => void;
  onCategorySelect: (category: string) => void;
}

export function CreateFormFields({
  formData,
  collections,
  categories,
  selectedCategory,
  onInputChange,
  onCategorySelect,
}: CreateFormFieldsProps) {
  return (
    <div className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-base font-semibold">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Item name"
          value={formData.name || ""}
          onChange={(e) => onInputChange("name", e.target.value)}
          className="bg-card border-border"
        />
      </div>

      {/* External Link */}
      <div className="space-y-2">
        <Label htmlFor="external-link" className="text-base font-semibold">
          External link
        </Label>
        <p className="text-sm text-muted-foreground">
          We will include a link to this URL on this items detail page
        </p>
        <Input
          id="external-link"
          type="url"
          placeholder="https://yoursite.io/item/123"
          value={formData.externalLink || ""}
          onChange={(e) => onInputChange("externalLink", e.target.value)}
          className="bg-card border-border"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-base font-semibold">
          Description
        </Label>
        <p className="text-sm text-muted-foreground">
          The description will be included on the items detail page
        </p>
        <Textarea
          id="description"
          rows={4}
          placeholder="Provide a detailed description of your item"
          value={formData.description || ""}
          onChange={(e) => onInputChange("description", e.target.value)}
          className="bg-card border-border resize-none"
        />
      </div>

      {/* Collection */}
      <div className="space-y-2">
        <Label htmlFor="collection" className="text-base font-semibold">
          Collection
        </Label>
        <p className="text-sm text-muted-foreground">
          This is the collection where your item will appear
        </p>
        <Select
          value={formData.collection}
          onValueChange={(value) => onInputChange("collection", value)}
        >
          <SelectTrigger className="bg-card border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Plus className="text-primary w-4 h-4" />
              </div>
              <SelectValue placeholder="Create a new collection" />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="new">Create a new collection</SelectItem>
            {collections.map((collection) => (
              <SelectItem key={collection.id} value={collection.id}>
                {collection.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <Label className="text-base font-semibold">Category</Label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              type="button"
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategorySelect(category)}
              className={
                selectedCategory === category
                  ? "rounded-full bg-primary hover:bg-primary/90"
                  : "rounded-full border-border hover:border-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="border-t border-border my-6" />

      {/* Supply & Blockchain */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="supply" className="text-base font-semibold">
            Supply
          </Label>
          <p className="text-sm text-muted-foreground">
            The number of items that can be minted
          </p>
          <Input
            id="supply"
            type="number"
            min="1"
            value={formData.supply || 1}
            onChange={(e) => onInputChange("supply", parseInt(e.target.value))}
            className="bg-card border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="blockchain" className="text-base font-semibold">
            Blockchain
          </Label>
          <p className="text-sm text-muted-foreground">
            Select the blockchain
          </p>
          <Select
            value={formData.blockchain}
            onValueChange={(value) => onInputChange("blockchain", value)}
            defaultValue="ethereum"
          >
            <SelectTrigger className="bg-card border-border">
              <SelectValue placeholder="Select blockchain" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="ethereum">Ethereum</SelectItem>
              <SelectItem value="polygon">Polygon</SelectItem>
              <SelectItem value="solana">Solana</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
