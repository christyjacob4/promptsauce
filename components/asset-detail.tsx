"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Share2, ArrowLeft, Copy } from "lucide-react"
import type { Asset } from "@/lib/types"
import { toggleBookmark } from "@/lib/data"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AssetDetailProps {
  asset: Asset
}

export function AssetDetail({ asset }: AssetDetailProps) {
  const { toast } = useToast()
  const [isBookmarked, setIsBookmarked] = useState(asset.isBookmarked)

  const handleBookmark = () => {
    const newBookmarkState = !isBookmarked
    setIsBookmarked(newBookmarkState)
    toggleBookmark(asset.id)

    toast({
      title: newBookmarkState ? "Added to bookmarks" : "Removed from bookmarks",
      duration: 3000,
    })
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: asset.title,
          text: asset.description,
          url: window.location.href,
        })
        .catch((err) => {
          console.error("Error sharing:", err)
        })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link copied to clipboard",
        duration: 3000,
      })
    }
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(asset.prompt)
    toast({
      title: "Prompt copied to clipboard",
      duration: 3000,
    })
  }

  return (
    <div className="space-y-8 max-w-screen-xl mx-auto">
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to gallery
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
        <div className="flex justify-center">
          <div className="relative aspect-square max-w-lg w-full overflow-hidden rounded-lg border border-[#2A2A2A] shadow-lg">
            <Image src={asset.imageUrl || "/placeholder.svg"} alt={asset.title} fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-start gap-3 mb-4">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 bg-[#1C1C1C] transition-colors hover:bg-[#2A2A2A]"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>

            <Button
              variant="outline"
              size="sm"
              className={cn("gap-1.5 bg-[#1C1C1C] transition-all hover:bg-[#2A2A2A]", isBookmarked && "text-[#FF6C6C]")}
              onClick={handleBookmark}
            >
              <Heart className={cn("h-4 w-4 transition-transform", isBookmarked && "fill-current scale-110")} />
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </Button>
          </div>
          
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{asset.title}</h1>
            <p className="mt-3 text-muted-foreground">{asset.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {asset.categories.map((category) => (
              <Badge key={category} variant="outline" className="bg-[#2A2A2A] text-white">
                {category}
              </Badge>
            ))}
          </div>

          <div>
            <h3 className="mb-2 font-medium">Created</h3>
            <p className="text-sm text-muted-foreground">{asset.createdAt}</p>
          </div>
        </div>
      </div>

      <Card className="bg-[#1C1C1C] border-[#2A2A2A] group relative">
        <CardContent className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-medium">Prompt</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 gap-1.5 hover:bg-[#2A2A2A] opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4" 
              onClick={handleCopyPrompt}
            >
              <Copy className="h-3.5 w-3.5" />
              Copy
            </Button>
          </div>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">{asset.prompt}</p>
        </CardContent>
      </Card>
    </div>
  )
}

