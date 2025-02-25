import type React from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
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
            <div className="container flex h-14 items-center justify-between">
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
                <MobileNav />
              </div>
            </div>
          </header>
          {children}
          <footer className="border-t py-4">
            <div className="container">
              <div className="flex items-center justify-center md:justify-start">
                <p className="text-sm text-muted-foreground">
                  Built for athletes, by athletes. © {new Date().getFullYear()} Driva. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

