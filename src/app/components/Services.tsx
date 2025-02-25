import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { content } from "../content/page-content"
import { sectionHeader, textColor, bgColor, cardStyles } from "../styles/theme"

export function Services() {
  const { title, subtitle, items } = content.services

  return (
    <section id="services" className={`min-h-screen flex items-center py-24 ${bgColor.secondary}`}>
      <div className="container mx-auto px-4">
        <div className={sectionHeader.wrapper}>
          <div className={sectionHeader.badge}>
            Serviços
          </div>
          <h2 className={sectionHeader.title}>
            {title}
          </h2>
          <p className={sectionHeader.subtitle}>
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((service, index) => (
            <Card key={index} className={cardStyles.bordered}>
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-full ${bgColor.accentLight} flex items-center justify-center mb-4`}>
                  <service.Icon className={`h-6 w-6 ${textColor.accent}`} />
                </div>
                <CardTitle className={textColor.primary}>{service.title}</CardTitle>
                <CardDescription className={textColor.tertiary}>
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={textColor.secondary}>
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start ${textColor.secondary}`}>
                      <span className={`mr-2 mt-1 ${textColor.accent}`}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 