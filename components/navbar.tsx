"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="fixed top-0 z-40 w-full border-b border-[#2A2A2A] bg-[#111111]/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-center px-4 md:px-6">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search designs..."
            className="w-full bg-[#1C1C1C] pl-9 text-white placeholder:text-muted-foreground"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div
        className={cn(
          "absolute left-1/2 top-20 z-50 w-[90%] -translate-x-1/2 transform rounded-lg bg-[#1C1C1C] p-4 shadow-lg transition-all duration-200 md:hidden",
          searchQuery ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search designs..."
            className="w-full bg-[#2A2A2A] pl-9 text-white placeholder:text-muted-foreground"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

