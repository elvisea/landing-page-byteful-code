import "./globals.css";

import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import I18nProvider from '@/i18n/I18nProvider'
import { websiteSchema, organizationSchema } from '@/lib/schema'

import { Header } from './components/Header'
import { FirebaseProvider } from "./providers/firebase-provider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

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
      </body>
    </html>
  );
}
