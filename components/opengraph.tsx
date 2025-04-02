import { ImageResponse } from 'next/og'

export const socialImageConfig = {
  size: {
    width: 1200,
    height: 630,
  },
  alt: 'Prompt Sauce - Create and discover amazing AI prompts',
  contentType: 'image/png',
}

export async function generateSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#111111',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'ui-monospace, monospace',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 120,
              borderRadius: 24,
              backgroundColor: '#3F8CFF',
              marginRight: 32,
            }}
          >
            {/* Raw SVG for Zap icon instead of the Lucide component */}
            <svg
              width={70}
              height={70}
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
          <div style={{ fontSize: 80, fontWeight: 'bold' }}>PromptSauce</div>
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#adadad',
            marginTop: 16,
          }}
        >
          Create and discover amazing AI prompts for your projects
        </div>
      </div>
    ),
    socialImageConfig.size
  )
} 