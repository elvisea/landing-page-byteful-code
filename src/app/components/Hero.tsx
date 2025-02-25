'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

import { content } from "../content/page-content"
import { textColor, bgColor, buttonStyles } from "../styles/theme"

export function Hero() {
  const { title, subtitle, buttonText } = content.hero

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-white/[0.05] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className={`inline-block mb-3 px-4 py-1 rounded-full ${bgColor.accentLight} ${textColor.accent} text-sm font-medium`}>
              Desenvolvimento Web & Mobile
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 py-2">
              {title}
            </h1>
            <p className={`text-xl md:text-2xl mb-10 ${textColor.secondary} max-w-3xl mx-auto`}>
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className={`${buttonStyles.primary} px-8 group`}
                >
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 px-8"
                >
                  Conheça Nossos Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 