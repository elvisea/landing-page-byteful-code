'use client'

import { content } from "../content/page-content"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  sectionStyles,
  sectionHeader,
  textColor
} from "../styles/theme"

export function FAQ() {
  const { title, subtitle, items } = content.faq

  return (
    <section id="faq" className={sectionStyles.primary}>
      <div className="container mx-auto px-4">
        <div className={sectionHeader.wrapper}>
          <div className={sectionHeader.badge}>
            FAQ
          </div>
          <h2 className={sectionHeader.title}>
            {title}
          </h2>
          <p className={sectionHeader.subtitle}>
            {subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700">
                <AccordionTrigger className={`text-left ${textColor.primary} py-5 text-lg font-medium`}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className={`${textColor.secondary} pb-5`}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 