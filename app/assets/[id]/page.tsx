import { AssetDetail } from "@/components/asset-detail"
import { getAssetById } from "@/lib/data"
import { notFound } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppHeader } from "@/components/app-header"

export default function AssetPage({ params }: { params: { id: string } }) {
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
            <AssetDetail asset={asset} />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

