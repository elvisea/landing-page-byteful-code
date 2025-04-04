'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTranslation } from 'react-i18next'

import { Button } from "@/components/ui/button"

import { useClickTracking } from "../hooks/useClickTracking"
import { textColor, bgColor, buttonStyles } from "../styles/theme"

export function Hero() {
  const { t } = useTranslation()

  const handleClickContact = useClickTracking({
    type: "button",
    data: {
      label:t('hero.cta'),
      category: "cta",
      section: "hero",
      component: "cta_button",
      action: "click_contact",
      elementId: "cta-contact-button",
      elementState: "active",
      elementPosition: "bottom",
      url: "/#contact",
      analyticsGroupId: "conversion",
    },
  });

  const handleClickServices = useClickTracking({
    type: "button",
    data: {
      label: t('hero.services'),
      category: "cta",
      section: "hero",
      component: "cta_button",
      action: "click_services",
      elementId: "cta-services-button",
      elementState: "active",
      elementPosition: "bottom",
      url: "/#services",
      analyticsGroupId: "conversion",
    },
  });

  return (
    <section
      aria-label="Introdução"
      role="banner"
      className="hero-section relative h-screen flex items-center bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-white/[0.05] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className={`inline-block mb-3 px-4 py-1 rounded-full ${bgColor.accentLight} ${textColor.accent} text-sm font-medium`}>
              {t('hero.badge')}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 py-2">
              {t('hero.title')}
            </h1>
            <p className={`text-xl md:text-2xl mb-10 ${textColor.secondary} max-w-3xl mx-auto`}>
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#contact">
                <Button
                  size="lg"
                  onClick={handleClickContact}
                  className={`${buttonStyles.primary} px-8 group`}
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/#services">
                <Button
                  size="lg"
                  onClick={handleClickServices}
                  variant="outline"
                  className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 px-8"
                >
                  {t('hero.services')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 