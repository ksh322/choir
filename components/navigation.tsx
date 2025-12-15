"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Members", href: "#members" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm transition-colors hover:text-primary ${
              activeSection === item.href.substring(1)
                ? "text-primary border-l-2 border-primary pl-4"
                : "text-muted-foreground pl-4"
            }`}
          >
            {item.name}
          </Link>
        ))}
        <div className="flex flex-col gap-4 mt-8 pl-4">
          <a href="mailto:agadalein@naver.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  )
}
