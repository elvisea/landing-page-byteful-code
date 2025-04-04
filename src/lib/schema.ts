export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BytefulCode',
  url: 'https://bytefulcode.tech',
  description:
    'Empresa especializada em desenvolvimento de software, aplicativos e sistemas web personalizados em Curitiba.',
  inLanguage: ['pt-BR', 'en', 'es'],
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://bytefulcode.tech/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
  sameAs: [
    'https://www.linkedin.com/company/bytefulcode',
    'https://github.com/bytefulcode',
    'https://instagram.com/bytefulcode',
  ],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BytefulCode',
  legalName: 'BytefulCode Soluções em Tecnologia',
  url: 'https://bytefulcode.tech',
  image: ['https://bytefulcode.tech/og-image.png'],
  description:
    'Desenvolvimento de software personalizado em Curitiba. Especialistas em criação de aplicativos, sistemas web e soluções digitais inovadoras.',
  foundingDate: '2023',
  founders: [
    {
      '@type': 'Person',
      name: 'Elvis',
      jobTitle: 'CEO & Desenvolvedor Full Stack',
      sameAs: ['https://github.com/elvisea', 'https://www.linkedin.com/in/elvisea'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    addressCountry: 'BR',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+55-41-99219-0528',
      contactType: 'customer service',
      email: 'contato@bytefulcode.tech',
      availableLanguage: ['Portuguese', 'English', 'Spanish'],
      contactOption: 'TollFree',
      areaServed: 'BR',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/bytefulcode',
    'https://github.com/bytefulcode',
    'https://instagram.com/bytefulcode',
  ],
  knowsAbout: [
    'Desenvolvimento Web',
    'Desenvolvimento Mobile',
    'React',
    'React Native',
    'Next.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Flutter',
    'Desenvolvimento de Software',
    'UX/UI Design',
    'Cloud Computing',
    'DevOps',
  ],
  areaServed: {
    '@type': 'State',
    name: 'Paraná',
    containsPlace: {
      '@type': 'City',
      name: 'Curitiba',
    },
  },
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Desenvolvimento Web',
        description: 'Criação de sites, aplicações web e sistemas empresariais',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Desenvolvimento Mobile',
        description: 'Desenvolvimento de aplicativos iOS e Android',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Consultoria em Software',
        description: 'Consultoria especializada em desenvolvimento e arquitetura de software',
      },
    },
  ],
};
