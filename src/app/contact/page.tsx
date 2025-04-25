'use client';

import { Metadata } from 'next';
import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';

import { ContactForm } from '../components/Contact';
import { WhatsAppButton } from '../components/WhatsAppButton';

import { usePageTracking } from '../hooks/usePageTracking';
import { buttonStyles, fontSize, fontWeight, textColor } from '../styles/theme';

export const metadata: Metadata = {
  title: 'Entre em Contato | BytefulCode',
  description:
    'Entre em contato com a BytefulCode. Estamos prontos para transformar sua ideia em realidade. Solicite um orçamento para seu projeto de software, aplicativo ou sistema web.',
  keywords: [
    // Contato e Orçamento
    'contato bytefulcode',
    'orçamento software',
    'solicitar orçamento software',
    'contratar desenvolvimento software',
    'preço desenvolvimento aplicativo',
    'custo criação site',
    'valor desenvolvimento sistema',

    // Serviços e Soluções
    'desenvolvimento web curitiba',
    'contato desenvolvimento aplicativos',
    'consultoria tecnologia',
    'projeto software personalizado',
    'desenvolvimento sob demanda',
    'criação aplicativo empresarial',

    // Localização e Atendimento
    'empresa software curitiba',
    'desenvolvedor aplicativos paraná',
    'atendimento desenvolvimento sistemas',
    'empresa tecnologia região sul',

    // Conversão
    'solicitar projeto',
    'iniciar projeto software',
    'contratar desenvolvimento sistema',
    'consultoria gratuita software',
    'avaliação projeto tecnologia',
    'proposta desenvolvimento',
  ],
  openGraph: {
    title: 'Entre em Contato | BytefulCode',
    description:
      'Entre em contato com a BytefulCode. Solicite um orçamento para seu projeto de software, aplicativo ou sistema web.',
    url: 'https://bytefulcode.tech/contact',
    images: [
      {
        url: '/og-image-contact.png',
        width: 1200,
        height: 630,
        alt: 'BytefulCode - Formulário de Contato',
      },
    ],
  },
  alternates: {
    canonical: 'https://bytefulcode.tech/contact',
  },
};

export default function ContactPage() {
  const { t } = useTranslation();

  usePageTracking({
    pageTitle: 'Contact',
    pagePath: '/contact',
  });

  return (
    <>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900/50 pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/" passHref>
              <Button className={`${buttonStyles.secondary} group flex items-center`}>
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {t('form.goBack')}
              </Button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium">
              {t('contact.title')}
            </div>
            <h1 className={`${fontSize['4xl']} ${fontWeight.bold} ${textColor.primary} mb-4`}>
              {t('form.title')}
            </h1>
            <p className={`${fontSize.lg} ${textColor.secondary} max-w-2xl mx-auto`}>
              {t('form.subtitle')}
            </p>
          </div>

          <ContactForm />
        </div>
      </main>
      <WhatsAppButton />
    </>
  );
}
