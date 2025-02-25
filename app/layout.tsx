import type React from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="group">
                <Logo className="transition-transform hover:scale-105 inline-block" />
              </Link>
              <nav className="hidden gap-6 md:flex">
                <Link href="/features" className="text-sm font-medium hover:underline">
                  Features
                </Link>
                <Link href="/community" className="text-sm font-medium hover:underline">
                  Community
                </Link>
                <Link href="/download" className="text-sm font-medium hover:underline">
                  Download
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <Link href="/sign-in">
                  <Button variant="outline" className="hidden md:inline-flex">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </header>
          {children}
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
              <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                <div className="flex items-center gap-2">
                  <Logo size="small" />
                  <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built for athletes, by athletes. © 2025 Driva. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
  generator: 'v0.dev'
};
