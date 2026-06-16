import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type PageContentProps = {
  children: ReactNode
  includeHeaderOffset?: boolean
}

export function PageContent({
  children,
  includeHeaderOffset = true,
}: PageContentProps) {
  return (
    <div className="min-h-screen bg-[#FFFFFF]" data-nav-theme="light">
      <main
        className={`mx-auto max-w-4xl px-6 pb-16 ${
          includeHeaderOffset
            ? 'pt-[calc(var(--site-header-height)+4rem)] lg:pt-28'
            : 'pt-0'
        }`}
      >
        {children}
      </main>
    </div>
  )
}

export function PageHeading({
  title,
  intro,
}: {
  title: string
  intro: string
}) {
  return (
    <header className="mb-12">
      <h1 className="font-serif text-4xl font-normal leading-tight text-[#000000] md:text-5xl">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-[#6F6F6F]">{intro}</p>
    </header>
  )
}

export function ContentSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-2xl font-normal text-[#000000]">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-[#6F6F6F]">
        {children}
      </div>
    </section>
  )
}

export function FAQSection({
  title,
  items,
}: {
  title: string
  items: { question: string; answer: string }[]
}) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-2xl font-normal text-[#000000]">{title}</h2>
      <dl className="mt-6 space-y-6">
        {items.map((item) => (
          <div key={item.question}>
            <dt className="text-base font-medium text-[#000000]">
              {item.question}
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-[#6F6F6F]">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function CTABlock({
  title,
  description,
  linkTo,
  linkText,
}: {
  title: string
  description: string
  linkTo: string
  linkText: string
}) {
  const linkClassName =
    'mt-6 inline-block rounded-full bg-[#000000] px-10 py-4 text-sm text-[#FFFFFF] transition-transform hover:scale-[1.03]'
  const isExternalLink =
    linkTo.startsWith('mailto:') ||
    linkTo.startsWith('tel:') ||
    linkTo.startsWith('http')

  return (
    <section className="mt-12 rounded-2xl bg-[#F7F7F7] px-8 py-10 text-center">
      <h2 className="font-serif text-2xl text-[#000000]">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-[#6F6F6F]">{description}</p>
      {isExternalLink ? (
        <a
          href={linkTo}
          className={linkClassName}
          {...(linkTo.startsWith('http')
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {linkText}
        </a>
      ) : (
        <Link to={linkTo} className={linkClassName}>
          {linkText}
        </Link>
      )}
    </section>
  )
}
