import { ImageResponse } from 'next/og'
import { Zap } from 'lucide-react'

// Configuration for favicon
export const faviconConfig = {
  size: {
    width: 32,
    height: 32,
  },
  contentType: 'image/svg+xml',
}

// Configuration for app icons
export const iconConfig = {
  sizes: [
    { width: 16, height: 16, id: 'favicon-16' },
    { width: 32, height: 32, id: 'favicon-32' },
    { width: 192, height: 192, id: 'android-icon' },
    { width: 180, height: 180, id: 'apple-icon' },
  ],
  contentType: 'image/png',
}

// Common rendering function for icons
export function renderIcon(size: number) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#3F8CFF',
      }}
    >
      <Zap color="white" size={Math.floor(size * 0.6)} strokeWidth={2} />
    </div>
  )
}

// Favicon generator
export function generateFavicon() {
  return new ImageResponse(
    renderIcon(faviconConfig.size.width),
    faviconConfig.size
  )
}

// App icon generator
export function generateAppIcon(width: number, height: number) {
  return new ImageResponse(
    renderIcon(Math.min(width, height)),
    { width, height }
  )
} 