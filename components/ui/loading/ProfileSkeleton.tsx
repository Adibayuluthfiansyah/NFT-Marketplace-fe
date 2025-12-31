import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display pb-12">
      {/* Banner Skeleton */}
      <Skeleton className="h-48 md:h-64 w-full" />
      
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar Skeleton */}
          <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
            <div className="bg-card border border-border rounded-2xl p-6">
              <Skeleton className="w-24 h-24 rounded-2xl mb-4" />
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-6" />
              <Skeleton className="h-20 w-full mb-6" />
              <div className="flex gap-3">
                <Skeleton className="flex-1 h-10 rounded-xl" />
                <Skeleton className="w-10 h-10 rounded-xl" />
                <Skeleton className="w-10 h-10 rounded-xl" />
              </div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="flex-1 w-full min-w-0">
            {/* Tabs Skeleton */}
            <div className="flex gap-2 mb-8 border-b border-border pb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-t-lg" />
              ))}
            </div>

            {/* Search & Filter Skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Skeleton className="flex-1 h-12 rounded-xl" />
              <Skeleton className="w-48 h-12 rounded-xl" />
              <Skeleton className="w-12 h-12 rounded-xl" />
            </div>

            {/* NFT Grid Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                  <Skeleton className="aspect-square w-full" />
                  <div className="p-4 space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
