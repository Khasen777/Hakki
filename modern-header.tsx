"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { BookOpen, Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-subtle py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary-500" />
            <span className="text-xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Hakki
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className={`font-medium text-sm transition-colors relative ${
                isActive("/") ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Home
              {isActive("/") && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />}
            </Link>
            <Link
              href="/courses"
              className={`font-medium text-sm transition-colors relative ${
                isActive("/courses") ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Courses
              {isActive("/courses") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium text-sm transition-colors text-foreground/80 hover:text-primary">
                Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem>
                  <Link href="/courses?category=web-development" className="w-full">
                    Web Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses?category=mobile-development" className="w-full">
                    Mobile Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses?category=data-science" className="w-full">
                    Data Science
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses?category=software-engineering" className="w-full">
                    Software Engineering
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/for-business"
              className="font-medium text-sm transition-colors text-foreground/80 hover:text-primary"
            >
              For Business
            </Link>
            <Link
              href="/become-instructor"
              className="font-medium text-sm transition-colors text-foreground/80 hover:text-primary"
            >
              Become an Instructor
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for courses..."
                className="w-full pl-10 pr-4 h-10 rounded-full bg-muted/50"
              />
            </div>
            <Button variant="ghost" size="sm" className="font-medium">
              Log in
            </Button>
            <Button size="sm" className="font-medium rounded-full px-6">
              Sign up
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white dark:bg-slate-900 z-40 animate-fade-in">
          <div className="container py-8 flex flex-col gap-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search for courses..." className="w-full pl-10 pr-4 h-10" />
            </div>

            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className={`font-medium text-lg p-2 transition-colors ${
                  isActive("/") ? "text-primary bg-primary-50 rounded-md" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/courses"
                className={`font-medium text-lg p-2 transition-colors ${
                  isActive("/courses") ? "text-primary bg-primary-50 rounded-md" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <div className="font-medium text-lg p-2">Categories</div>
              <div className="pl-4 flex flex-col gap-2">
                <Link
                  href="/courses?category=web-development"
                  className="text-foreground/80 hover:text-primary p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  href="/courses?category=mobile-development"
                  className="text-foreground/80 hover:text-primary p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mobile Development
                </Link>
                <Link
                  href="/courses?category=data-science"
                  className="text-foreground/80 hover:text-primary p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Data Science
                </Link>
                <Link
                  href="/courses?category=software-engineering"
                  className="text-foreground/80 hover:text-primary p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Software Engineering
                </Link>
              </div>
              <Link
                href="/for-business"
                className="font-medium text-lg p-2 transition-colors text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Business
              </Link>
              <Link
                href="/become-instructor"
                className="font-medium text-lg p-2 transition-colors text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Become an Instructor
              </Link>
            </nav>

            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="w-full justify-center">
                Log in
              </Button>
              <Button className="w-full justify-center">Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

