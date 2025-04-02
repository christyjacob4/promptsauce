"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Upload, ImageIcon } from "lucide-react"
import Image from "next/image"
import { categories } from "@/lib/data"

export function AssetUploadForm() {
  const { toast } = useToast()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prompt: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      })
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleCategorySelect = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      if (selectedCategories.length < 3) {
        setSelectedCategories([...selectedCategories, category])
      } else {
        toast({
          title: "Maximum categories reached",
          description: "You can select up to 3 categories",
        })
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!imagePreview) {
      toast({
        title: "Image required",
        description: "Please upload an image for the design",
        variant: "destructive",
      })
      return
    }

    if (selectedCategories.length === 0) {
      toast({
        title: "Categories required",
        description: "Please select at least one category",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Asset uploaded successfully",
        description: `"${formData.title}" has been added to the gallery`,
      })

      // Reset form
      setFormData({
        title: "",
        description: "",
        prompt: "",
      })
      setImagePreview(null)
      setSelectedCategories([])
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }

      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter design title"
              value={formData.title}
              onChange={handleInputChange}
              className="bg-[#2A2A2A] border-[#3A3A3A]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter a detailed description of the design"
              value={formData.description}
              onChange={handleInputChange}
              className="min-h-[100px] bg-[#2A2A2A] border-[#3A3A3A]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="prompt">AI Prompt</Label>
            <Textarea
              id="prompt"
              name="prompt"
              placeholder="Enter the prompt used to generate this design"
              value={formData.prompt}
              onChange={handleInputChange}
              className="min-h-[120px] bg-[#2A2A2A] border-[#3A3A3A]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Categories (select up to 3)</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedCategories.includes(category)
                      ? "bg-[#3F8CFF] hover:bg-[#3F8CFF]/90"
                      : "bg-[#2A2A2A] hover:bg-[#3A3A3A]"
                  }`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                  {selectedCategories.includes(category) && <X className="ml-1 h-3 w-3" />}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Upload Image</Label>
            <Card className="border-dashed border-2 border-[#3A3A3A] bg-[#1C1C1C] overflow-hidden">
              <CardContent className="p-0">
                {imagePreview ? (
                  <div className="relative aspect-square w-full">
                    <Image src={imagePreview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setImagePreview(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center justify-center p-12 text-center cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <ImageIcon className="h-16 w-16 text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">Drag and drop or click to upload</p>
                    <p className="text-xs text-muted-foreground">Supports JPG, PNG, WebP (Max 5MB)</p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2">
            <Label>Preview</Label>
            <Card className="bg-[#1C1C1C] border-[#2A2A2A]">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="font-medium">{formData.title || "Design Title"}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {formData.description || "Design description will appear here"}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedCategories.length > 0 ? (
                      selectedCategories.map((category) => (
                        <Badge key={category} variant="outline" className="bg-[#2A2A2A] text-xs">
                          {category}
                        </Badge>
                      ))
                    ) : (
                      <Badge variant="outline" className="bg-[#2A2A2A] text-xs">
                        Categories
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" className="gap-2 bg-[#3F8CFF] hover:bg-[#3F8CFF]/90" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="h-4 w-4" />
              Publish Design
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

