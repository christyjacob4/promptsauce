"use client"

import { useState, useEffect } from "react"
import { AssetCard } from "@/components/asset-card"
import { getAssets } from "@/lib/data"
import type { Asset } from "@/lib/types"
import { useInView } from "react-intersection-observer"
import { useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

interface GalleryProps {
  assets?: Asset[]
}

export function Gallery({ assets: initialAssets }: GalleryProps) {
  const [assets, setAssets] = useState<Asset[]>(initialAssets || [])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const { state } = useSidebar()

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  useEffect(() => {
    if (!initialAssets) {
      loadAssets()
    }
  }, [initialAssets])

  useEffect(() => {
    if (inView && hasMore && !loading && !initialAssets) {
      loadMoreAssets()
    }
  }, [inView, hasMore, loading, initialAssets])

  const loadAssets = async () => {
    setLoading(true)
    try {
      const newAssets = await getAssets(1)
      setAssets(newAssets)
      setHasMore(newAssets.length === 12)
    } catch (error) {
      console.error("Failed to load assets:", error)
    } finally {
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
      }
    } catch (error) {
      console.error("Failed to load more assets:", error)
    } finally {
      setLoading(false)
    }
  }

  if (assets.length === 0 && !loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg text-muted-foreground">No assets found</p>
      </div>
    )
  }

  return (
    <div
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {assets.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}

      {hasMore && !initialAssets && (
        <div ref={ref} className="col-span-full flex justify-center py-8">
          {loading && (
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#3F8CFF] border-t-transparent" />
          )}
        </div>
      )}
    </div>
  )
}

