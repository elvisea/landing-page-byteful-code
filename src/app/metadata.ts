import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://bytefulcode.tech'),
  title: {
    default: "BytefulCode - Desenvolvimento Web & Mobile em Curitiba",
    template: "%s | BytefulCode"
  },
  description: "Empresa especializada em desenvolvimento de software, aplicativos e sistemas web personalizados em Curitiba. Transformamos ideias em soluções digitais inovadoras com foco em qualidade e resultados.",
  keywords: [
    // Desenvolvimento Web
    "desenvolvimento de software curitiba",
    "desenvolvimento web",
    "desenvolvimento frontend",
    "desenvolvimento backend",
    "desenvolvimento fullstack",
    "criação de sites",
    "criação de landing pages",
    "desenvolvimento de sistemas web",
    "desenvolvimento nextjs",
    "desenvolvimento react",
    
    // Desenvolvimento Mobile
    "aplicativos mobile",
    "desenvolvimento de apps",
    "aplicativo android",
    "aplicativo ios",
    "desenvolvimento react native",
    "desenvolvimento flutter",
    "app para empresas",
    
    // Sistemas e Soluções
    "sistemas personalizados",
    "software sob demanda",
    "sistemas empresariais",
    "automação de processos",
    "transformação digital",
    "consultoria de software",
    "integração de sistemas",
    
    // E-commerce e Marketplace
    "desenvolvimento de ecommerce",
    "criação de loja virtual",
    "integração de marketplace",
    "plataforma de vendas online",
    
    // Localização e Empresa
    "desenvolvimento de aplicativos curitiba",
    "empresa de software paraná",
    "empresa de tecnologia curitiba",
    "desenvolvimento de sistemas curitiba",
    "fábrica de software curitiba",
    
    // Serviços Específicos
    "criação de sistemas empresariais",
    "manutenção de software",
    "modernização de sistemas",
    "migração de sistemas legados",
    "desenvolvimento ágil",
    "devops",
    "cloud computing",
    
    // SEO e Marketing Digital
    "otimização seo",
    "marketing digital",
    "presença digital",
    "análise de dados",
    
    // Qualidade e Segurança
    "qualidade de software",
    "segurança da informação",
    "testes automatizados",
    "performance web"
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bytefulcode.tech",
    siteName: "BytefulCode",
    title: "BytefulCode - Desenvolvimento Web & Mobile em Curitiba",
    description: "Transformamos ideias em código. Desenvolvimento de software personalizado para empresas que buscam inovação, qualidade e resultados.",
    images: [
      {
        url: "/og-image.png",
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
    canonical: "https://bytefulcode.tech"
  },
  authors: [
    {
      name: "BytefulCode",
      url: "https://bytefulcode.tech",
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
  }
} 