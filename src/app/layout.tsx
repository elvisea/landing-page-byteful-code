import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from './components/Header'
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BytefulCode - Desenvolvimento Web & Mobile",
  description: "Transformamos ideias em código. Desenvolvimento de software personalizado para empresas que buscam inovação, qualidade e resultados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
