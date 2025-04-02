import { Gallery } from "@/components/gallery"
import { getBookmarkedAssets } from "@/lib/data"
import { Heart } from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppHeader } from "@/components/app-header"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Your Bookmarks",
  description: "View and manage your saved AI-generated designs and prompts",
  alternates: {
    canonical: "/bookmarks",
  },
  openGraph: {
    title: "Your Bookmarks | Prompt Sauce",
    description: "View and manage your saved AI-generated designs and prompts",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function BookmarksPage() {
  const bookmarkedAssets = getBookmarkedAssets()

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-6xl">
            <Script id="bookmarks-jsonld" type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                'name': 'Your Bookmarked AI Prompts',
                'description': 'Your personal collection of saved AI-generated designs and prompts'
              })}
            </Script>
            <div className="mb-10">
              <h1 className="text-3xl font-bold tracking-tight">Your Bookmarks</h1>
              <p className="mt-3 text-muted-foreground">Your saved AI-generated designs and illustrations</p>
            </div>

            {bookmarkedAssets.length === 0 ? (
              <div className="flex min-h-[60vh] items-center justify-center">
                <div className="flex max-w-md flex-col items-center justify-center rounded-lg border border-dashed border-[#2A2A2A] bg-[#1C1C1C] p-8 text-center">
                  <Heart className="mb-4 h-12 w-12 text-muted-foreground" />
                  <h2 className="mb-2 text-xl font-medium">No bookmarks yet</h2>
                  <p className="mb-6 text-muted-foreground">Start exploring the gallery and bookmark your favorite designs</p>
                </div>
              </div>
            ) : (
              <Gallery assets={bookmarkedAssets} />
            )}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

