"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Share2, MoreHorizontal, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  name: string;
  address: string;
  bio: string;
  avatar: string;
  onFollow?: () => void;
  onShare?: () => void;
}

export function ProfileCard({
  name,
  address,
  bio,
  avatar,
  onFollow,
  onShare,
}: ProfileCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  return (
    <div className="bg-surface-dark border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
      <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-4 border-surface-dark mb-4 shadow-lg">
        <Image
          src={avatar}
          alt={`${name}'s profile avatar`}
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
      </div>

      <h2 className="text-2xl font-bold text-white mb-1">{name}</h2>
      <div 
        onClick={handleCopyAddress}
        className="flex items-center gap-2 text-primary text-sm font-bold mb-6 cursor-pointer hover:underline group"
        role="button"
        aria-label="Copy wallet address"
        tabIndex={0}
      >
        <span>{address}</span>
        {copied ? (
          <Check className="w-3 h-3 text-green-400" />
        ) : (
          <Copy className="w-3 h-3 group-hover:scale-110 transition-transform" />
        )}
      </div>

      {copied && (
        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full animate-fade-in">
          Address copied!
        </div>
      )}

      <p className="text-gray-400 text-sm leading-relaxed mb-6">{bio}</p>

      <div className="flex gap-3">
        <Button
          onClick={onFollow}
          className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl h-12 shadow-lg shadow-primary/20"
        >
          Follow
        </Button>
        <button
          onClick={onShare}
          className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
          aria-label="Share profile"
        >
          <Share2 className="w-4 h-4" />
        </button>
        <button 
          className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
          aria-label="More options"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
