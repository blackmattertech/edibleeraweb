import { Helmet } from 'react-helmet-async'
import {
  organizationSchema,
  websiteSchema,
  SITE_URL,
} from '../config/site'

export type BreadcrumbItem = {
  name: string
  path: string
}

export type FAQItem = {
  question: string
  answer: string
}

type SEOProps = {
  title: string
  description: string
  canonicalPath: string
  ogImage: string
  ogType?: string
  breadcrumbs?: BreadcrumbItem[]
  article?: {
    headline: string
    datePublished: string
    dateModified: string
    keywords: string
  }
  faqs?: FAQItem[]
  includeWebsiteSchema?: boolean
}

function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

function buildArticleSchema(
  article: NonNullable<SEOProps['article']>,
  canonicalPath: string,
  description: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description,
    author: {
      '@type': 'Organization',
      name: 'Edible Era Research Team',
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Edible Era',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${canonicalPath}`,
    },
    keywords: article.keywords,
    about: {
      '@type': 'Thing',
      name: 'Edible Oil and Fats Industry India',
    },
  }
}

function buildFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function SEO({
  title,
  description,
  canonicalPath,
  ogImage,
  ogType = 'website',
  breadcrumbs,
  article,
  faqs,
  includeWebsiteSchema = false,
}: SEOProps) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`
  const schemas: object[] = [organizationSchema]

  if (includeWebsiteSchema) {
    schemas.push(websiteSchema)
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(buildBreadcrumbSchema(breadcrumbs))
  }

  if (article) {
    schemas.push(buildArticleSchema(article, canonicalPath, description))
  }

  if (faqs && faqs.length > 0) {
    schemas.push(buildFAQSchema(faqs))
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">
        {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
      </script>
    </Helmet>
  )
}
