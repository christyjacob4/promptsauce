"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AssetUploadForm } from "@/components/admin/asset-upload-form"
import { AssetManagement } from "@/components/admin/asset-management"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { LogOut } from "lucide-react"

export function AdminDashboard() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("upload")

  const handleLogout = () => {
    // In a real app, this would clear authentication state
    toast({
      title: "Logged out",
      description: "You have been logged out of the admin dashboard",
    })
    window.location.href = "/"
  }

  return (
    <div className="container max-w-7xl py-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <Button variant="outline" className="gap-2 bg-[#1C1C1C] hover:bg-[#2A2A2A]" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-[#1C1C1C] border border-[#2A2A2A] p-1">
          <TabsTrigger value="upload" className="data-[state=active]:bg-[#3F8CFF] data-[state=active]:text-white">
            Upload New Asset
          </TabsTrigger>
          <TabsTrigger value="manage" className="data-[state=active]:bg-[#3F8CFF] data-[state=active]:text-white">
            Manage Assets
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          <AssetUploadForm />
        </TabsContent>

        <TabsContent value="manage" className="space-y-4">
          <AssetManagement />
        </TabsContent>
      </Tabs>
    </div>
  )
}

