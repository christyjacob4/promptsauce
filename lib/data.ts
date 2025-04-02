import type { Asset } from "./types"

// Mock data for the gallery
const mockAssets: Asset[] = [
  {
    id: "1",
    title: "Neon Cityscape",
    description: "Futuristic cityscape with neon lights and flying vehicles",
    prompt: "A futuristic cityscape at night with neon lights, flying cars, and tall skyscrapers in a cyberpunk style",
    imageUrl: "/placeholder.svg?height=600&width=600",
    categories: ["3d", "fantasy"],
    createdAt: "April 1, 2025",
    isBookmarked: false,
  },
  {
    id: "2",
    title: "Isometric Office",
    description: "Detailed isometric view of a modern office space",
    prompt: "Isometric 3D render of a modern office space with desks, computers, plants, and people working",
    imageUrl: "/placeholder.svg?height=600&width=600",
    categories: ["isometric", "3d"],
    createdAt: "April 1, 2025",
    isBookmarked: false,
  },
  {
    id: "3",
    title: "Ghibli Landscape",
    description: "Serene landscape in the style of Studio Ghibli",
    prompt:
      "A peaceful countryside landscape with rolling hills, a small village, and a river in the style of Studio Ghibli",
    imageUrl: "/placeholder.svg?height=600&width=600",
    categories: ["ghibli", "illustration"],
    createdAt: "March 30, 2025",
    isBookmarked: false,
  },
  {
    id: "4",
    title: "Minimal Abstract",
    description: "Minimalist abstract composition with geometric shapes",
    prompt: "Minimalist abstract art with simple geometric shapes in pastel colors on a white background",
    imageUrl: "/placeholder.svg?height=600&width=600",
    categories: ["minimal", "illustration"],
    createdAt: "March 29, 2025",
    isBookmarked: false,
  },
  {
    id: "5",
    title: "Fantasy Character",
    description: "Detailed fantasy character design with elaborate costume",
    prompt:
      "A detailed fantasy character design of an elven warrior with elaborate armor and magical weapons in a dramatic pose",
    imageUrl: "/placeholder.svg?height=600&width=600",
    categories: ["fantasy", "illustration"],
    createdAt: "March 28, 2025",
    isBookmarked: false,
  },
  {
    id: "6",
    title: "3D Product Render",
    description: "Photorealistic 3D render of a modern smartphone",
    prompt: "Photorealistic 3D render of a sleek modern smartphone with a gradient background and soft shadows",
    imageUrl: "/placeholder.svg?height=600&width=600",
    categories: ["3d", "minimal"],
    createdAt: "March 27, 2025",
    isBookmarked: false,
  },
  {
    id: "7",
    title: "Isometric Island",
    description: "Colorful isometric island with various biomes",
    prompt:
      "Isometric view of a floating island with different biomes including forest, desert, snow, and volcano areas",
    imageUrl: "/placeholder.svg?height=600&width=600",
    categories: ["isometric", "fantasy"],
    createdAt: "March 26, 2025",
    isBookmarked: false,
  },
  {
    id: "8",
    title: "Ghibli Characters",
    description: "Charming characters in the iconic Ghibli style",
    prompt:
      "A group of charming characters with large expressive eyes and simple features in the style of Studio Ghibli",
    imageUrl: "/placeholder.svg?height=600&width=600",
    categories: ["ghibli", "illustration"],
    createdAt: "March 25, 2025",
    isBookmarked: false,
  },
  {
    id: "9",
    title: "Minimal UI Design",
    description: "Clean and minimal user interface design for a mobile app",
    prompt: "Minimal and clean user interface design for a mobile app with simple typography and ample white space",
    imageUrl: "/placeholder.svg?height=600&width=600",
    categories: ["minimal", "illustration"],
    createdAt: "March 24, 2025",
    isBookmarked: false,
  },
  {
    id: "10",
    title: "Fantasy Landscape",
    description: "Epic fantasy landscape with floating islands and dragons",
    prompt: "Epic fantasy landscape with floating islands, waterfalls, dragons flying in the sky, and a magical castle",
    imageUrl: "/placeholder.svg?height=600&width=600",
    categories: ["fantasy", "illustration"],
    createdAt: "March 23, 2025",
    isBookmarked: false,
  },
  {
    id: "11",
    title: "3D Character",
    description: "Stylized 3D character with unique features",
    prompt: "Stylized 3D character with exaggerated proportions, vibrant colors, and a playful pose",
    imageUrl: "/placeholder.svg?height=600&width=600",
    categories: ["3d", "fantasy"],
    createdAt: "March 22, 2025",
    isBookmarked: false,
  },
  {
    id: "12",
    title: "Isometric Room",
    description: "Detailed isometric view of a cozy living room",
    prompt: "Isometric 3D render of a cozy living room with furniture, plants, books, and warm lighting",
    imageUrl: "/placeholder.svg?height=600&width=600",
    categories: ["isometric", "minimal"],
    createdAt: "March 21, 2025",
    isBookmarked: false,
  },
]

// Available categories for filtering
export const categories = ["3d", "isometric", "ghibli", "illustration", "minimal", "fantasy"]

// In a real app, this would be stored in a database
let bookmarkedAssetIds: string[] = []

export function getAssets(page = 1, limit = 12): Asset[] {
  const start = (page - 1) * limit
  const end = start + limit
  const assets = mockAssets.slice(start, end)

  // Add bookmark status to each asset
  return assets.map((asset) => ({
    ...asset,
    isBookmarked: bookmarkedAssetIds.includes(asset.id),
  }))
}

export function getAssetById(id: string): Asset | undefined {
  const asset = mockAssets.find((asset) => asset.id === id)

  if (!asset) return undefined

  return {
    ...asset,
    isBookmarked: bookmarkedAssetIds.includes(asset.id),
  }
}

export function toggleBookmark(id: string): void {
  if (bookmarkedAssetIds.includes(id)) {
    bookmarkedAssetIds = bookmarkedAssetIds.filter((assetId) => assetId !== id)
  } else {
    bookmarkedAssetIds.push(id)
  }
}

export function getBookmarkedAssets(): Asset[] {
  return mockAssets
    .filter((asset) => bookmarkedAssetIds.includes(asset.id))
    .map((asset) => ({
      ...asset,
      isBookmarked: true,
    }))
}

