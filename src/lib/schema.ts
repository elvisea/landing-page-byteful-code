export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BytefulCode",
  url: "https://landing.bytefulcode.tech",
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BytefulCode",
  url: "https://landing.bytefulcode.tech",
  logo: "https://landing.bytefulcode.tech/logo.png",
  description: "Desenvolvimento de software personalizado em Curitiba",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    addressCountry: "BR"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-41-99219-0528",
    contactType: "customer service",
    email: "contato@bytefulcode.tech"
  }
} 