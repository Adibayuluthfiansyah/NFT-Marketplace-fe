"use client";

import { useState } from "react";
import Image from "next/image";
import { CloudUpload, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
  preview: string | null;
}

export function FileUpload({ onFileChange, preview }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);

  const validateFile = (file: File): boolean => {
    // Validate file size (100MB = 100 * 1024 * 1024 bytes)
    const maxSize = 100 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error("File size exceeds 100MB limit");
      return false;
    }
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file)) {
      onFileChange(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && validateFile(file)) {
      onFileChange(file);
    }
  };

  const handleRemove = () => {
    onFileChange(null);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-base font-semibold text-foreground">
          Image, Video, Audio, or 3D Model{" "}
          <span className="text-destructive">*</span>
        </label>
        {preview && (
          <button
            type="button"
            onClick={handleRemove}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Remove
          </button>
        )}
      </div>
      <p className="text-sm text-muted-foreground">
        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV. Max
        size: 100 MB
      </p>

      <Card
        className={`relative overflow-hidden border-2 border-dashed transition-colors ${
          dragActive
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary/50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center min-h-[320px] cursor-pointer p-6"
        >
          {preview ? (
            <div className="relative w-full h-full min-h-[320px]">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center text-center">
              <CloudUpload className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-sm font-medium text-foreground mb-2">
                <span className="text-primary">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-muted-foreground">
                Maximum file size: 100MB
              </p>
            </div>
          )}
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/*,video/*,audio/*,.glb,.gltf"
            onChange={handleFileChange}
          />
        </label>
      </Card>
    </div>
  );
}
