import Link from "next/link"
import { Smartphone, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DownloadPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Download Driva</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Join thousands of athletes who are already using Driva to achieve their goals and connect with like-minded
          individuals.
        </p>
      </div>

      <div className="mx-auto grid max-w-[64rem] gap-8 md:grid-cols-2 mt-12">
        <Card className="relative overflow-hidden">
          <CardHeader>
            <CardTitle>Mobile App</CardTitle>
            <CardDescription>Download our mobile app to get started</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-4">
              <Smartphone className="h-8 w-8 text-blue-600" />
              <div className="grid gap-1">
                <p className="text-sm font-medium">Available on iOS and Android</p>
                <p className="text-sm text-muted-foreground">Get the full experience on your mobile device</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-1">
              <Link href="#" className="flex-1">
                <img
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  className="h-auto w-full max-w-[200px]"
                />
              </Link>
              <Link href="#" className="flex-1">
                <img
                  src="/play-store-badge.png"
                  alt="Get it on Google Play"
                  className="h-auto w-full max-w-[200px]"
                />
              </Link>
            </div>
          </CardContent>
          <div className="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-blue-600/10" />
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Start Guide</CardTitle>
            <CardDescription>Follow these steps to get started with Driva</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {[
              "Download the app from your preferred store",
              "Create your account and set up your profile",
              "Join or create a club to connect with others",
              "Start participating in events and challenges",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
                <p className="text-sm text-muted-foreground">{step}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 mt-12">
        <Link href="/sign-in">
          <Button size="lg" className="mt-4">
            Create Account
          </Button>
        </Link>
        <p className="text-center text-sm text-muted-foreground">
          By downloading, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

