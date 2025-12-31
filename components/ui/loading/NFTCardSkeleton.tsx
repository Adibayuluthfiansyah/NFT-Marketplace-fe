import { Skeleton } from "@/components/ui/skeleton";

export function NFTCardSkeleton() {
  return (
    <div className="flex flex-col bg-card rounded-3xl overflow-hidden border border-border">
      {/* Image Skeleton */}
      <Skeleton className="aspect-square w-full" />
      
      {/* Content Skeleton */}
      <div className="p-5 flex flex-col gap-3">
        <Skeleton className="h-6 w-3/4" />
        
        <div className="flex items-center gap-2">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
        
        <div className="flex justify-between items-center mt-2 pt-3 border-t border-border">
          <div className="space-y-2">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-5 w-20" />
          </div>
          <Skeleton className="h-9 w-16 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function NFTGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <NFTCardSkeleton key={index} />
      ))}
    </div>
  );
}
