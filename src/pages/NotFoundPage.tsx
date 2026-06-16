import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageContent } from '../components/PageContent'
import { ogImages } from '../config/site'

export function NotFoundPage() {
  return (
    <PageContent>
      <SEO
        title="Page Not Found | Edible Era"
        description="The page you are looking for could not be found. Explore Edible Era services, markets, and reports."
        canonicalPath="/404"
        ogImage={ogImages.default}
        noindex
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: '404', path: '/404' },
        ]}
      />

      <header className="mb-8">
        <h1 className="font-serif text-4xl leading-tight text-[#000000] md:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#6F6F6F]">
          This URL may have changed or no longer exists.
        </p>
      </header>

      <div className="space-y-4 text-base leading-relaxed text-[#6F6F6F]">
        <p>
          Continue to the{' '}
          <Link to="/" className="text-[#000000] underline">
            homepage
          </Link>{' '}
          or browse our{' '}
          <Link to="/services" className="text-[#000000] underline">
            consulting services
          </Link>
          .
        </p>
      </div>
    </PageContent>
  )
}
