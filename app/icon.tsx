import { ImageResponse } from 'next/og'

// Image generation route for various sizes of icons
export async function generateImageMetadata() {
  return [
    {
      contentType: 'image/png',
      size: { width: 16, height: 16 },
      id: 'favicon-16',
    },
    {
      contentType: 'image/png',
      size: { width: 32, height: 32 },
      id: 'favicon-32',
    },
    {
      contentType: 'image/png',
      size: { width: 192, height: 192 },
      id: 'android-icon',
    },
    {
      contentType: 'image/png',
      size: { width: 180, height: 180 },
      id: 'apple-icon',
    },
  ]
}

// Image function
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          backgroundColor: '#3F8CFF',
        }}
      >
        {/* Zap icon similar to lucide */}
        <svg
          width="60%"
          height="60%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
    ),
    {
      width: 180,
      height: 180,
    }
  )
} 