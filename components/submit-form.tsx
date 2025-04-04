"use client"

import { useState } from "react"
import { AssetUploadForm } from "@/components/admin/asset-upload-form"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Upload } from "lucide-react"

export function SubmitForm() {
  const { toast } = useToast()

  return (
    <div className="container max-w-7xl py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Submit Your Design</h1>
        <p className="mt-2 text-muted-foreground">
          Share your AI-generated designs with the community. We'll review your submission and publish it if it meets our guidelines.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border border-[#2A2A2A] bg-[#1C1C1C] p-6">
          <h2 className="text-xl font-semibold mb-4">Submission Guidelines</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>Only submit designs that you've created or have the rights to share</li>
            <li>Provide the actual prompt you used to generate the design</li>
            <li>Select up to 3 relevant categories for better discoverability</li>
            <li>NSFW content is not allowed and will be automatically rejected</li>
            <li>Maximum file size is 5MB (supported formats: JPG, PNG, WebP)</li>
          </ul>
        </div>

        <AssetUploadForm />
      </div>
    </div>
  )
} 