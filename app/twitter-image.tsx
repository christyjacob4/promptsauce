import { generateSocialImage, socialImageConfig } from '@/components/opengraph'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = socialImageConfig.alt
export const size = socialImageConfig.size
export const contentType = socialImageConfig.contentType

// Image generation
export default generateSocialImage 