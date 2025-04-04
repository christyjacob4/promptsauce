import { SubmitForm } from "@/components/submit-form"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppHeader } from "@/components/app-header"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Submit Your Design",
  description: "Share your AI-generated designs with the PromptSauce community",
  alternates: {
    canonical: "/submit",
  },
  openGraph: {
    title: "Submit Your Design | Prompt Sauce",
    description: "Share your AI-generated designs with the PromptSauce community",
  },
}

export default function SubmitPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-6xl">
            <Script id="submit-jsonld" type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                'name': 'Submit Your Design',
                'description': 'Share your AI-generated designs with the PromptSauce community'
              })}
            </Script>
            
            <SubmitForm />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
} 