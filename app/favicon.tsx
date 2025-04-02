import { generateFavicon, faviconConfig } from '@/components/app-icon'
 
// Image generation route for the favicon
export async function generateImageMetadata() {
  return [
    {
      contentType: faviconConfig.contentType,
      size: faviconConfig.size,
      id: 'favicon',
    },
  ]
}
 
// Image function
export default generateFavicon