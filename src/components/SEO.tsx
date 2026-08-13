import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'École le Studio'
const BASE_URL = 'https://ecolelestudio.com'
const PHONE = '514-677-7713'
const ADDRESS = {
  street: '191B Boulevard Sainte-Rose',
  city: 'Laval',
  region: 'QC',
  postalCode: 'H7L 1L5',
  country: 'CA',
}

interface SEOProps {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  image?: string
  noindex?: boolean
}

export default function SEO({ title, description, path, type = 'website', image, noindex }: SEOProps) {
  const canonical = `${BASE_URL}${path}`
  const ogImage = image || `${BASE_URL}/og-default.jpg`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="fr_CA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo */}
      <meta name="geo.region" content="CA-QC" />
      <meta name="geo.placename" content="Laval" />
    </Helmet>
  )
}

/* ─── JSON-LD Schema Helpers ─── */

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['MusicSchool', 'LocalBusiness'],
    '@id': `${BASE_URL}/#organization`,
    name: 'École le Studio',
    alternateName: 'École de Guitare Benoit Girard',
    description: "École de musique à Sainte-Rose, Laval offrant des cours de piano, guitare, chant, batterie et violon pour tous les âges depuis plus de 20 ans. Plus de 25 professeurs qualifiés et 425 élèves actifs.",
    url: BASE_URL,
    telephone: PHONE,
    email: 'info@ecolelestudio.com',
    foundingDate: '2004',
    founder: {
      '@type': 'Person',
      name: 'Benoit Girard',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.6125,
      longitude: -73.7847,
    },
    areaServed: [
      { '@type': 'City', name: 'Laval', sameAs: 'https://en.wikipedia.org/wiki/Laval,_Quebec' },
      { '@type': 'Place', name: 'Sainte-Rose' },
      { '@type': 'Place', name: 'Fabreville' },
      { '@type': 'Place', name: 'Auteuil' },
      { '@type': 'Place', name: 'Vimont' },
      { '@type': 'Place', name: 'Chomedey' },
      { '@type': 'Place', name: 'Rosemère' },
      { '@type': 'Place', name: 'Sainte-Thérèse' },
      { '@type': 'Place', name: 'Sainte-Dorothée' },
    ],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Interac',
    currenciesAccepted: 'CAD',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 25 },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
    },
    sameAs: [
      'https://www.facebook.com/ecolelestudio',
      'https://www.instagram.com/ecolelestudio',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cours de musique',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Cours de piano', description: 'Cours de piano pour enfants et adultes à Laval' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Cours de guitare', description: 'Cours de guitare pour débutants et avancés à Laval' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Cours de chant', description: 'Cours de chant et technique vocale à Laval' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Cours de batterie', description: 'Cours de batterie et percussion à Laval' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Cours de violon', description: 'Cours de violon classique et contemporain à Laval' } },
      ],
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function CourseSchema({ name, instrument, description, price, path }: {
  name: string
  instrument: string
  description: string
  price: string
  path: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'MusicSchool',
      name: 'École le Studio',
      '@id': `${BASE_URL}/#organization`,
    },
    url: `${BASE_URL}${path}`,
    inLanguage: 'fr',
    courseMode: 'In-person',
    locationCreated: {
      '@type': 'Place',
      name: 'École le Studio — Sainte-Rose, Laval',
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.region,
      },
    },
    about: {
      '@type': 'Thing',
      name: instrument,
    },
    offers: [
      { '@type': 'Offer', name: '30 minutes', price, priceCurrency: 'CAD', eligibleDuration: 'PT30M' },
      { '@type': 'Offer', name: '45 minutes', price: '44', priceCurrency: 'CAD', eligibleDuration: 'PT45M' },
      { '@type': 'Offer', name: '60 minutes', price: '54', priceCurrency: 'CAD', eligibleDuration: 'PT60M' },
    ],
    hasCourseInstance: [
      { '@type': 'CourseInstance', courseMode: 'Onsite', courseWorkload: 'PT30M', instructor: { '@type': 'Person', name: 'Professeurs qualifiés' } },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function FAQSchema({ questions }: { questions: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export { SITE_NAME, BASE_URL, PHONE, ADDRESS }
