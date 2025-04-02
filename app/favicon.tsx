import { ImageResponse } from 'next/og'
 
// Image generation route for the favicon
export async function generateImageMetadata() {
  return [
    {
      contentType: 'image/svg+xml',
      size: { width: 32, height: 32 },
      id: 'favicon',
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
          width="20"
          height="20"
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
      width: 32,
      height: 32,
    }
  )
}