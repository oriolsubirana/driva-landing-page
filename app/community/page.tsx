import Link from "next/link"
import { MessageSquare, MapPin, Award, Users, Heart, Share2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex items-center mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4 -translate-y-[1.5px]" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="mx-auto text-center md:max-w-[58rem]">
        <h1 className="text-4xl font-bold sm:text-5xl">Community</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Experience sports like never before with our innovative social features.
        </p>
      </div>

      <div className="mx-auto grid max-w-[64rem] gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
        <Card>
          <CardHeader>
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <CardTitle>Club Chat & Forums</CardTitle>
            <CardDescription>
              Engage in discussions with AI-powered topic suggestions and stay connected with your athletic community.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <MapPin className="h-8 w-8 text-blue-600" />
            <CardTitle>Live Group Training</CardTitle>
            <CardDescription>Join virtual training sessions with live tracking and group audio chat.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Award className="h-8 w-8 text-blue-600" />
            <CardTitle>Team Challenges</CardTitle>
            <CardDescription>Compete in club vs club challenges and earn rewards together.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-blue-600" />
            <CardTitle>Find Your Tribe</CardTitle>
            <CardDescription>
              Our AI matchmaking connects you with athletes who share your interests, goals, and training schedule.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Heart className="h-8 w-8 text-blue-600" />
            <CardTitle>Support & Motivation</CardTitle>
            <CardDescription>
              Get personalized motivation from our AI coach alongside encouragement from a community that understands
              your journey.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Share2 className="h-8 w-8 text-blue-600" />
            <CardTitle>Share Your Journey</CardTitle>
            <CardDescription>
              Document and share your progress, milestones, and achievements with your network.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Join our growing community today</h2>
        <div className="flex justify-center gap-4">
          <Link href="/download">
            <Button size="lg" variant="outline">
              Download App
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

