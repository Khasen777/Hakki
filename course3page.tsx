import { ModernHeader } from "@/components/modern-header"
import { ModernFooter } from "@/components/modern-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Code,
  Database,
  Globe,
  Laptop,
  Server,
  Smartphone,
  Star,
  ChevronRight,
  BookOpenCheck,
  Users,
  Award,
  Zap,
} from "lucide-react"
import { Play } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <ModernHeader />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent/30 dark:from-primary-900/20 dark:to-accent/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

          <div className="container relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6 animate-slide-up">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    <span className="font-medium">Transform Your Future With Code</span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none font-poppins">
                    Learn to Code with{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      Hakki
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-xl text-muted-foreground">
                    Master programming and computer engineering with expert-led courses. Start your journey today.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="px-8 rounded-full h-12 font-medium">
                    Explore Courses
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-12 font-medium">
                    View Learning Paths
                  </Button>
                </div>
                <div className="flex items-center pt-2 text-sm text-muted-foreground">
                  <div className="flex -space-x-2 mr-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full border-2 border-background overflow-hidden"
                      >
                        <img
                          src={`/placeholder.svg?height=32&width=32&text=${i}`}
                          alt={`User ${i}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">50,000+</span> students already learning
                  </div>
                </div>
              </div>

              <div className="mx-auto lg:mx-0 relative">
                <div className="relative animate-slide-up animation-delay-200">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative rounded-2xl overflow-hidden border shadow-strong">
                    <img
                      alt="Students learning to code"
                      className="w-full aspect-video object-cover object-center"
                      src="/placeholder.svg?height=620&width=1100"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <Play className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Watch Demo</div>
                          <div className="text-xs text-white/70">1:15 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating card */}
                <div className="absolute -right-4 -bottom-4 bg-white dark:bg-slate-800 rounded-xl shadow-medium p-4 max-w-[200px] animate-slide-up animation-delay-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="font-medium">Join today</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Start your learning journey with other students</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="text-center mb-8">
              <p className="text-muted-foreground">Trusted by learners from leading companies</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {["Google", "Microsoft", "Amazon", "Meta", "Apple", "IBM"].map((brand) => (
                <div key={brand} className="text-muted-foreground/50 font-semibold text-xl">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                <span className="font-medium">Categories</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-poppins">
                Explore Our Course Categories
              </h2>
              <p className="max-w-[800px] text-muted-foreground text-lg">
                Discover a wide range of courses designed to help you master programming and computer engineering.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Code className="h-8 w-8 text-primary" />,
                  title: "Programming Basics",
                  description: "Learn the fundamentals of programming with courses in Python, JavaScript, and more.",
                },
                {
                  icon: <Globe className="h-8 w-8 text-primary" />,
                  title: "Web Development",
                  description: "Build modern websites and web applications with HTML, CSS, React, and more.",
                },
                {
                  icon: <Smartphone className="h-8 w-8 text-primary" />,
                  title: "Mobile Development",
                  description: "Create apps for iOS and Android with React Native, Flutter, and Swift.",
                },
                {
                  icon: <Database className="h-8 w-8 text-primary" />,
                  title: "Databases",
                  description: "Master SQL, NoSQL, and database design principles for efficient data management.",
                },
                {
                  icon: <Server className="h-8 w-8 text-primary" />,
                  title: "Backend Development",
                  description: "Build robust server-side applications with Node.js, Django, and more.",
                },
                {
                  icon: <Laptop className="h-8 w-8 text-primary" />,
                  title: "Computer Engineering",
                  description:
                    "Explore hardware, networking, and systems design for comprehensive engineering knowledge.",
                },
              ].map((category, index) => (
                <Link
                  key={index}
                  href="#"
                  className="group flex flex-col items-center space-y-2 rounded-xl border bg-background p-6 shadow-subtle transition-all hover:shadow-medium hover:border-primary/20"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="text-center text-muted-foreground">{category.description}</p>
                  <div className="flex items-center text-primary mt-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    <span className="font-medium">Explore Courses</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="w-full py-20 bg-gradient-to-b from-white to-muted/30 dark:from-slate-900 dark:to-slate-800/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                <span className="font-medium">Featured</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-poppins">Featured Courses</h2>
              <p className="max-w-[800px] text-muted-foreground text-lg">
                Our most popular and highly-rated courses to kickstart your learning journey.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Python for Beginners",
                  instructor: "Sarah Johnson",
                  rating: 4.9,
                  students: 12453,
                  price: 49.99,
                  image: "/placeholder.svg?height=200&width=300",
                  badge: "Bestseller",
                },
                {
                  title: "Full-Stack Web Development",
                  instructor: "Michael Chen",
                  rating: 4.8,
                  students: 8721,
                  price: 79.99,
                  image: "/placeholder.svg?height=200&width=300",
                  badge: "New",
                },
                {
                  title: "Data Structures & Algorithms",
                  instructor: "David Williams",
                  rating: 4.7,
                  students: 6542,
                  price: 59.99,
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "React.js Masterclass",
                  instructor: "Emily Rodriguez",
                  rating: 4.9,
                  students: 9876,
                  price: 69.99,
                  image: "/placeholder.svg?height=200&width=300",
                  badge: "Hot",
                },
                {
                  title: "Machine Learning Fundamentals",
                  instructor: "Robert Kim",
                  rating: 4.8,
                  students: 7654,
                  price: 89.99,
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Computer Networking Basics",
                  instructor: "Lisa Thompson",
                  rating: 4.6,
                  students: 5432,
                  price: 54.99,
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border bg-background shadow-subtle transition-all hover:shadow-medium"
                >
                  <Link href="#" className="absolute inset-0 z-10">
                    <span className="sr-only">View Course</span>
                  </Link>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                      width={300}
                      height={200}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    {course.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs font-medium text-white bg-primary rounded-full">
                          {course.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{course.instructor}</p>
                    <div className="mt-2 flex items-center">
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 mr-1 text-sm font-medium">{course.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({course.students.toLocaleString()})</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold">${course.price}</span>
                      <Button size="sm" className="z-20 relative rounded-full">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" size="lg" className="rounded-full font-medium">
                View All Courses
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    <span className="font-medium">Why Hakki</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-poppins">
                    Why Choose Hakki?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground text-lg">
                    We're committed to providing the best learning experience for aspiring programmers and engineers.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      icon: <Award className="h-6 w-6 text-primary" />,
                      title: "Expert Instructors",
                      description: "Learn from industry professionals with years of real-world experience.",
                    },
                    {
                      icon: <Laptop className="h-6 w-6 text-primary" />,
                      title: "Hands-on Projects",
                      description: "Apply your knowledge with practical projects that build your portfolio.",
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-primary" />,
                      title: "Flexible Learning",
                      description: "Study at your own pace with lifetime access to course materials.",
                    },
                    {
                      icon: <Users className="h-6 w-6 text-primary" />,
                      title: "Community Support",
                      description: "Join a community of learners and get help when you need it.",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {feature.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-70"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-strong">
                  <img
                    alt="Students collaborating"
                    className="w-full aspect-[4/3] object-cover"
                    src="/placeholder.svg?height=600&width=800"
                  />
                </div>
                {/* Floating stats card */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl shadow-medium p-4 max-w-[200px]">
                  <div className="flex flex-col items-center text-center">
                    <BookOpenCheck className="h-10 w-10 text-primary mb-2" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">Courses Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-poppins">
                Ready to Start Learning?
              </h2>
              <p className="text-white/80 text-lg max-w-[600px]">
                Join thousands of students already learning on Hakki and take the next step in your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full rounded-full bg-white text-primary hover:bg-white/90"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-white text-white hover:bg-white/20"
                >
                  View Pricing
                </Button>
              </div>
              <div className="text-white/70 text-sm">No credit card required. Start your free trial today.</div>
            </div>
          </div>
        </section>
      </main>

      <ModernFooter />
    </div>
  )
}

