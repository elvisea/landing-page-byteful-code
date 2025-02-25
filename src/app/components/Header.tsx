'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ModeToggle } from "./ModeToggle"

import { content } from "../content/page-content"
import { buttonStyles, textColor } from "../styles/theme"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsSheetOpen(false)
  }

  // Não mostrar o header na página de contato
  if (pathname === "/contato") return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 shadow-md"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            {content.header.logo}
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/#services"
              className={`${textColor.secondary} hover:${textColor.accent} transition-colors`}
            >
              {content.header.menu.services}
            </Link>
            <Link
              href="/#process"
              className={`${textColor.secondary} hover:${textColor.accent} transition-colors`}
            >
              {content.header.menu.process}
            </Link>
            <Link
              href="/#testimonials"
              className={`${textColor.secondary} hover:${textColor.accent} transition-colors`}
            >
              {content.header.menu.testimonials}
            </Link>
            <Link
              href="/#faq"
              className={`${textColor.secondary} hover:${textColor.accent} transition-colors`}
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              className={`${textColor.secondary} hover:${textColor.accent} transition-colors`}
            >
              {content.header.menu.contact}
            </Link>
            <ModeToggle />
            <Link href="/contato" passHref>
              <Button size="lg" className={buttonStyles.primary}>
                Contato
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center lg:hidden gap-4">
            <ModeToggle />
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <button className="text-gray-700 dark:text-gray-300">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <SheetHeader>
                      <SheetTitle className="text-left text-xl">
                        {content.header.logo}
                      </SheetTitle>
                      <SheetDescription className="text-left">
                        Navegue pelo nosso site
                      </SheetDescription>
                    </SheetHeader>
                  </div>
                  <nav className="flex-1 p-6 flex flex-col space-y-6">
                    <Link
                      href="/#services"
                      className={`${textColor.secondary} hover:${textColor.accent} transition-colors text-lg`}
                      onClick={handleLinkClick}
                    >
                      {content.header.menu.services}
                    </Link>
                    <Link
                      href="/#process"
                      className={`${textColor.secondary} hover:${textColor.accent} transition-colors text-lg`}
                      onClick={handleLinkClick}
                    >
                      {content.header.menu.process}
                    </Link>
                    <Link
                      href="/#testimonials"
                      className={`${textColor.secondary} hover:${textColor.accent} transition-colors text-lg`}
                      onClick={handleLinkClick}
                    >
                      {content.header.menu.testimonials}
                    </Link>
                    <Link
                      href="/#faq"
                      className={`${textColor.secondary} hover:${textColor.accent} transition-colors text-lg`}
                      onClick={handleLinkClick}
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/#contact"
                      className={`${textColor.secondary} hover:${textColor.accent} transition-colors text-lg`}
                      onClick={handleLinkClick}
                    >
                      {content.header.menu.contact}
                    </Link>
                  </nav>
                  <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                    <Link href="/contato" passHref>
                      <Button className={`w-full ${buttonStyles.primary}`} onClick={handleLinkClick}>
                        Contato
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
} 