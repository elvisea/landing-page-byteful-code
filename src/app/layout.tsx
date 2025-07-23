/**
 * @fileoverview Layout principal da aplicação BytefulCode
 * @author BytefulCode
 * @version 1.0.0
 */

import './globals.css';

import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';

import I18nProvider from '@/i18n/I18nProvider';
import { organizationSchema, websiteSchema } from '@/lib/schema';

import Script from 'next/script';
import { Header } from './components/Header';
import { FirebaseProvider } from './providers/firebase-provider';

/**
 * @constant {import('next/font/google').Font}
 * @description Fonte Inter do Google Fonts com subset latino
 */
const inter = Inter({ subsets: ['latin'] });

/**
 * @type {Viewport}
 * @description Configurações de viewport para responsividade
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

/**
 * @type {Metadata}
 * @description Metadados da aplicação para SEO e Open Graph
 * @property {URL} metadataBase - URL base para metadados
 * @property {Object} title - Configurações de título da página
 * @property {string} description - Descrição da empresa para SEO
 * @property {string[]} keywords - Palavras-chave para SEO
 * @property {Object} openGraph - Configurações para compartilhamento em redes sociais
 * @property {Object} robots - Configurações para crawlers
 * @property {Object} alternates - URLs alternativas
 * @property {Object[]} authors - Informações sobre autoria
 * @property {string} generator - Framework utilizado
 * @property {string} applicationName - Nome da aplicação
 * @property {string} referrer - Política de referrer
 * @property {string} creator - Criador da aplicação
 * @property {string} publisher - Publicador da aplicação
 * @property {Object} formatDetection - Configurações de detecção de formato
 * @property {Object} verification - Códigos de verificação de propriedade
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://bytefulcode.tech'),
  title: {
    default: 'BytefulCode - Desenvolvimento Web & Mobile em Curitiba',
    template: '%s | BytefulCode',
  },
  description:
    'Empresa especializada em desenvolvimento de software, aplicativos e sistemas web personalizados em Curitiba. Transformamos ideias em soluções digitais inovadoras com foco em qualidade e resultados.',
  keywords: [
    // Desenvolvimento Web
    'desenvolvimento de software curitiba',
    'desenvolvimento web',
    'desenvolvimento frontend',
    'desenvolvimento backend',
    'desenvolvimento fullstack',
    'criação de sites',
    'criação de landing pages',
    'desenvolvimento de sistemas web',
    'desenvolvimento nextjs',
    'desenvolvimento react',

    // Desenvolvimento Mobile
    'aplicativos mobile',
    'desenvolvimento de apps',
    'aplicativo android',
    'aplicativo ios',
    'desenvolvimento react native',
    'desenvolvimento flutter',
    'app para empresas',

    // Sistemas e Soluções
    'sistemas personalizados',
    'software sob demanda',
    'sistemas empresariais',
    'automação de processos',
    'transformação digital',
    'consultoria de software',
    'integração de sistemas',

    // E-commerce e Marketplace
    'desenvolvimento de ecommerce',
    'criação de loja virtual',
    'integração de marketplace',
    'plataforma de vendas online',

    // Localização e Empresa
    'desenvolvimento de aplicativos curitiba',
    'empresa de software paraná',
    'empresa de tecnologia curitiba',
    'desenvolvimento de sistemas curitiba',
    'fábrica de software curitiba',

    // Serviços Específicos
    'criação de sistemas empresariais',
    'manutenção de software',
    'modernização de sistemas',
    'migração de sistemas legados',
    'desenvolvimento ágil',
    'devops',
    'cloud computing',

    // SEO e Marketing Digital
    'otimização seo',
    'marketing digital',
    'presença digital',
    'análise de dados',

    // Qualidade e Segurança
    'qualidade de software',
    'segurança da informação',
    'testes automatizados',
    'performance web',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://bytefulcode.tech',
    siteName: 'BytefulCode',
    title: 'BytefulCode - Desenvolvimento Web & Mobile em Curitiba',
    description:
      'Transformamos ideias em código. Desenvolvimento de software personalizado para empresas que buscam inovação, qualidade e resultados.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BytefulCode - Desenvolvimento de Software',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bytefulcode.tech',
  },
  authors: [
    {
      name: 'BytefulCode',
      url: 'https://bytefulcode.tech',
    },
  ],
  generator: 'Next.js',
  applicationName: 'BytefulCode',
  referrer: 'origin-when-cross-origin',
  creator: 'BytefulCode',
  publisher: 'BytefulCode',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'a305d1a55df1ae60',
  },
};

/**
 * Layout raiz da aplicação
 * @component
 * @description Componente de layout principal que envolve toda a aplicação
 * 
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Componentes filhos a serem renderizados
 * 
 * @returns {JSX.Element} Estrutura HTML base da aplicação com:
 * - Configuração de idioma
 * - Schema.org markup
 * - Providers (Firebase, i18n, Theme)
 * - Header global
 * - Área de conteúdo dinâmico
 * 
 * @example
 * ```tsx
 * <RootLayout>
 *   <HomePage />
 * </RootLayout>
 * ```
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* 
         * @description Markup Schema.org para SEO
         * Inclui informações estruturadas sobre o website e a organização
         */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteSchema, organizationSchema]),
          }}
        />
      </head>
      <body className={inter.className}>
        <FirebaseProvider>
          <I18nProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
            </ThemeProvider>
          </I18nProvider>
        </FirebaseProvider>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BZJ2563RVC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BZJ2563RVC');
          `}
        </Script>
      </body>
    </html>
  );
}
