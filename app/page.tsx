import Link from "next/link"
import {
  ArrowRight,
  Award,
  Calendar,
  MapPin,
  MessageSquare,
  Users,
  Trophy,
  Target,
  Clock,
  BarChart,
  Share2,
  Heart,
  Star,
  Download,
  Smartphone,
  CheckCircle2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Logo } from "@/components/logo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="space-y-6 py-32 sm:py-40">
          <div className="container">
            <div className="mx-auto flex max-w-[60rem] min-h-[60vh] flex-col items-center gap-6 text-center justify-center">
              <h1 className="text-5xl font-bold sm:text-7xl leading-relaxed">
                The Ultimate Platform for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Athletes & Clubs
                </span>
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Join the community that's revolutionizing how athletes connect, compete, and achieve their goals. Manage
                events, track progress, and build lasting connections with AI-powered features.
              </p>
              <div className="flex gap-4">
                <Link href="/sign-in">
                  <Button size="lg" className="flex items-center gap-2">
                    Join Now <ArrowRight className="h-4 w-4 -mt-0.5" />
                  </Button>
                </Link>
                <Link href="/features">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section id="features" className="container space-y-12 py-12 md:py-24">
          <div className="mx-auto text-center md:max-w-[58rem]">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl">Powerful Features for Athletes</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to manage your athletic club, organize events, and stay motivated.
            </p>
          </div>

          <Tabs defaultValue="events" className="mx-auto max-w-4xl relative">
            <TabsList className="flex flex-col sm:grid w-full sm:grid-cols-3 gap-2 sticky top-0 z-50 bg-background">
              <TabsTrigger value="events" className="text-base w-full sm:w-auto">Event Management</TabsTrigger>
              <TabsTrigger value="gamification" className="text-base w-full sm:w-auto">Gamification</TabsTrigger>
              <TabsTrigger value="community" className="text-base w-full sm:w-auto">Community</TabsTrigger>
            </TabsList>
            <TabsContent value="events" className="mt-6 relative z-0">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <Card className="w-full">
                  <CardHeader>
                    <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    <CardTitle className="text-lg sm:text-xl">Smart Event Planning</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Create and manage events with AI-powered route suggestions, intelligent pace groups, and
                      predictive weather forecasts.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    <CardTitle className="text-lg sm:text-xl">Real-time Tracking</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Monitor participant progress with AI-enhanced tracking that provides insights and performance
                      predictions in real-time.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <Target className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    <CardTitle className="text-lg sm:text-xl">Custom Routes</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Design and share custom routes with elevation profiles and difficulty ratings.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <Users className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    <CardTitle className="text-lg sm:text-xl">Group Management</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Organize participants into pace groups and assign team leaders effortlessly.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="gamification" className="mt-6">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <Card className="w-full">
                  <CardHeader>
                    <Trophy className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    <CardTitle className="text-lg sm:text-xl">Achievements</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Unlock badges and achievements as you reach new milestones in your athletic journey.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <BarChart className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    <CardTitle className="text-lg sm:text-xl">Leaderboards</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Compete with friends on AI-analyzed performance metrics that highlight your unique strengths and
                      improvements.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <Target className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    <CardTitle className="text-lg sm:text-xl">Weekly Challenges</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Join AI-generated challenges tailored to your skill level with rewards and recognition for top
                      performers.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <Award className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    <CardTitle className="text-lg sm:text-xl">Points System</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Earn points for activities, engagement, and helping others in the community.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="community" className="mt-6">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <Card className="w-full">
                  <CardHeader>
                    <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    <CardTitle className="text-lg sm:text-xl">Club Forums</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Engage in discussions, share tips, and connect with fellow athletes in your club.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <Share2 className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    <CardTitle className="text-lg sm:text-xl">Social Sharing</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Share your achievements, routes, and events with your network and social media.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    <CardTitle className="text-lg sm:text-xl">Support Network</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Find training partners through AI matchmaking that connects you with compatible athletes based on
                      goals and schedules.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <Users className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    <CardTitle className="text-lg sm:text-xl">Club Management</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Create and manage clubs with tools for communication, events, and member tracking.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Enhanced Community Section */}
        <section id="community" className="border-t bg-muted/50">
          <div className="container space-y-12 py-12 md:py-24">
            <div className="mx-auto text-center md:max-w-[58rem]">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl">Join the Athletic Revolution</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Experience sports like never before with our innovative social features.
              </p>
            </div>

            <div className="mx-auto grid gap-8 md:max-w-[64rem] md:grid-cols-3">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="rounded-full bg-blue-600/10 p-4">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">50K+</h3>
                <p className="text-muted-foreground">Active Athletes</p>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="rounded-full bg-blue-600/10 p-4">
                  <MapPin className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">1000+</h3>
                <p className="text-muted-foreground">Events Organized</p>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="rounded-full bg-blue-600/10 p-4">
                  <Trophy className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">100K+</h3>
                <p className="text-muted-foreground">Goals Achieved</p>
              </div>
            </div>

            <div className="mx-auto grid max-w-[64rem] gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-background/60">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-blue-600/10 p-2">
                        <Star className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-blue-600 text-blue-600" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-muted-foreground">
                      "Driva has transformed how our club organizes events and keeps members engaged. The gamification
                      features make training more fun and motivating!"
                    </blockquote>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="rounded-full bg-muted p-1">
                        <span className="block h-8 w-8 rounded-full bg-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Running Club Leader</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Download Section */}
        <section id="download" className="container space-y-12 py-12 md:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl">Ready to Start Your Journey?</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join thousands of athletes who are already using Driva to achieve their goals and connect with like-minded
              individuals.
            </p>
          </div>

          <div className="mx-auto grid max-w-[64rem] gap-8 md:grid-cols-2">
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
        </section>
      </main>
    </div>
  )
}

