"use client"

import { usePathname } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function AppHeader() {
  const pathname = usePathname()
  
  // Set placeholder text based on current route
  const getPlaceholderText = () => {
    if (pathname.startsWith("/bookmarks")) {
      return "Search bookmarks..."
    } else if (pathname.startsWith("/admin")) {
      return "Search admin..."
    } else {
      return "Search designs..."
    }
  }

  return (
    <header className="flex h-16 shrink-0 items-center border-b border-[#2A2A2A] px-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Removed SidebarTrigger as it's moved to the sidebar footer */}
        </div>
        <div className="relative w-full max-w-xl mx-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={getPlaceholderText()}
            className="w-full bg-[#1C1C1C] pl-9 text-white placeholder:text-muted-foreground"
          />
        </div>
        <div className="w-[40px]">
          {/* Empty div for flex spacing to center the search box */}
        </div>
      </div>
    </header>
  )
} 