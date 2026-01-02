"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AttributeSection } from "@/app/types/create";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface AttributeSectionsProps {
  sections: AttributeSection[];
  onAdd: (type: AttributeSection["type"], value: string) => void;
}

export function AttributeSections({ sections, onAdd }: AttributeSectionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedType, setSelectedType] = useState<
    AttributeSection["type"] | null
  >(null);

  const handleCardClick = (type: AttributeSection["type"]) => {
    setSelectedType(type);
    setInputValue("");
    setIsOpen(true);
  };

  const handleConfirm = () => {
    if (selectedType && inputValue.trim() !== "") {
      onAdd(selectedType, inputValue);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleConfirm();
    }
  };

  return (
    <>
      <div className="space-y-3">
        {sections.map((section) => (
          <Card
            key={section.id}
            className="p-4 hover:bg-muted/50 transition-colors cursor-pointer group"
            onClick={() => handleCardClick(section.type)}
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="capitalize">
              Tambah {selectedType}
            </DialogTitle>
            <DialogDescription>
              Masukkan nama untuk {selectedType} baru Anda.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="prop-name">Nama</Label>
              <Input
                id="prop-name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Contoh: ${
                  selectedType === "properties" ? "Color" : "Speed"
                }`}
                autoFocus
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Batal
              </Button>
            </DialogClose>
            <Button type="submit" onClick={handleConfirm}>
              Simpan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
