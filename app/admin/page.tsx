"use client"

import { useState } from "react"
import { AdminLogin } from "@/components/admin/admin-login"
import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppHeader } from "@/components/app-header"

// Simple header for the admin login page
function AdminLoginHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center border-b border-[#2A2A2A] px-4">
      <h1 className="text-xl font-bold mx-auto">Admin Access</h1>
    </header>
  )
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return (
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset>
          <AdminLoginHeader />
          <main className="flex-1 p-6">
            <div className="mx-auto max-w-md">
              <AdminLogin onLogin={() => setIsAuthenticated(true)} />
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    )
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-6xl">
            <AdminDashboard />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

