"use client";
import { Card } from "@/components/ui/card";
import { Loader2, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Navbar } from "@/components/ui/layout/Navbar";
import { FileUpload } from "@/components/ui/create/FileUpload";
import { CreateFormFields } from "@/components/ui/create/CreateFormFields";
import { AttributeSections } from "@/components/ui/create/AttributeSections";
import { NFTPreview } from "@/components/ui/create/NFTPreview";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info, List, Star, BarChart3 } from "lucide-react";
import {
  NFTFormData,
  AttributeSection,
  CollectionOption,
} from "@/app/types/create";
import {
  useWaitForTransactionReceipt,
  useWriteContract,
  useAccount,
} from "wagmi";
import { NFT_COLLECTION_ABI, NFT_ADDRESS } from "../constant";
import { NFTAttribute, NFTMetadata } from "../types/wallet";
import { uploadNFTToIPFS } from "@/lib/nftStorage";

//helper  detect media type from file
const getMediaType = (file: File): string => {
  if (file.type.startsWith("image/")) return "image";
  if (file.type.startsWith("video/")) return "video";
  if (file.type.startsWith("audio/")) return "audio";
  return "image";
};

//validation use zod
const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.string().regex(/^\d+(\.\d{1,18})?$/, "Price must be a valid number"),
  image: z.instanceof(File, {
    message: "Image must be uploaded",
  }),
  externalLink: z.string().optional(),
  collection: z.string().optional(),
  category: z.string().optional(),
  supply: z.number().min(1).optional(),
  blockchain: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreateNFTPage() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const [isUploading, setIsUploading] = useState(false);
  const [attributes, setAttributes] = useState<NFTAttribute[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // hook write contract minting NFT
  const {
    data: hash,
    writeContract,
    isPending: isMinting,
    error: mintError,
  } = useWriteContract();

  // hook wait for transaction receipt
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  // form hooks
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      externalLink: "",
      collection: "",
      category: "Art",
      supply: 1,
      blockchain: "ethereum",
    },
  });
  const watchAllFields = form.watch();

  //  (Attributes & Collections)
  const attributeSections: AttributeSection[] = [
    {
      id: "1",
      title: "Properties",
      description: "Textual traits (e.g. Color)",
      icon: List,
      type: "properties",
    },
    {
      id: "2",
      title: "Levels",
      description: "Numerical traits (e.g. Speed)",
      icon: Star,
      type: "levels",
    },
    {
      id: "3",
      title: "Stats",
      description: "Numerical stats (e.g. Power)",
      icon: BarChart3,
      type: "stats",
    },
  ];

  const collections: CollectionOption[] = [
    { id: "1", name: "Genesis Collection" },
    { id: "2", name: "Special Drops" },
  ];

  const categories = ["Art", "Collectibles", "Music", "Photography", "Sports"];

  //  temporary handlers
  const handleAttributeAdd = (type: AttributeSection["type"]) => {
    const traitType = window.prompt(`Enter ${type} name (e.g. Color):`);
    if (!traitType) return;

    const value = window.prompt(`Enter ${type} value (e.g. Blue):`);
    if (!value) return;

    setAttributes((prev) => [...prev, { trait_type: traitType, value: value }]);
  };

  const handleAttributeRemove = (index: number) => {
    setAttributes((prev) => prev.filter((_, i) => i !== index));
  };

  // submit form
  const onSubmit = async (data: FormValues) => {
    if (!isConnected) {
      toast.error("Connect your wallet first");
      return;
    }
    try {
      setIsUploading(true);
      toast.loading("Uploading NFT to IPFS...");
      // upload to IPFS
      const metadata: NFTMetadata = {
        name: data.name,
        description: data.description,
        image: data.image,
        attributes: attributes,
      };
      const ipfsResult = await uploadNFTToIPFS(metadata);
      console.log("IPFS URL:", ipfsResult.url);
      setIsUploading(false);
      toast.dismiss();
      toast.success("NFT uploaded to IPFS successfully!");
      toast.loading("Waiting Wallet Confirmation...");

      // minting NFT
      writeContract({
        address: NFT_ADDRESS,
        abi: NFT_COLLECTION_ABI,
        functionName: "createToken",
        args: [ipfsResult.url],
      });
    } catch (error) {
      setIsUploading(false);
      console.error("Error creating NFT:", error);
      toast.dismiss();
      toast.error("Failed to create NFT. Please try again.");
    }
  };
  // success minting
  useEffect(() => {
    if (isSuccess) {
      toast.dismiss();
      toast.success("NFT Minted Successfully! 🎉");
      setTimeout(() => router.push("/profile"), 2000);
    }
    if (mintError) {
      toast.dismiss();
      toast.error(`Minting failed: ${mintError.message}`);
    }
  }, [isSuccess, mintError, router]);

  // loading stats teks
  const getButtonText = () => {
    if (isUploading) return "Uploading to IPFS...";
    if (isMinting) return "Confirming in Wallet...";
    if (isConfirming) return "Minting on Blockchain...";
    return "Create Item";
  };

  const isButtonDisabled = isUploading || isMinting || isConfirming;

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
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  {/* File Upload */}
                  <FileUpload
                    onFileChange={(file) => {
                      if (file) {
                        form.setValue("image", file, { shouldValidate: true });
                        setImagePreview(URL.createObjectURL(file));
                      } else {
                        form.resetField("image");
                        setImagePreview(null);
                      }
                    }}
                    preview={imagePreview}
                  />
                  {form.formState.errors.image && (
                    <p className="text-sm text-destructive mt-2">
                      {String(form.formState.errors.image.message)}
                    </p>
                  )}

                  {/* Form Fields */}
                  <CreateFormFields
                    formData={watchAllFields as NFTFormData}
                    collections={collections}
                    categories={categories}
                    selectedCategory={watchAllFields.category || "Art"}
                    onInputChange={(field, value) => {
                      form.setValue(field as any, value, {
                        shouldValidate: true,
                      });
                    }}
                    onCategorySelect={(cat) => form.setValue("category", cat)}
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

                  {attributes.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                      {attributes.map((attr, idx) => (
                        <Card
                          key={idx}
                          className="p-3 bg-muted/30 border-primary/20 flex justify-between items-center"
                        >
                          <div className="overflow-hidden">
                            <p className="text-xs font-semibold text-primary uppercase">
                              {attr.trait_type}
                            </p>
                            <p className="text-sm truncate font-medium">
                              {attr.value}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleAttributeRemove(idx)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </Card>
                      ))}
                    </div>
                  )}
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
                      disabled={isButtonDisabled}
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                    >
                      {isButtonDisabled && (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      )}
                      {getButtonText()}
                      {!isButtonDisabled && (
                        <ArrowRight className="w-4 h-4 ml-2" />
                      )}
                    </Button>
                  </div>
                  {hash && isConfirming && (
                    <div className="text-center text-xs text-blue-500 animate-pulse">
                      Transaction sent! Waiting for block confirmation... <br />
                      Hash: {hash.slice(0, 10)}...{hash.slice(-8)}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right Column: Preview */}
            <div className="lg:col-span-5 xl:col-span-4 hidden lg:block">
              <NFTPreview
                name={watchAllFields.name || "Unnamed NFT"}
                imagePreview={imagePreview}
                collection={
                  watchAllFields.collection
                    ? collections.find(
                        (c) => c.id === watchAllFields.collection
                      )?.name
                    : "Genesis Collection"
                }
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
