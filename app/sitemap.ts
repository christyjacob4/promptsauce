import { MetadataRoute } from 'next'
import { getAssets } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://promptsauce.com'
  const assets = getAssets()
  
  // Main pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/bookmarks`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Generate entries for each asset
  const assetPages = assets.map(asset => ({
    url: `${baseUrl}/assets/${asset.id}`,
    lastModified: new Date(asset.createdAt || Date.now()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...assetPages]
} 