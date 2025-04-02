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
import { Input } from "@/components/ui/input"
import {
  CuboidIcon as Cube,
  Image,
  Layers3,
  Palette,
  Sparkles,
  Wand2,
  Heart,
  ShieldCheck,
  Home,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

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
  { name: "Bookmarks", href: "/bookmarks", icon: Heart },
  { name: "Admin", href: "/admin", icon: ShieldCheck },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const { state, toggleSidebar } = useSidebar()

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r border-[#2A2A2A]" {...props}>
      <SidebarHeader className="flex flex-col gap-4 p-4">
        <Link href="/" className="flex items-center">
          {state === "collapsed" ? (
            <Home className="h-5 w-5" />
          ) : (
            <span className="text-2xl font-bold tracking-tight">PromptSauce</span>
          )}
        </Link>
        <div className={cn("w-full", state === "collapsed" ? "opacity-0" : "opacity-100")}>
          <Input
            placeholder="Filter prompts..."
            className="w-full bg-[#1C1C1C] text-white placeholder:text-muted-foreground"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
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

