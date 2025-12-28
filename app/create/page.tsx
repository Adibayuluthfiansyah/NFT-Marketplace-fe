"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/layout/Navbar";
import { Footer } from "@/components/ui/layout/Footer";
import {
  CloudUpload,
  Plus,
  ChevronDown,
  Info,
  ArrowRight,
  Image as ImageIcon,
  MoreHorizontal,
  Sparkles,
  List,
  Star,
  BarChart3,
  Bitcoin,
} from "lucide-react";

export default function CreateNFTPage() {
  // State untuk Live Preview
  const [name, setName] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Fungsi handle upload gambar (untuk preview)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white flex flex-col">
      <Navbar />

      <main className="grow flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* --- LEFT COLUMN: FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 xl:col-span-8 flex flex-col gap-10"
          >
            {/* Heading */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col gap-2"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Create New NFT
              </h1>
              <p className="text-text-secondary text-lg">
                Once your item is minted you will not be able to change its
                name.
              </p>
            </motion.div>

            {/* Upload Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <label className="text-lg font-bold">
                Image, Video, Audio, or 3D Model{" "}
                <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-text-secondary -mt-3 mb-1">
                File types supported: JPG, PNG, GIF, SVG, MP4. Max size: 100 MB
              </p>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="group relative flex flex-col items-center justify-center w-full h-80 rounded-xl border-2 border-dashed border-border-dark bg-surface-dark hover:bg-surface-darker hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
              >
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-contain"
                    width={500}
                    height={500}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <CloudUpload className="w-16 h-16 text-text-secondary mb-4 group-hover:text-white transition-colors" />
                    </motion.div>
                    <p className="mb-2 text-sm text-text-secondary group-hover:text-white transition-colors">
                      <span className="font-bold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p className="text-xs text-text-secondary">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                )}
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
                {/* Overlay agar bisa klik ganti gambar */}
                <label
                  htmlFor="dropzone-file"
                  className="absolute inset-0 cursor-pointer"
                ></label>
              </motion.div>
            </motion.div>

            {/* Form Fields */}
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-8"
            >
              {/* Name */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex flex-col gap-3"
              >
                <label className="text-lg font-bold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Item name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface-dark border border-border-dark rounded-xl px-4 py-3 text-white placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                />
              </motion.div>

              {/* External Link */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.45 }}
                className="flex flex-col gap-3"
              >
                <label className="text-lg font-bold">External link</label>
                <p className="text-sm text-text-secondary -mt-2">
                  OpenSea will include a link to this URL on this items detail
                  page.
                </p>
                <input
                  type="url"
                  placeholder="https://yoursite.io/item/123"
                  className="w-full bg-surface-dark border border-border-dark rounded-xl px-4 py-3 text-white placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                />
              </motion.div>

              {/* Description */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex flex-col gap-3"
              >
                <label className="text-lg font-bold">Description</label>
                <p className="text-sm text-text-secondary -mt-2">
                  The description will be included on the items detail page.
                </p>
                <textarea
                  rows={4}
                  placeholder="Provide a detailed description of your item."
                  className="w-full bg-surface-dark border border-border-dark rounded-xl px-4 py-3 text-white placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                ></textarea>
              </motion.div>

              {/* Collection */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.55 }}
                className="flex flex-col gap-3"
              >
                <label className="text-lg font-bold">Collection</label>
                <p className="text-sm text-text-secondary -mt-2">
                  This is the collection where your item will appear.
                </p>
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full bg-surface-dark border border-border-dark rounded-xl px-4 py-3 text-left focus:ring-2 focus:ring-primary transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Plus className="text-primary w-4 h-4" />
                      </div>
                      <span className="font-medium">
                        Create a new collection
                      </span>
                    </div>
                    <ChevronDown className="text-text-secondary w-5 h-5" />
                  </button>
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="flex flex-col gap-3"
              >
                <label className="text-lg font-bold">Category</label>
                <div className="flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="px-5 py-2 rounded-full bg-primary text-white font-medium text-sm transition-transform"
                  >
                    Art
                  </motion.button>
                  {["Collectibles", "Music", "Photography", "Sports"].map(
                    (cat) => (
                      <motion.button
                        key={cat}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        className="px-5 py-2 rounded-full bg-surface-dark border border-border-dark text-text-secondary hover:text-white hover:border-white font-medium text-sm transition-all"
                      >
                        {cat}
                      </motion.button>
                    )
                  )}
                </div>
              </motion.div>

              <div className="h-px bg-border-dark my-2"></div>

              {/* Traits / Properties */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.65 }}
                className="flex flex-col gap-4"
              >
                {[
                  {
                    icon: List,
                    title: "Properties",
                    desc: "Textual traits that show up as rectangles",
                  },
                  {
                    icon: Star,
                    title: "Levels",
                    desc: "Numerical traits that show as a progress bar",
                  },
                  {
                    icon: BarChart3,
                    title: "Stats",
                    desc: "Numerical traits that just show as numbers",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-surface-dark/50 hover:bg-surface-dark transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className="text-primary w-6 h-6" />
                      <div>
                        <h3 className="font-bold text-white">{item.title}</h3>
                        <p className="text-sm text-text-secondary">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <motion.div 
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 flex items-center justify-center rounded-lg border border-border-dark group-hover:border-white transition-colors"
                    >
                      <Plus className="text-white w-5 h-5" />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="h-px bg-border-dark my-2"></div>

              {/* Supply & Blockchain */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.85 }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-3">
                  <label className="text-lg font-bold">Supply</label>
                  <p className="text-sm text-text-secondary -mt-2">
                    The number of items that can be minted. No gas cost to you!
                  </p>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-full bg-surface-dark border border-border-dark rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary transition-all outline-none"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-lg font-bold">Blockchain</label>
                  <div className="relative">
                    <select className="w-full bg-surface-dark border border-border-dark rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary appearance-none cursor-pointer outline-none">
                      <option value="ethereum">Ethereum</option>
                      <option value="polygon">Polygon</option>
                      <option value="solana">Solana</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none w-5 h-5" />
                  </div>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.95 }}
                className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 pb-12"
              >
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <Info className="w-5 h-5" />
                  <span>Gas fees are estimated and may vary.</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full md:w-auto min-w-50 bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Create Item</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* --- RIGHT COLUMN: PREVIEW STICKY --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 xl:col-span-4 hidden lg:block"
          >
            <div className="sticky top-28 flex flex-col gap-6">
              <h3 className="text-lg font-bold text-text-secondary">Preview</h3>

              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden shadow-2xl relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                {/* Card Content */}
                <div className="relative bg-surface-dark rounded-2xl h-full flex flex-col">
                  <div className="aspect-square w-full bg-surface-darker flex items-center justify-center overflow-hidden">
                    {imagePreview ? (
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-contain"
                        width={500}
                        height={500}
                      />
                    ) : (
                      <div className="text-center p-8">
                        <ImageIcon className="w-16 h-16 text-border-dark mb-4 mx-auto" />
                        <p className="text-text-secondary text-sm">
                          Media Preview
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                          My Collection
                        </p>
                        <h3 className="text-xl font-bold text-white wrap-break-word">
                          {name || "Item Name"}
                        </h3>
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border-dark text-text-secondary hover:text-white hover:border-white transition-colors cursor-pointer">
                        <MoreHorizontal className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-primary"></div>
                      <p className="text-sm text-text-secondary">
                        Created by{" "}
                        <span className="text-white font-medium">You</span>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border-dark flex justify-between items-end">
                      <div className="flex flex-col gap-1">
                        <p className="text-xs text-text-secondary font-medium">
                          Current Price
                        </p>
                        <div className="flex items-center gap-1">
                          <Bitcoin className="text-white w-4 h-4" />
                          <span className="text-xl font-bold text-white">
                            --
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-text-secondary">
                        Ends in 7 days
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Alert Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-3"
              >
                <Sparkles className="text-primary w-5 h-5 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-white">Ready to mint?</p>
                  <p className="text-xs text-text-secondary">
                    Double check your metadata before creating. Once minted,
                    some properties cannot be changed.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
