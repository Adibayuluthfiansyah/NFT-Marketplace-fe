"use client";

import { BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CollectionRanking, TrendingSale } from "@/app/types/stats";
import { cn } from "@/lib/utils";

interface StatsLeaderboardProps {
  topCollections: CollectionRanking[];
  trendingSales: TrendingSale[];
}

export function StatsLeaderboard({
  topCollections,
  trendingSales,
}: StatsLeaderboardProps) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* Top Collections */}
      <Card className="flex flex-col overflow-hidden p-0 bg-card border-border">
        <div className="flex justify-between items-center p-6 pb-4">
          <h3 className="text-xl font-bold text-foreground">Top Collections</h3>
          <Button
            variant="link"
            className="text-primary hover:text-primary/80 p-0 h-auto font-semibold"
          >
            View All
          </Button>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="pl-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-16">
                Rank
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Collection
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
                Floor
              </TableHead>
              <TableHead className="pr-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
                Volume
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topCollections.map((collection) => {
              const isPositive = collection.change.startsWith("+");
              
              return (
                <TableRow
                  key={collection.name}
                  className="group hover:bg-muted/50 border-border cursor-pointer"
                >
                  <TableCell className="pl-6 font-semibold text-muted-foreground">
                    {collection.rank}
                  </TableCell>
                  <TableCell className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={collection.imageUrl} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {collection.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {collection.name}
                        </span>
                        {collection.isVerified && (
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <BadgeCheck className="w-3 h-3 text-primary" />
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium text-foreground">
                    {collection.floorPrice}
                  </TableCell>
                  <TableCell className="pr-6 text-right">
                    <div className="font-semibold text-foreground">
                      {collection.volume}
                    </div>
                    <div
                      className={cn(
                        "text-xs font-medium",
                        isPositive ? "text-green-500" : "text-red-500"
                      )}
                    >
                      {collection.change}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>

      {/* Trending Sales */}
      <Card className="flex flex-col overflow-hidden p-0 bg-card border-border">
        <div className="flex justify-between items-center p-6 pb-4">
          <h3 className="text-xl font-bold text-foreground">Trending Sales</h3>
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary uppercase tracking-wider font-semibold border-0 animate-pulse"
          >
            Live
          </Badge>
        </div>
        
        <div className="flex flex-col">
          {trendingSales.map((sale, index) => (
            <div
              key={sale.id}
              className={cn(
                "flex items-center justify-between p-4 hover:bg-muted/50 transition-colors cursor-pointer group",
                index !== trendingSales.length - 1 && "border-b border-border"
              )}
            >
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 rounded-lg">
                  <AvatarImage src={sale.imageUrl} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold rounded-lg">
                    {sale.nftName.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {sale.nftName}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {sale.collectionName}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold text-foreground text-lg">
                  {sale.price}
                </span>
                <span className="text-xs text-muted-foreground">
                  {sale.timeAgo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
