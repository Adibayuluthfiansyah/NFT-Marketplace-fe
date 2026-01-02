"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { MoreHorizontal, ImageIcon } from "lucide-react";

interface NFTPreviewProps {
  name: string;
  imagePreview: string | null;
  collection?: string;
  price?: string;
}

export function NFTPreview({
  name,
  imagePreview,
  collection = "Untitled Collection",
  price,
}: NFTPreviewProps) {
  return (
    <div className="sticky top-28 space-y-4">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        Preview
      </h3>

      <Card className="overflow-hidden">
        {/* Image */}
        <div className="aspect-square w-full bg-muted flex items-center justify-center overflow-hidden">
          {imagePreview ? (
            <Image
              src={imagePreview}
              alt="Preview"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center p-8">
              <ImageIcon className="w-16 h-16 text-muted-foreground/30 mb-2 mx-auto" />
              <p className="text-sm text-muted-foreground">
                Upload file to preview your item
              </p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5 space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                {collection}
              </p>
              <h3 className="text-xl font-bold text-foreground truncate">
                {name || "Untitled"}
              </h3>
            </div>
            <button
              type="button"
              className="flex-shrink-0 w-8 h-8 rounded-full border border-border hover:border-foreground text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center ml-3"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary" />
            <p className="text-sm text-muted-foreground">
              Created by{" "}
              <span className="text-foreground font-medium">you</span>
            </p>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground mb-1">Price</p>
            <p className="text-2xl font-bold text-foreground">
              {price ? `${price} ETH` : "--"}
            </p>
          </div>
        </div>
      </Card>

      {/* Info Box */}
      <Card className="p-4 bg-primary/5 border-primary/20">
        <p className="text-sm text-foreground">
          <span className="font-semibold">Note:</span> Once minted, some
          properties like name and supply cannot be changed.
        </p>
      </Card>
    </div>
  );
}
