import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono as GeistMono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SiteFooter } from "@/components/site-footer"

const geistMono = GeistMono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Prompt Sauce",
    template: "%s | Prompt Sauce"
  },
  description: "Create and discover amazing AI prompts for your projects",
  generator: 'v0.dev',
  keywords: ["AI prompts", "prompt engineering", "AI images", "prompt gallery", "generative AI"],
  authors: [{ name: "Christy Jacob", url: "https://x.com/christyjacob4" }],
  creator: "Christy Jacob",
  publisher: "Prompt Sauce",
  metadataBase: new URL("https://promptsauce.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promptsauce.com",
    title: "Prompt Sauce",
    description: "Create and discover amazing AI prompts for your projects",
    siteName: "Prompt Sauce",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Sauce",
    description: "Create and discover amazing AI prompts for your projects",
    creator: "@christyjacob4",
  },
  // Icons will be automatically handled by favicon.tsx and icon.tsx components
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.className} bg-[#111111] text-white antialiased flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              {children}
            </div>
            <SiteFooter className="mt-auto" />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'