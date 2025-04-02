import { ImageResponse } from 'next/og'
import { Zap } from 'lucide-react'

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
          fontFamily: '"Geist Mono", monospace',
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
            <Zap color="white" size={70} strokeWidth={2} />
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
    {
      ...socialImageConfig.size,
      fonts: [
        {
          name: 'Geist Mono',
          data: await fetch(
            'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;700&display=swap'
          ).then((res) => res.arrayBuffer()),
          style: 'normal',
        },
      ],
    }
  )
} 