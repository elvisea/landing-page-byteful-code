'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

import { fontSize, fontWeight } from "../styles/theme"

export function ServiceProcessBridge() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* CTA no estilo do Formulário CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-xl overflow-hidden">
            <div className="p-10 md:p-16 text-center">
              <h2 className={`${fontSize["3xl"]} md:${fontSize["4xl"]} ${fontWeight.bold} text-white mb-6`}>
                Como Transformamos Ideias em Soluções Digitais
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Nosso processo de desenvolvimento é estruturado para garantir transparência, qualidade e resultados excepcionais em cada etapa do projeto.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#process">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 group px-8"
                  >
                    Conheça Nosso Processo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contato" passHref>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-blue-700/20 px-8"
                  >
                    Solicitar Orçamento
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