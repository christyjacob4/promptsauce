import { ImageResponse } from 'next/og'

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
  const iconSize = Math.floor(size * 0.6);
  
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
      {/* Raw SVG for Zap icon instead of the Lucide component */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
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