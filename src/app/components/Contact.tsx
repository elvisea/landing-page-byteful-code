'use client'

import { useState } from "react"
import Link from "next/link"

import { Check, Loader2, ArrowRight, Mail, Phone, MapPin } from "lucide-react"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

import {
  sectionStyles,
  sectionHeader,
  cardStyles,
  textColor,
  fontSize,
  fontWeight,
  buttonStyles
} from "../styles/theme"

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" }).optional(),
  company: z.string().optional(),
  projectType: z.string(),
  budget: z.string(),
  timeline: z.string(),
  description: z.string().min(10, { message: "Por favor, forneça mais detalhes sobre seu projeto" }),
  contactPreference: z.string(),
  services: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Selecione pelo menos um serviço",
  }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos e condições",
  }),
})

export function Contact() {
  const PHONE_NUMBER = '5541992190528';
  const EMAIL_CONTACT = process.env.EMAIL_CONTACT || "contato@bytefulcode.tech";

  return (
    <section id="contact" className={sectionStyles.gradient}>
      <div className="container mx-auto px-4">
        <div className={sectionHeader.wrapper}>
          <div className={sectionHeader.badge}>
            Contato
          </div>
          <h2 className={sectionHeader.title}>
            Vamos Transformar Sua Ideia em Realidade
          </h2>
          <p className={`${sectionHeader.subtitle} mb-12`}>
            Estamos prontos para entender suas necessidades e criar soluções personalizadas que impulsionem seu negócio.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cartões de Contato */}
            <div className={`${cardStyles.default} p-8 text-center flex flex-col items-center`}>
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className={`${fontSize.xl} ${fontWeight.semibold} ${textColor.primary} mb-2`}>Email</h3>
              <p className={`${textColor.secondary} mb-4`}>Envie-nos um email a qualquer momento</p>
              <a
                href={`mailto:${EMAIL_CONTACT}`}
                className={`${textColor.accent} ${fontWeight.medium} hover:underline`}
              >
                {EMAIL_CONTACT}
              </a>
            </div>

            <div className={`${cardStyles.default} p-8 text-center flex flex-col items-center`}>
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className={`${fontSize.xl} ${fontWeight.semibold} ${textColor.primary} mb-2`}>WhatsApp</h3>
              <p className={`${textColor.secondary} mb-4`}>Estamos disponíveis para chat</p>
              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${textColor.accent} ${fontWeight.medium} hover:underline`}
              >
                (41) 99219-0528
              </a>
            </div>

            <div className={`${cardStyles.default} p-8 text-center flex flex-col items-center`}>
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className={`${fontSize.xl} ${fontWeight.semibold} ${textColor.primary} mb-2`}>Localização</h3>
              <p className={`${textColor.secondary} mb-4`}>Atendemos em todo o Brasil</p>
              <span className={`${textColor.accent} ${fontWeight.medium}`}>
                Curitiba, PR - Brasil
              </span>
            </div>
          </div>

          {/* Formulário CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10 text-center">
              <h3 className={`${fontSize["2xl"]} ${fontWeight.bold} text-white mb-4`}>
                Envie uma mensagem
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Preencha o formulário completo para detalhar seu projeto e receber uma proposta personalizada.
              </p>
              <Link href="/contato" passHref>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 group w-full sm:w-auto px-6 sm:px-8"
                >
                  <span className="truncate">Preencher Formulário Completo</span>
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente do formulário completo que será usado na página separada
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      contactPreference: "email",
      services: [],
      termsAccepted: false,
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true)

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const data = await response.json()

        if (data.error === 'RATE_LIMITED') {
          alert('Muitas tentativas. Por favor, aguarde um momento antes de tentar novamente.')
          return
        }

        throw new Error('Erro ao enviar mensagem')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-100 dark:bg-green-900/30 rounded-full">
            <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className={`${fontSize["2xl"]} ${fontWeight.bold} ${textColor.primary} mb-4`}>
            Solicitação Enviada com Sucesso!
          </h3>
          <p className={`${textColor.secondary} mb-8`}>
            Obrigado pelo seu interesse! Recebemos sua solicitação e entraremos em contato em breve para discutir seu projeto.
          </p>
          <Link href="/" passHref>
            <Button className={buttonStyles.primary}>
              Voltar para a Página Inicial
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-200">Nome Completo*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome"
                      {...field}
                      className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-200">Email*</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      {...field}
                      className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-200">Telefone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(00) 00000-0000"
                      {...field}
                      className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-200">Empresa</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nome da sua empresa"
                      {...field}
                      className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-200">Tipo de Projeto*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="webapp">Aplicação Web</SelectItem>
                      <SelectItem value="mobile">Aplicativo Mobile</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-200">Orçamento*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                      <SelectItem value="under5k">Até R$ 5.000</SelectItem>
                      <SelectItem value="5k-15k">R$ 5.000 - R$ 15.000</SelectItem>
                      <SelectItem value="15k-30k">R$ 15.000 - R$ 30.000</SelectItem>
                      <SelectItem value="30k-50k">R$ 30.000 - R$ 50.000</SelectItem>
                      <SelectItem value="over50k">Acima de R$ 50.000</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-200">Prazo Desejado*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                      <SelectItem value="urgent">Urgente (até 1 mês)</SelectItem>
                      <SelectItem value="1-2months">1-2 meses</SelectItem>
                      <SelectItem value="3-6months">3-6 meses</SelectItem>
                      <SelectItem value="6months+">Mais de 6 meses</SelectItem>
                      <SelectItem value="flexible">Flexível</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="services"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-gray-700 dark:text-gray-200">Serviços Necessários*</FormLabel>
                  <FormDescription className="text-gray-500 dark:text-gray-400">
                    Selecione todos os serviços que você precisa
                  </FormDescription>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { id: "design", label: "Design UI/UX" },
                    { id: "frontend", label: "Desenvolvimento Frontend" },
                    { id: "backend", label: "Desenvolvimento Backend" },
                    { id: "mobile", label: "Desenvolvimento Mobile" },
                    { id: "landing", label: "Landing Page" },
                    { id: "institutional", label: "Site Institucional" },
                    { id: "seo", label: "Otimização SEO" },
                    { id: "maintenance", label: "Manutenção" }
                  ].map((service) => {
                    return (
                      <FormField
                        key={service.id}
                        control={form.control}
                        name="services"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={service.id}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-3 bg-gray-50 dark:bg-gray-700"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, service.id])
                                      : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== service.id
                                        )
                                      )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer text-gray-700 dark:text-gray-200">
                                {service.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    )
                  })}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-200">Descrição do Projeto*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva sua ideia, objetivos, funcionalidades desejadas e qualquer outra informação relevante..."
                    className="min-h-[120px] bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactPreference"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-gray-700 dark:text-gray-200">Preferência de Contato*</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="email" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer text-gray-700 dark:text-gray-200">
                        Email
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="phone" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer text-gray-700 dark:text-gray-200">
                        Telefone
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="whatsapp" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer text-gray-700 dark:text-gray-200">
                        WhatsApp
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="font-normal cursor-pointer text-gray-700 dark:text-gray-200">
                    Concordo com os termos de serviço e política de privacidade*
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className={`w-full ${buttonStyles.primary}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar Solicitação"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
} 