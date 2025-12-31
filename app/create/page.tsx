"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/layout/Navbar";
import { FileUpload } from "@/components/ui/create/FileUpload";
import { CreateFormFields } from "@/components/ui/create/CreateFormFields";
import { AttributeSections } from "@/components/ui/create/AttributeSections";
import { NFTPreview } from "@/components/ui/create/NFTPreview";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info, List, Star, BarChart3 } from "lucide-react";
import { NFTFormData, AttributeSection, CollectionOption } from "@/app/types/create";

export default function CreateNFTPage() {
  const [formData, setFormData] = useState<Partial<NFTFormData>>({
    name: "",
    externalLink: "",
    description: "",
    collection: "",
    category: "Art",
    supply: 1,
    blockchain: "ethereum",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (file: File | null) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      setFormData((prev) => ({ ...prev, file }));
    } else {
      setImagePreview(null);
      setFormData((prev) => ({ ...prev, file: undefined }));
    }
  };

  const handleInputChange = (field: keyof NFTFormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCategorySelect = (category: string) => {
    setFormData((prev) => ({ ...prev, category }));
  };

  const handleAttributeAdd = (type: AttributeSection["type"]) => {
    // TODO: Open modal to add attribute
    console.log("Add attribute:", type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement minting logic
    console.log("Form data:", formData);
  };

  const collections: CollectionOption[] = [
    { id: "1", name: "My Collection 1" },
    { id: "2", name: "My Collection 2" },
  ];

  const categories = ["Art", "Collectibles", "Music", "Photography", "Sports"];

  const attributeSections: AttributeSection[] = [
    {
      id: "1",
      title: "Properties",
      description: "Textual traits that show up as rectangles",
      icon: List,
      type: "properties",
    },
    {
      id: "2",
      title: "Levels",
      description: "Numerical traits that show as a progress bar",
      icon: Star,
      type: "levels",
    },
    {
      id: "3",
      title: "Stats",
      description: "Numerical traits that just show as numbers",
      icon: BarChart3,
      type: "stats",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Form */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Create New Item
                  </h1>
                  <p className="text-muted-foreground">
                    <span className="text-destructive">*</span> Required fields
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* File Upload */}
                  <FileUpload
                    onFileChange={handleFileChange}
                    preview={imagePreview}
                  />

                  {/* Form Fields */}
                  <CreateFormFields
                    formData={formData}
                    collections={collections}
                    categories={categories}
                    selectedCategory={formData.category || "Art"}
                    onInputChange={handleInputChange}
                    onCategorySelect={handleCategorySelect}
                  />

                  <div className="border-t border-border my-6" />

                  {/* Attributes */}
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-foreground">
                      Additional Options
                    </h3>
                    <AttributeSections
                      sections={attributeSections}
                      onAdd={handleAttributeAdd}
                    />
                  </div>

                  <div className="border-t border-border my-6" />

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>
                        Gas fees are required to process your transaction
                      </span>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                    >
                      Create
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Preview */}
            <div className="lg:col-span-5 xl:col-span-4 hidden lg:block">
              <NFTPreview
                name={formData.name || ""}
                imagePreview={imagePreview}
                collection={formData.collection || "Untitled Collection"}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
