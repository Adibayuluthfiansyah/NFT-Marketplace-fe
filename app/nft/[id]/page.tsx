"use client";

import { use, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/layout/Navbar";
import { FileText, TrendingUp, Tag } from "lucide-react";
import { NFTImage } from "@/components/ui/nft/NFTImage";
import { NFTProperties } from "@/components/ui/nft/NFTProperties";
import { NFTHeader } from "@/components/ui/nft/NFTHeader";
import { NFTActionCard } from "@/components/ui/nft/NFTActionCard";
import { NFTPriceHistory } from "@/components/ui/nft/NFTPriceHistory";
import { MoreCollection } from "@/components/ui/nft/MoreCollection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NFTDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const id = resolvedParams.id || "9999";
  const [activeTab, setActiveTab] = useState("details");

  const traits = [
    { label: "Type", val: "Human", pct: "12%" },
    { label: "Hair", val: "Pink", pct: "3%" },
    { label: "Clothing", val: "Kimono", pct: "5%" },
    { label: "Eyes", val: "Determined", pct: "8%" },
    { label: "Mouth", val: "Smirk", pct: "14%" },
    { label: "Background", val: "Off White A", pct: "18%" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pb-12">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        {/* Breadcrumbs with Shadcn */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/explore" className="text-muted-foreground hover:text-primary">
                  Collections
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground font-medium">Azuki</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6 w-full"
          >
            {/* Kirim URL gambar ke komponen */}
            <NFTImage image="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974" />

            {/* Tabs for Details, Properties, Price History, Offers */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-3 bg-card border border-border p-1 rounded-xl">
                <TabsTrigger 
                  value="details" 
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Details
                </TabsTrigger>
                <TabsTrigger 
                  value="price-history" 
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  History
                </TabsTrigger>
                <TabsTrigger 
                  value="offers" 
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  Offers
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-6 space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="bg-card border-border">
                    <CardHeader className="px-5 py-4 border-b border-border bg-muted/50">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                        <h3 className="font-bold text-lg text-foreground">Description</h3>
                      </div>
                    </CardHeader>
                    <CardContent className="p-5 text-muted-foreground leading-relaxed text-sm">
                      <p>
                        Azuki starts with a collection of 10,000 avatars that give you
                        membership access to The Garden.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <NFTProperties traits={traits} />
              </TabsContent>

              <TabsContent value="price-history" className="mt-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="bg-card border-border">
                    <CardHeader className="px-5 py-4 border-b border-border bg-muted/50">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-muted-foreground" />
                        <h3 className="font-bold text-lg text-foreground">Price History</h3>
                      </div>
                    </CardHeader>
                    <CardContent className="p-5">
                      <div className="space-y-4">
                        {[
                          { date: "2024-01-15", price: "3.5 ETH", event: "Sale" },
                          { date: "2023-12-20", price: "3.2 ETH", event: "Sale" },
                          { date: "2023-11-10", price: "2.8 ETH", event: "Sale" },
                          { date: "2023-10-05", price: "2.5 ETH", event: "Mint" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                            <div>
                              <p className="text-foreground font-medium">{item.event}</p>
                              <p className="text-muted-foreground text-xs">{item.date}</p>
                            </div>
                            <p className="text-primary font-bold">{item.price}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="offers" className="mt-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="bg-card border-border">
                    <CardHeader className="px-5 py-4 border-b border-border bg-muted/50">
                      <div className="flex items-center gap-3">
                        <Tag className="w-5 h-5 text-muted-foreground" />
                        <h3 className="font-bold text-lg text-foreground">Active Offers</h3>
                      </div>
                    </CardHeader>
                    <CardContent className="p-5">
                      <div className="space-y-4">
                        {[
                          { from: "0x1234...5678", price: "3.8 ETH", expires: "2 days" },
                          { from: "0xabcd...ef01", price: "3.7 ETH", expires: "5 days" },
                          { from: "0x9876...5432", price: "3.5 ETH", expires: "1 week" },
                        ].map((offer, i) => (
                          <div key={i} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                            <div>
                              <p className="text-foreground font-medium">{offer.price}</p>
                              <p className="text-muted-foreground text-xs">From {offer.from}</p>
                            </div>
                            <p className="text-muted-foreground text-xs">Expires in {offer.expires}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6 w-full"
          >
            <NFTHeader id={id} />
            <NFTActionCard />
            <NFTPriceHistory />
          </motion.div>
        </div>
        <MoreCollection />
      </div>
    </main>
  );
}
