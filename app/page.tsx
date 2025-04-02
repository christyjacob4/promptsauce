import { Gallery } from "@/components/gallery"
import { HeroSection } from "@/components/hero-section"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppHeader } from "@/components/app-header"
import { categories } from "@/lib/data"
import Script from "next/script"

export default function Home() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-6xl">
            <Script id="homepage-jsonld" type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                'name': 'Prompt Sauce - AI Prompt Gallery',
                'description': 'Discover and share AI-generated designs and prompts for various styles and categories.',
                'keywords': categories.join(', '),
                'about': {
                  '@type': 'Thing',
                  'name': 'AI Generated Art and Designs',
                  'description': 'A collection of prompts and designs created using AI image generation tools.'
                }
              })}
            </Script>
            <HeroSection />
            <Gallery />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

