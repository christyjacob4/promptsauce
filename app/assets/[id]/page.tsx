import { AssetDetail } from "@/components/asset-detail"
import { getAssetById } from "@/lib/data"
import { notFound } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppHeader } from "@/components/app-header"
import type { Metadata, ResolvingMetadata } from "next"
import Script from "next/script"

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const asset = getAssetById(params.id)
  
  if (!asset) {
    return {
      title: "Prompt Not Found",
      description: "The requested AI prompt could not be found.",
    }
  }

  // Get the parent metadata and merge with our custom ones
  const previousImages = (await parent).openGraph?.images || []
  
  return {
    title: asset.title,
    description: asset.description || "Explore this AI-generated design and its prompt on Prompt Sauce",
    openGraph: {
      title: asset.title,
      description: asset.description || "Explore this AI-generated design and its prompt on Prompt Sauce",
      images: asset.imageUrl ? [asset.imageUrl, ...previousImages] : previousImages,
    },
    twitter: {
      card: "summary_large_image",
      title: asset.title,
      description: asset.description || "Explore this AI-generated design and its prompt on Prompt Sauce",
      images: asset.imageUrl ? [asset.imageUrl] : [],
    },
    alternates: {
      canonical: `/assets/${params.id}`,
    },
  }
}

export default function AssetPage({ params }: Props) {
  const asset = getAssetById(params.id)

  if (!asset) {
    return notFound()
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-5xl">
            <Script id="asset-jsonld" type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                'name': asset.title,
                'description': asset.description,
                'image': asset.imageUrl,
                'dateCreated': asset.createdAt,
                'keywords': asset.categories.join(', '),
                'text': asset.prompt,
              })}
            </Script>
            <AssetDetail asset={asset} />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

