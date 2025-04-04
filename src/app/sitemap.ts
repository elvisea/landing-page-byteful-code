import { MetadataRoute } from 'next'

// URLs base do site
const BASE_URL = 'https://bytefulcode.tech'

// Data de última modificação para cada seção
const LAST_MODIFIED = {
  home: new Date(), // Página principal - atualizada frequentemente
  contact: new Date('2024-03-20'), // Contato - atualizar quando mudar informações
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Página Principal
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: 'daily',
      priority: 1,
    },

    // Página de Contato
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_MODIFIED.contact,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Seções da Página Principal
    {
      url: `${BASE_URL}/#services`,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#process`,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#testimonials`,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/#faq`,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  ]
} 