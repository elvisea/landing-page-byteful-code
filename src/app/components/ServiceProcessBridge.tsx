'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"

import { useClickTracking } from "../hooks/useClickTracking"
import { fontSize, fontWeight } from "../styles/theme"

export function ServiceProcessBridge() {
  const { t } = useTranslation()

  const handleClickProcess = useClickTracking({
    type: "button",
    data: {
      label: t("processBridge.knowOurProcess"),
      category: "cta",
      section: "service_process_bridge",
      component: "cta_button",
      action: "click_process",
      elementId: "cta-process-button",
      elementState: "active",
      elementPosition: "bottom",
      url: "/#process",
      analyticsGroupId: "conversion",
    },
  });

  const handleClickContact = useClickTracking({
    type: "button",
    data: {
      label: t("processBridge.requestAQuote"),
      category: "cta",
      section: "service_process_bridge",
      component: "cta_button",
      action: "click_contact",
      elementId: "cta-contact-button",
      elementState: "active",
      elementPosition: "bottom",
      url: "/contact",
      analyticsGroupId: "conversion",
    },
  });
  
  return (
    <section
      aria-label="Transição de Serviços"
      role="complementary"
      className="py-16 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* CTA no estilo do Formulário CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-xl overflow-hidden">
            <div className="p-10 md:p-16 text-center">
              <h2 className={`${fontSize["3xl"]} md:${fontSize["4xl"]} ${fontWeight.bold} text-white mb-6`}>
                {t("processBridge.title")}
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                {t("processBridge.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#process">
                  <Button
                    size="lg"
                    onClick={handleClickProcess}
                    className="bg-white text-blue-600 hover:bg-blue-50 group px-8"
                  >
                    {t("processBridge.knowOurProcess")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>

                <Link href="/contact" passHref>
                  <Button
                    size="lg"
                    onClick={handleClickContact}
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-blue-700/20 px-8"
                  >
                    {t("processBridge.requestAQuote")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 