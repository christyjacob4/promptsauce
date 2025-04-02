import Link from "next/link"
import { cn } from "@/lib/utils"

interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {}

export function SiteFooter({ className, ...props }: SiteFooterProps) {
  return (
    <footer className={cn("border-t border-[#2A2A2A] bg-[#111111] py-6 w-full", className)} {...props}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Prompt Sauce. Created by{" "}
          <Link
            href="https://x.com/christyjacob4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3F8CFF] hover:underline"
          >
            christyjacob
          </Link>
        </p>
      </div>
    </footer>
  )
}

