"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { useState } from "react"

export function MobileNav() {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                    <Link
                        href="/features"
                        className="text-lg font-medium hover:text-blue-600 transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        Features
                    </Link>
                    <Link
                        href="/community"
                        className="text-lg font-medium hover:text-blue-600 transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        Community
                    </Link>
                    <Link
                        href="/download"
                        className="text-lg font-medium hover:text-blue-600 transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        Download
                    </Link>
                    <div className="flex flex-col gap-2 pt-4">
                        <Link href="/sign-in" onClick={() => setOpen(false)}>
                            <Button variant="outline" className="w-full">
                                Sign In
                            </Button>
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

