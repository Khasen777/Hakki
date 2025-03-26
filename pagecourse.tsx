import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, FileText, Globe, PlayCircle, Star, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CoursePage() {
  // This would normally come from a database or API
  const course = {
    title: "Full-Stack Web Development Bootcamp",
    description:
      "Learn to build complete web applications from scratch with modern technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    instructor: {
      name: "Michael Chen",
      title: "Senior Software Engineer",
      bio: "Michael has over 10 years of experience in web development and has worked with companies like Google and Amazon. He specializes in full-stack development and loves teaching others.",
      image: "/placeholder.svg?height=100&width=100",
    },
    rating: 4.8,
    students: 8721,
    lastUpdated: "March 2025",
    language: "English",
    price: 79.99,
    discountPrice: 49.99,
    level: "All Levels",
    duration: "24 hours",
    lectures: 142,
    image: "/placeholder.svg?height=400&width=800",
    whatYouWillLearn: [
      "Build full-stack web applications from scratch",
      "Create responsive and dynamic user interfaces with React",
      "Design and implement RESTful APIs with Node.js and Express",
      "Work with databases including MongoDB and SQL",
      "Deploy applications to production environments",
      "Implement authentication and authorization",
      "Write clean, maintainable, and efficient code",
      "Debug and troubleshoot common web development issues",
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        lectures: 8,
        duration: "1.5 hours",
        items: [
          { title: "Course Overview", duration: "10 min", type: "video" },
          { title: "Setting Up Your Development Environment", duration: "15 min", type: "video" },
          { title: "Web Development Basics", duration: "20 min", type: "video" },
          { title: "Introduction to HTML", duration: "25 min", type: "video" },
          { title: "HTML Practice Exercise", duration: "15 min", type: "exercise" },
        ],
      },
      {
        title: "CSS Fundamentals",
        lectures: 12,
        duration: "2.5 hours",
        items: [
          { title: "Introduction to CSS", duration: "20 min", type: "video" },
          { title: "CSS Selectors", duration: "25 min", type: "video" },
          { title: "Box Model", duration: "15 min", type: "video" },
          { title: "Flexbox Layout", duration: "30 min", type: "video" },
          { title: "CSS Grid Layout", duration: "30 min", type: "video" },
          { title: "Responsive Design", duration: "25 min", type: "video" },
          { title: "CSS Practice Project", duration: "45 min", type: "project" },
        ],
      },
      {
        title: "JavaScript Essentials",
        lectures: 18,
        duration: "4 hours",
        items: [
          { title: "JavaScript Basics", duration: "30 min", type: "video" },
          { title: "Variables and Data Types", duration: "25 min", type: "video" },
          { title: "Functions and Scope", duration: "35 min", type: "video" },
          { title: "Arrays and Objects", duration: "40 min", type: "video" },
          { title: "DOM Manipulation", duration: "45 min", type: "video" },
          { title: "Event Handling", duration: "30 min", type: "video" },
          { title: "Asynchronous JavaScript", duration: "50 min", type: "video" },
          { title: "JavaScript Mini Project", duration: "45 min", type: "project" },
        ],
      },
      {
        title: "React Fundamentals",
        lectures: 22,
        duration: "5 hours",
        items: [
          { title: "Introduction to React", duration: "30 min", type: "video" },
          { title: "Components and Props", duration: "40 min", type: "video" },
          { title: "State and Lifecycle", duration: "45 min", type: "video" },
          { title: "Handling Events", duration: "30 min", type: "video" },
          { title: "Conditional Rendering", duration: "25 min", type: "video" },
          { title: "Lists and Keys", duration: "35 min", type: "video" },
          { title: "Forms in React", duration: "40 min", type: "video" },
          { title: "React Hooks", duration: "50 min", type: "video" },
          { title: "React Router", duration: "45 min", type: "video" },
          { title: "React Project", duration: "60 min", type: "project" },
        ],
      },
      {
        title: "Backend Development with Node.js",
        lectures: 16,
        duration: "4.5 hours",
        items: [
          { title: "Introduction to Node.js", duration: "30 min", type: "video" },
          { title: "Express.js Basics", duration: "40 min", type: "video" },
          { title: "RESTful API Design", duration: "45 min", type: "video" },
          { title: "Middleware", duration: "30 min", type: "video" },
          { title: "Error Handling", duration: "35 min", type: "video" },
          { title: "Authentication with JWT", duration: "50 min", type: "video" },
          { title: "Backend Project", duration: "60 min", type: "project" },
        ],
      },
      {
        title: "Database Integration",
        lectures: 14,
        duration: "3.5 hours",
        items: [
          { title: "Introduction to Databases", duration: "25 min", type: "video" },
          { title: "MongoDB Basics", duration: "35 min", type: "video" },
          { title: "Mongoose ODM", duration: "40 min", type: "video" },
          { title: "CRUD Operations", duration: "45 min", type: "video" },
          { title: "SQL Databases Overview", duration: "30 min", type: "video" },
          { title: "Database Project", duration: "55 min", type: "project" },
        ],
      },
      {
        title: "Full-Stack Project",
        lectures: 10,
        duration: "3 hours",
        items: [
          { title: "Project Planning", duration: "20 min", type: "video" },
          { title: "Frontend Implementation", duration: "60 min", type: "video" },
          { title: "Backend Implementation", duration: "60 min", type: "video" },
          { title: "Database Integration", duration: "40 min", type: "video" },
          { title: "Deployment", duration: "30 min", type: "video" },
          { title: "Final Project Submission", duration: "30 min", type: "project" },
        ],
      },
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        date: "2 months ago",
        comment:
          "This course is absolutely amazing! Michael is an excellent instructor who explains complex concepts in a way that's easy to understand. I went from knowing almost nothing about web development to building my own full-stack applications. Highly recommended!",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "David Lee",
        rating: 4,
        date: "3 months ago",
        comment:
          "Great course with lots of practical examples. The projects really helped solidify my understanding. The only reason I'm giving 4 stars instead of 5 is that some of the content could use updating to the latest versions of the frameworks.",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "Emily Rodriguez",
        rating: 5,
        date: "1 month ago",
        comment:
          "I've taken several web development courses, and this is by far the best one. Michael doesn't just teach you how to code, but also explains the why behind everything. The course is well-structured and the pace is perfect.",
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              Hakki
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/courses" className="font-medium transition-colors hover:text-primary">
                Courses
              </Link>
              <Link href="#" className="font-medium transition-colors hover:text-primary">
                For Business
              </Link>
              <Link href="#" className="font-medium transition-colors hover:text-primary">
                Become an Instructor
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Course Header */}
        <div className="bg-muted/50 py-8 md:py-12">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Link href="/courses" className="text-muted-foreground hover:text-foreground">
                  Courses
                </Link>
                <span className="text-muted-foreground">/</span>
                <Link href="/courses" className="text-muted-foreground hover:text-foreground">
                  Web Development
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
              <p className="text-muted-foreground">{course.description}</p>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {"★".repeat(Math.floor(course.rating))}
                    {course.rating % 1 !== 0 && "☆"}
                    {"☆".repeat(5 - Math.ceil(course.rating))}
                  </div>
                  <span className="ml-1 text-sm">
                    {course.rating} ({course.students.toLocaleString()} students)
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <FileText className="h-4 w-4" />
                  <span>{course.lectures} lectures</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Globe className="h-4 w-4" />
                  <span>{course.language}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={course.instructor.image} alt={course.instructor.name} />
                  <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{course.instructor.name}</div>
                  <div className="text-sm text-muted-foreground">{course.instructor.title}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Last updated: {course.lastUpdated}</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Level: {course.level}</span>
              </div>
            </div>

            <div className="bg-background rounded-lg border shadow-sm p-6 md:ml-auto md:w-[400px]">
              <div className="aspect-video rounded-md overflow-hidden mb-4">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">${course.discountPrice}</span>
                  <span className="ml-2 text-lg text-muted-foreground line-through">${course.price}</span>
                  <span className="ml-2 text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">
                    {Math.round(100 - (course.discountPrice / course.price) * 100)}% off
                  </span>
                </div>

                <Button className="w-full text-lg py-6">Enroll Now</Button>
                <Button variant="outline" className="w-full">
                  Try Free Preview
                </Button>

                <div className="text-sm text-center text-muted-foreground">30-Day Money-Back Guarantee</div>

                <div className="space-y-2">
                  <h3 className="font-medium">This course includes:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <PlayCircle className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration} on-demand video</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>42 downloadable resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span>Full lifetime access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>Access on mobile and TV</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center gap-4">
                  <Button variant="ghost" size="sm">
                    Share
                  </Button>
                  <Button variant="ghost" size="sm">
                    Gift this course
                  </Button>
                  <Button variant="ghost" size="sm">
                    Apply Coupon
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="container py-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="overview"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="curriculum"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
              >
                Curriculum
              </TabsTrigger>
              <TabsTrigger
                value="instructor"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
              >
                Instructor
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
              >
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="pt-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-primary shrink-0 mt-0.5"
                          >
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                    <div className="space-y-4">
                      <p>
                        This comprehensive Full-Stack Web Development Bootcamp will take you from absolute beginner to
                        professional developer. You'll learn to build complete web applications from front to back,
                        using the most in-demand technologies in the industry today.
                      </p>
                      <p>
                        Whether you're looking to launch a career as a web developer, create your own web applications,
                        or enhance your current skill set, this course provides everything you need to succeed in modern
                        web development.
                      </p>
                      <p>
                        Through hands-on projects and real-world examples, you'll gain practical experience that you can
                        immediately apply to your own work. By the end of the course, you'll have built several complete
                        applications and have a portfolio of work to showcase your skills to potential employers or
                        clients.
                      </p>
                      <p>
                        No prior programming experience is required! We'll start from the very basics and gradually
                        build up your skills until you're comfortable with even the most complex topics.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>A computer (Windows, macOS, or Linux) with an internet connection</li>
                      <li>No prior programming experience required - we'll teach you everything you need to know</li>
                      <li>A willingness to learn and practice</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Who This Course is For</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Complete beginners with no previous coding experience</li>
                      <li>Students looking to build full-stack web applications</li>
                      <li>Developers wanting to expand their skill set to include modern frameworks</li>
                      <li>Anyone interested in learning web development comprehensively</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="sticky top-24 space-y-6">
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-bold mb-2">Course Stats</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Skill Level:</span>
                          <span className="font-medium">{course.level}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Students:</span>
                          <span className="font-medium">{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Languages:</span>
                          <span className="font-medium">{course.language}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Lectures:</span>
                          <span className="font-medium">{course.lectures}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">{course.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-bold mb-2">Certifications</h3>
                      <p className="text-sm">Get a certificate of completion when you finish the entire course.</p>
                      <Button variant="outline" className="w-full mt-3">
                        View Sample Certificate
                      </Button>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-bold mb-2">Share This Course</h3>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="icon" className="rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="pt-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Course Content</h2>
                  <div className="text-sm text-muted-foreground">
                    {course.lectures} lectures • {course.duration} total
                  </div>
                </div>

                <Accordion type="multiple" className="w-full">
                  {course.curriculum.map((section, index) => (
                    <AccordionItem key={index} value={`section-${index}`} className="border rounded-lg mb-4">
                      <AccordionTrigger className="px-4 hover:no-underline">
                        <div className="flex flex-col items-start text-left">
                          <div className="font-bold">{section.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {section.lectures} lectures • {section.duration}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pt-0">
                        <div className="space-y-1">
                          {section.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-center justify-between py-2 hover:bg-muted/50 px-2 rounded-md"
                            >
                              <div className="flex items-center gap-3">
                                {item.type === "video" ? (
                                  <PlayCircle className="h-4 w-4 text-muted-foreground" />
                                ) : item.type === "exercise" ? (
                                  <FileText className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <Globe className="h-4 w-4 text-muted-foreground" />
                                )}
                                <span className="text-sm">{item.title}</span>
                              </div>
                              <div className="text-xs text-muted-foreground">{item.duration}</div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="instructor" className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={course.instructor.image} alt={course.instructor.name} />
                    <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">{course.instructor.name}</h2>
                    <p className="text-muted-foreground">{course.instructor.title}</p>

                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm">{course.rating} Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">{course.students.toLocaleString()} Students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <PlayCircle className="h-4 w-4" />
                        <span className="text-sm">12 Courses</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">About the Instructor</h3>
                  <p>{course.instructor.bio}</p>
                  <p>
                    Michael is passionate about teaching and has helped thousands of students achieve their goals in web
                    development. His teaching style focuses on practical, hands-on learning with real-world examples.
                  </p>
                  <p>
                    When not teaching, Michael works as a consultant for tech startups and contributes to open-source
                    projects. He holds a Master's degree in Computer Science and is constantly updating his skills to
                    stay current with the latest technologies.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="pt-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Student Feedback</h2>
                    <div className="flex items-center gap-2">
                      <div className="text-5xl font-bold">{course.rating}</div>
                      <div className="space-y-1">
                        <div className="flex text-yellow-400">
                          {"★".repeat(Math.floor(course.rating))}
                          {course.rating % 1 !== 0 && "☆"}
                          {"☆".repeat(5 - Math.ceil(course.rating))}
                        </div>
                        <div className="text-sm text-muted-foreground">Course Rating</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        const percentage =
                          rating === 5 ? 78 : rating === 4 ? 15 : rating === 3 ? 5 : rating === 2 ? 1 : 1
                        return (
                          <div key={rating} className="flex items-center gap-2">
                            <div className="text-sm w-2">{rating}</div>
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <Progress value={percentage} className="h-2 flex-1" />
                            <div className="text-sm w-8 text-right">{percentage}%</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                  <div className="space-y-6">
                    {course.reviews.map((review, index) => (
                      <div key={index} className="border-b pb-6 last:border-0">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={review.image} alt={review.name} />
                            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="font-medium">{review.name}</div>
                            <div className="flex items-center gap-2">
                              <div className="flex text-yellow-400">
                                {"★".repeat(review.rating)}
                                {"☆".repeat(5 - review.rating)}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <p className="text-sm mt-2">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      Load More Reviews
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">© 2025 Hakki. All rights reserved.</p>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

