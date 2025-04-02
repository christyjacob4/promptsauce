"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Search, MoreVertical, Edit, Trash, Eye, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { getAssets } from "@/lib/data"
import type { Asset } from "@/lib/types"

export function AssetManagement() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [assets, setAssets] = useState<Asset[]>(getAssets())
  const [deleteAssetId, setDeleteAssetId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const filteredAssets = assets.filter(
    (asset) =>
      asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.categories.some((category) => category.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleDeleteConfirm = () => {
    if (!deleteAssetId) return

    setIsDeleting(true)

    // Simulate API call
    setTimeout(() => {
      setAssets(assets.filter((asset) => asset.id !== deleteAssetId))
      setDeleteAssetId(null)
      setIsDeleting(false)

      toast({
        title: "Asset deleted",
        description: "The asset has been removed from the gallery",
      })
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search assets..."
            className="w-full bg-[#1C1C1C] pl-9 text-white placeholder:text-muted-foreground"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="text-sm text-muted-foreground">{filteredAssets.length} assets found</div>
      </div>

      <div className="rounded-md border border-[#2A2A2A]">
        <Table>
          <TableHeader className="bg-[#1C1C1C]">
            <TableRow className="border-[#2A2A2A] hover:bg-[#2A2A2A]">
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Categories</TableHead>
              <TableHead className="hidden md:table-cell">Created</TableHead>
              <TableHead className="w-[70px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAssets.length === 0 ? (
              <TableRow className="border-[#2A2A2A] hover:bg-[#2A2A2A]">
                <TableCell colSpan={5} className="h-24 text-center">
                  No assets found
                </TableCell>
              </TableRow>
            ) : (
              filteredAssets.map((asset) => (
                <TableRow key={asset.id} className="border-[#2A2A2A] hover:bg-[#2A2A2A]">
                  <TableCell>
                    <div className="relative h-10 w-10 overflow-hidden rounded-md">
                      <Image
                        src={asset.imageUrl || "/placeholder.svg"}
                        alt={asset.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{asset.title}</div>
                    <div className="text-xs text-muted-foreground line-clamp-1 md:hidden">
                      {asset.categories.join(", ")}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {asset.categories.map((category) => (
                        <Badge key={category} variant="outline" className="bg-[#2A2A2A] text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="text-sm">{asset.createdAt}</div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-[#1C1C1C] border-[#2A2A2A]">
                        <DropdownMenuItem
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => {
                            toast({
                              title: "View asset",
                              description: `Viewing "${asset.title}"`,
                            })
                          }}
                        >
                          <Eye className="h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => {
                            toast({
                              title: "Edit asset",
                              description: `Editing "${asset.title}"`,
                            })
                          }}
                        >
                          <Edit className="h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="flex items-center gap-2 text-destructive cursor-pointer focus:text-destructive"
                          onClick={() => setDeleteAssetId(asset.id)}
                        >
                          <Trash className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!deleteAssetId} onOpenChange={(open) => !open && setDeleteAssetId(null)}>
        <DialogContent className="bg-[#1C1C1C] border-[#2A2A2A]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Confirm Deletion
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this asset? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteAssetId(null)}
              className="bg-[#2A2A2A] hover:bg-[#3A3A3A]"
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm} disabled={isDeleting}>
              {isDeleting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

