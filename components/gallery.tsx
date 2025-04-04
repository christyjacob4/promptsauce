"use client"

import { useState, useEffect } from "react"
import { AssetCard } from "@/components/asset-card"
import { getAssets } from "@/lib/data"
import type { Asset } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface GalleryProps {
  assets?: Asset[]
}

// Skeleton loader for asset cards
function AssetCardSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-[#1C1C1C]">
      <div className="relative aspect-square w-full overflow-hidden">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="p-5">
        <Skeleton className="h-5 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-14" />
        </div>
      </div>
    </div>
  )
}

export function Gallery({ assets: initialAssets }: GalleryProps) {
  const [assets, setAssets] = useState<Asset[]>(initialAssets || [])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(!initialAssets)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    if (!initialAssets) {
      loadAssets()
    }
  }, [initialAssets])

  const loadAssets = async () => {
    setInitialLoading(true)
    setLoading(true)
    try {
      const newAssets = await getAssets(1)
      setAssets(newAssets)
      setHasMore(newAssets.length === 12)
    } catch (error) {
      console.error("Failed to load assets:", error)
    } finally {
      setInitialLoading(false)
      setLoading(false)
    }
  }

  const loadMoreAssets = async () => {
    if (loading) return

    setLoading(true)
    try {
      const nextPage = page + 1
      const newAssets = await getAssets(nextPage)

      if (newAssets.length === 0) {
        setHasMore(false)
      } else {
        setAssets((prev) => [...prev, ...newAssets])
        setPage(nextPage)
        setHasMore(newAssets.length === 12)
      }
    } catch (error) {
      console.error("Failed to load more assets:", error)
    } finally {
      setLoading(false)
    }
  }

  // Render skeletons when initially loading
  if (initialLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array(12).fill(0).map((_, i) => (
          <AssetCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  // Show message when no assets found
  if (assets.length === 0 && !loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg text-muted-foreground">No assets found</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
      
      {hasMore && !initialAssets && (
        <div className="col-span-full flex justify-center py-8">
          {loading ? (
            <div className="flex flex-col items-center gap-4">
              <div className="grid grid-cols-3 gap-2">
                <Skeleton className="h-3 w-3" />
                <Skeleton className="h-3 w-3" />
                <Skeleton className="h-3 w-3" />
              </div>
              <p className="text-sm text-muted-foreground">Loading more assets...</p>
            </div>
          ) : (
            <Button 
              onClick={loadMoreAssets} 
              variant="outline" 
              className="min-w-[200px]"
            >
              Load More
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

