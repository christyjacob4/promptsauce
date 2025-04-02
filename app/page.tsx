import { Gallery } from "@/components/gallery"
import { HeroSection } from "@/components/hero-section"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppHeader } from "@/components/app-header"

export default function Home() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-6xl">
            <HeroSection />
            <Gallery />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

