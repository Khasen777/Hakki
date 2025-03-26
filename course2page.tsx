import { ModernHeader } from "@/components/modern-header"
import { ModernFooter } from "@/components/modern-footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Filter, Search, SlidersHorizontal, Star, ChevronRight, ChevronLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ModernHeader />

      <main className="flex-1 pt-24">
        <div className="container py-8">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span>Courses</span>
              </div>
              <h1 className="text-3xl font-bold font-poppins">All Courses</h1>
              <p className="text-muted-foreground max-w-2xl">
                Browse our comprehensive collection of programming and computer engineering courses
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="w-full lg:w-64 shrink-0">
                <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-xl border shadow-subtle p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filters
                    </h3>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                      Clear All
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Search */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Search</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search courses..." className="pl-9" />
                      </div>
                    </div>

                    {/* Category Filter */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <div className="space-y-2">
                        {[
                          "Web Development",
                          "Mobile Development",
                          "Programming Languages",
                          "Databases",
                          "Computer Science",
                          "Software Engineering",
                          "DevOps",
                          "Data Science",
                        ].map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox id={`category-${category}`} />
                            <label
                              htmlFor={`category-${category}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Level Filter */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Level</label>
                      <div className="space-y-2">
                        {["Beginner", "Intermediate", "Advanced", "All Levels"].map((level) => (
                          <div key={level} className="flex items-center space-x-2">
                            <Checkbox id={`level-${level}`} />
                            <label
                              htmlFor={`level-${level}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price Filter */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Price Range</label>
                      <Slider defaultValue={[75]} max={100} step={1} className="py-4" />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>$0</span>
                        <span>$100</span>
                      </div>
                    </div>

                    {/* Duration Filter */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Duration</label>
                      <div className="space-y-2">
                        {["0-2 Hours", "3-6 Hours", "7-16 Hours", "17+ Hours"].map((duration) => (
                          <div key={duration} className="flex items-center space-x-2">
                            <Checkbox id={`duration-${duration}`} />
                            <label
                              htmlFor={`duration-${duration}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {duration}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rating Filter */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Rating</label>
                      <div className="space-y-2">
                        {["4.5 & Up", "4.0 & Up", "3.5 & Up", "3.0 & Up"].map((rating) => (
                          <div key={rating} className="flex items-center space-x-2">
                            <Checkbox id={`rating-${rating}`} />
                            <label
                              htmlFor={`rating-${rating}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {rating}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full rounded-lg">Apply Filters</Button>
                  </div>
                </div>
              </div>

              {/* Course Listings */}
              <div className="flex-1">
                <div className="bg-white dark:bg-slate-900 rounded-xl border shadow-subtle p-5 mb-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-sm">
                      Showing <strong>1-12</strong> of <strong>256</strong> courses
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm whitespace-nowrap">Sort by:</span>
                        <Select defaultValue="popular">
                          <SelectTrigger className="w-[180px] h-9">
                            <SelectValue placeholder="Sort by" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="popular">Most Popular</SelectItem>
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="rating">Highest Rated</SelectItem>
                            <SelectItem value="price-low">Lowest Price</SelectItem>
                            <SelectItem value="price-high">Highest Price</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-9 gap-1">
                          <SlidersHorizontal className="h-4 w-4" />
                          <span className="hidden md:inline">View:</span>
                          Grid
                        </Button>
                        <Button variant="ghost" size="sm" className="h-9 gap-1">
                          <SlidersHorizontal className="h-4 w-4" />
                          <span className="hidden md:inline">View:</span>
                          List
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Python for Beginners",
                      instructor: "Sarah Johnson",
                      rating: 4.9,
                      students: 12453,
                      price: 49.99,
                      image: "/placeholder.svg?height=200&width=300",
                      level: "Beginner",
                      duration: "6.5 hours",
                      badge: "Bestseller",
                    },
                    {
                      title: "Full-Stack Web Development",
                      instructor: "Michael Chen",
                      rating: 4.8,
                      students: 8721,
                      price: 79.99,
                      image: "/placeholder.svg?height=200&width=300",
                      level: "Intermediate",
                      duration: "24 hours",
                      badge: "New",
                    },
                    {
                      title: "Data Structures & Algorithms",
                      instructor: "David Williams",
                      rating: 4.7,
                      students: 6542,
                      price: 59.99,
                      image: "/placeholder.svg?height=200&width=300",
                      level: "Intermediate",
                      duration: "18 hours",
                    },
                    {
                      title: "React.js Masterclass",
                      instructor: "Emily Rodriguez",
                      rating: 4.9,
                      students: 9876,
                      price: 69.99,
                      image: "/placeholder.svg?height=200&width=300",
                      level: "All Levels",
                      duration: "15 hours",
                      badge: "Hot",
                    },
                    {
                      title: "Machine Learning Fundamentals",
                      instructor: "Robert Kim",
                      rating: 4.8,
                      students: 7654,
                      price: 89.99,
                      image: "/placeholder.svg?height=200&width=300",
                      level: "Advanced",
                      duration: "20 hours",
                    },
                    {
                      title: "Computer Networking Basics",
                      instructor: "Lisa Thompson",
                      rating: 4.6,
                      students: 5432,
                      price: 54.99,
                      image: "/placeholder.svg?height=200&width=300",
                      level: "Beginner",
                      duration: "8 hours",
                    },
                    {
                      title: "JavaScript for Modern Web Apps",
                      instructor: "Alex Johnson",
                      rating: 4.7,
                      students: 8932,
                      price: 64.99,
                      image: "/placeholder.svg?height=200&width=300",
                      level: "Intermediate",
                      duration: "12 hours",
                    },
                    {
                      title: "Database Design & SQL",
                      instructor: "Maria Garcia",
                      rating: 4.5,
                      students: 6789,
                      price: 49.99,
                      image: "/placeholder.svg?height=200&width=300",
                      level: "Beginner",
                      duration: "10 hours",
                    },
                    {
                      title: "Cloud Computing Essentials",
                      instructor: "James Wilson",
                      rating: 4.8,
                      students: 5678,
                      price: 74.99,
                      image: "/placeholder.svg?height=200&width=300",
                      level: "Intermediate",
                      duration: "16 hours",
                    },
                  ].map((course, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border bg-white dark:bg-slate-900 shadow-subtle transition-all hover:shadow-medium"
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute top-3 left-3 flex gap-2">
                          {course.badge && (
                            <Badge variant="secondary" className="bg-primary text-white border-none">
                              {course.badge}
                            </Badge>
                          )}
                          <Badge variant="outline" className="bg-black/30 text-white border-none backdrop-blur-sm">
                            {course.level}
                          </Badge>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                          <div className="flex items-center gap-1 text-white">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{course.rating}</span>
                            <span className="text-xs text-white/70">({course.students.toLocaleString()})</span>
                          </div>
                          <div className="text-xs font-medium text-white bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                            {course.duration}
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{course.instructor}</p>
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
                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-10 w-10 rounded-full bg-primary text-primary-foreground"
                    >
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="h-10 w-10 rounded-full">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="h-10 w-10 rounded-full">
                      3
                    </Button>
                    <Button variant="outline" size="sm" className="h-10 w-10 rounded-full">
                      4
                    </Button>
                    <Button variant="outline" size="sm" className="h-10 w-10 rounded-full">
                      ...
                    </Button>
                    <Button variant="outline" size="sm" className="h-10 w-10 rounded-full">
                      22
                    </Button>
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ModernFooter />
    </div>
  )
}

