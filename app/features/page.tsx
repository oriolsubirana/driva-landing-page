import Link from "next/link"
import {
  Calendar,
  Clock,
  Target,
  Users,
  Trophy,
  BarChart,
  MessageSquare,
  Share2,
  Heart,
  Award,
  ArrowLeft,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeaturesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex items-center mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4 -mt-0.5" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="mx-auto text-center md:max-w-[58rem]">
        <h1 className="text-4xl font-bold sm:text-5xl">Features</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to manage your athletic club, organize events, and stay motivated.
        </p>
      </div>

      <Tabs defaultValue="events" className="mx-auto max-w-4xl mt-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="events">Event Management</TabsTrigger>
          <TabsTrigger value="gamification">Gamification</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>
        <TabsContent value="events" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Calendar className="h-10 w-10 text-blue-600" />
                <CardTitle>Smart Event Planning</CardTitle>
                <CardDescription>
                  Create and manage events with intelligent route suggestions, pace groups, and weather forecasts.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-blue-600" />
                <CardTitle>Real-time Tracking</CardTitle>
                <CardDescription>
                  Monitor participant progress, pace, and location during events with live updates.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-blue-600" />
                <CardTitle>Custom Routes</CardTitle>
                <CardDescription>
                  Design and share custom routes with elevation profiles and difficulty ratings.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-blue-600" />
                <CardTitle>Group Management</CardTitle>
                <CardDescription>
                  Organize participants into pace groups and assign team leaders effortlessly.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="gamification" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Trophy className="h-10 w-10 text-blue-600" />
                <CardTitle>Achievements</CardTitle>
                <CardDescription>
                  Unlock badges and achievements as you reach new milestones in your athletic journey.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 text-blue-600" />
                <CardTitle>Leaderboards</CardTitle>
                <CardDescription>
                  Compete with friends and club members on various performance metrics and challenges.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-blue-600" />
                <CardTitle>Weekly Challenges</CardTitle>
                <CardDescription>
                  Join exciting weekly challenges with rewards and recognition for top performers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-blue-600" />
                <CardTitle>Points System</CardTitle>
                <CardDescription>
                  Earn points for activities, engagement, and helping others in the community.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="community" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-blue-600" />
                <CardTitle>Club Forums</CardTitle>
                <CardDescription>
                  Engage in discussions, share tips, and connect with fellow athletes in your club.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Share2 className="h-10 w-10 text-blue-600" />
                <CardTitle>Social Sharing</CardTitle>
                <CardDescription>
                  Share your achievements, routes, and events with your network and social media.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-blue-600" />
                <CardTitle>Support Network</CardTitle>
                <CardDescription>Find training partners, mentors, and supporters within the community.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-blue-600" />
                <CardTitle>Club Management</CardTitle>
                <CardDescription>
                  Create and manage clubs with tools for communication, events, and member tracking.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to experience these features?</h2>
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

