import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import I18nProvider from '@/i18n/I18nProvider'
import { websiteSchema, organizationSchema } from '@/lib/schema'
import { Header } from './components/Header'

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://landing.bytefulcode.tech'),
  title: {
    default: "BytefulCode - Desenvolvimento Web & Mobile em Curitiba",
    template: "%s | BytefulCode"
  },
  description: "Empresa especializada em desenvolvimento de software, aplicativos e sistemas web personalizados em Curitiba. Transformamos ideias em soluções digitais inovadoras com foco em qualidade e resultados.",
  keywords: [
    "desenvolvimento de software curitiba",
    "desenvolvimento web",
    "aplicativos mobile",
    "sistemas personalizados",
    "desenvolvimento de aplicativos curitiba",
    "empresa de software paraná",
    "criação de sistemas empresariais"
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://landing.bytefulcode.tech",
    siteName: "BytefulCode",
    title: "BytefulCode - Desenvolvimento Web & Mobile em Curitiba",
    description: "Transformamos ideias em código. Desenvolvimento de software personalizado para empresas que buscam inovação, qualidade e resultados.",
    images: [
      {
        url: "/og-image.png", // Você precisará criar esta imagem
        width: 1200,
        height: 630,
        alt: "BytefulCode - Desenvolvimento de Software"
      }
    ]
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
    canonical: "https://landing.bytefulcode.tech"
  },
  authors: [
    {
      name: "BytefulCode",
      url: "https://landing.bytefulcode.tech",
    }
  ],
  generator: "Next.js",
  applicationName: "BytefulCode",
  referrer: "origin-when-cross-origin",
  creator: "BytefulCode",
  publisher: "BytefulCode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "a305d1a55df1ae60",
  },
  other: {
    'priority-hints': "1",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteSchema, organizationSchema])
          }}
        />
      </head>
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
