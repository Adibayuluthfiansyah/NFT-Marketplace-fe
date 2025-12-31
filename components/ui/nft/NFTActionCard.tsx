import { Clock, Wallet, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function NFTActionCard() {
  return (
    <Card className="bg-card border-border shadow-xl">
      <CardContent className="p-6 flex flex-col gap-6">
        <div className="bg-muted/50 rounded-xl p-4 flex items-center gap-3 text-sm text-muted-foreground border border-border">
          <Clock className="w-5 h-5 text-muted-foreground" />
          <span>
            Sale ends in{" "}
            <span className="font-bold text-foreground">
              2 days 14 hours 32 minutes
            </span>
          </span>
        </div>

        <div>
          <p className="text-muted-foreground text-xs font-bold uppercase tracking-wide mb-2">
            Current Price
          </p>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-foreground">4.5 ETH</span>
            <span className="text-lg text-muted-foreground">$12,482.10</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-12 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            size="lg"
          >
            <Wallet className="w-5 h-5 mr-2" />
            Buy Now
          </Button>
          <Button 
            variant="outline"
            className="flex-1 border-2 border-border text-foreground font-bold text-lg h-12 rounded-full hover:border-primary hover:text-primary bg-transparent"
            size="lg"
          >
            <Tag className="w-5 h-5 mr-2" />
            Make Offer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
