import { generateAppIcon, iconConfig } from '@/components/app-icon'

// Image generation route for various sizes of icons
export async function generateImageMetadata() {
  return iconConfig.sizes.map(size => ({
    contentType: iconConfig.contentType,
    size: { width: size.width, height: size.height },
    id: size.id,
  }))
}

// Image function
export default function Icon({ params }: { params: { size: string } }) {
  // Default to largest size if no size specified
  const defaultSize = iconConfig.sizes[iconConfig.sizes.length - 1]
  const width = parseInt(params.size?.split('x')[0] || String(defaultSize.width), 10)
  const height = parseInt(params.size?.split('x')[1] || String(defaultSize.height), 10)
  
  return generateAppIcon(width, height)
} 