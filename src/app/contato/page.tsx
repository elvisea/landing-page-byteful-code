import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

import { ContactForm } from "../components/Contact"
import { WhatsAppButton } from "../components/WhatsAppButton"

import { buttonStyles, textColor, fontSize, fontWeight } from "../styles/theme"

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900/50 pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/" passHref>
              <Button
                variant="outline"
                className={`${buttonStyles.secondary} group flex items-center`}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Voltar para a página inicial
              </Button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium">
              Contato
            </div>
            <h1 className={`${fontSize["4xl"]} ${fontWeight.bold} ${textColor.primary} mb-4`}>
              Formulário de Solicitação
            </h1>
            <p className={`${fontSize.lg} ${textColor.secondary} max-w-2xl mx-auto`}>
              Preencha o formulário abaixo com detalhes sobre seu projeto e entraremos em contato para discutir como podemos ajudar.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>
      <WhatsAppButton />
    </>
  )
} 