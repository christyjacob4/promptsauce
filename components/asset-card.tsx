"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Copy, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Asset } from "@/lib/types"
import { toggleBookmark } from "@/lib/data"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface AssetCardProps {
  asset: Asset
}

export function AssetCard({ asset }: AssetCardProps) {
  const { toast } = useToast()
  const [isBookmarked, setIsBookmarked] = useState(asset.isBookmarked)
  const [isHovered, setIsHovered] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const newBookmarkState = !isBookmarked
    setIsBookmarked(newBookmarkState)
    toggleBookmark(asset.id)

    toast({
      title: newBookmarkState ? "Added to bookmarks" : "Removed from bookmarks",
      duration: 2000,
    })
  }

  const handleCopyPrompt = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    navigator.clipboard.writeText(asset.prompt)

    toast({
      title: "Prompt copied to clipboard",
      duration: 2000,
    })
  }

  const handleViewPrompt = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowPrompt(true)
  }

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-lg bg-[#1C1C1C] transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/assets/${asset.id}`} className="block">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={asset.imageUrl || "/placeholder.svg"}
              alt={asset.title}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute right-2 top-2 z-10 h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm transition-all duration-200",
                isBookmarked ? "text-[#FF6C6C]" : "text-white",
                "hover:scale-110",
              )}
              onClick={handleBookmark}
            >
              <Heart className={cn("h-4 w-4", isBookmarked && "fill-current")} />
              <span className="sr-only">{isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}</span>
            </Button>

            <div
              className={cn(
                "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 p-4 transition-all duration-300",
                isHovered ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-white/20 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
                onClick={handleViewPrompt}
              >
                <Eye className="h-4 w-4" />
                View Prompt
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-white/20 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
                onClick={handleCopyPrompt}
              >
                <Copy className="h-4 w-4" />
                Copy Prompt
              </Button>
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-base font-medium">{asset.title}</h3>
            {/* <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">{asset.description}</p> */}
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">{asset.prompt}</p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {asset.categories.map((category) => (
                <Badge key={category} variant="outline" className="bg-[#2A2A2A] text-xs text-white">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </Link>
      </div>

      <Dialog open={showPrompt} onOpenChange={setShowPrompt}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Prompt for "{asset.title}"</DialogTitle>
            <DialogDescription>Copy this prompt to generate similar images</DialogDescription>
          </DialogHeader>
          <div className="mt-4 rounded-md bg-[#2A2A2A] p-4">
            <p className="text-sm text-white">{asset.prompt}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              className="gap-2"
              onClick={() => {
                navigator.clipboard.writeText(asset.prompt)
                toast({
                  title: "Prompt copied to clipboard",
                  duration: 2000,
                })
              }}
            >
              <Copy className="h-4 w-4" />
              Copy to Clipboard
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

