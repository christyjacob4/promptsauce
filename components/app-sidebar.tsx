"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarSeparator,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  CuboidIcon as Cube,
  Image,
  Layers3,
  Palette,
  Sparkles,
  Wand2,
  Heart,
  ShieldCheck,
  PanelLeftClose,
  PanelLeft,
  Zap,
  Upload,
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const categories = [
  { id: "3d", name: "3D", icon: Cube },
  { id: "isometric", name: "Isometric", icon: Layers3 },
  { id: "ghibli", name: "Ghibli", icon: Sparkles },
  { id: "illustration", name: "Illustration", icon: Image },
  { id: "minimal", name: "Minimal", icon: Palette },
  { id: "fantasy", name: "Fantasy", icon: Wand2 },
]

// Secondary navigation items for the sidebar footer
const navSecondary = [
  { name: "Submit", href: "/submit", icon: Upload },
  { name: "Bookmarks", href: "/bookmarks", icon: Heart },
  { name: "Admin", href: "/admin", icon: ShieldCheck },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const { state, toggleSidebar } = useSidebar()
  const pathname = usePathname()
  
  // Only show categories on home page, not on bookmarks or admin pages
  const showCategories = !pathname.includes('/bookmarks') && !pathname.includes('/admin')

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r border-[#2A2A2A]" {...props}>
      <SidebarHeader className="flex items-center justify-center p-4">
        <Link href="/" className="flex items-center">
          {state === "collapsed" ? (
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#3F8CFF]">
              <Zap className="h-5 w-5 text-white" />
            </div>
          ) : (
            <div className="flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#3F8CFF] mr-2">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">PromptSauce</span>
            </div>
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {showCategories && (
          <SidebarGroup>
            <SidebarGroupLabel>Categories</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {categories.map((category) => (
                  <SidebarMenuItem key={category.id}>
                    <SidebarMenuButton
                      isActive={activeFilters.includes(category.id)}
                      onClick={() => toggleFilter(category.id)}
                      className={cn(
                        activeFilters.includes(category.id)
                          ? "bg-[#3F8CFF] text-white hover:bg-[#3F8CFF]/90"
                          : "hover:bg-[#2A2A2A]"
                      )}
                      tooltip={category.name}
                    >
                      <category.icon className="h-4 w-4" />
                      <span>{category.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          {navSecondary.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                className="hover:bg-[#2A2A2A] text-muted-foreground hover:text-white"
                tooltip={item.name}
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={toggleSidebar}
              className="hover:bg-[#2A2A2A] text-muted-foreground hover:text-white"
              tooltip={state === "expanded" ? "Collapse sidebar" : "Expand sidebar"}
            >
              {state === "expanded" ? (
                <PanelLeftClose className="h-4 w-4" />
              ) : (
                <PanelLeft className="h-4 w-4" />
              )}
              <span>{state === "expanded" ? "Collapse sidebar" : "Expand"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

