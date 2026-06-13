import { cn } from '@/lib/utils'
import { SITE_EMAIL, SITE_PHONE, SITE_WHATSAPP } from '@/config/site'

type SocialLink = {
  id: 'facebook' | 'linkedin' | 'whatsapp' | 'phone' | 'email'
  label: string
  href: string
  external?: boolean
}

const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/edible-era',
    external: true,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: SITE_WHATSAPP,
    external: true,
  },
  {
    id: 'phone',
    label: 'Call',
    href: `tel:${SITE_PHONE}`,
    external: false,
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${SITE_EMAIL}`,
    external: false,
  },
]

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="1.2em"
      viewBox="0 0 320 512"
      aria-hidden="true"
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="1.2em"
      viewBox="0 0 448 512"
      aria-hidden="true"
    >
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="1.2em"
      viewBox="0 0 448 512"
      aria-hidden="true"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.1c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 339.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="1.2em"
      viewBox="0 0 512 512"
      aria-hidden="true"
    >
      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.1 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-10.9 18.4-29.8 11.6-46.1l-40-96z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="1.2em"
      viewBox="0 0 512 512"
      aria-hidden="true"
    >
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>
  )
}

const iconMap = {
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
  phone: PhoneIcon,
  email: EmailIcon,
}

type SocialIconButtonsProps = {
  className?: string
  compact?: boolean
  variant?: 'default' | 'outline' | 'premium'
}

export function SocialIconButtons({
  className,
  compact = false,
  variant = 'default',
}: SocialIconButtonsProps) {
  return (
    <ul
      className={cn(
        'social-icon-wrapper inline-flex list-none items-center justify-center',
        compact && 'social-icon-wrapper--compact',
        variant === 'outline' && 'social-icon-wrapper--outline',
        variant === 'premium' && 'social-icon-wrapper--premium',
        compact || variant === 'premium'
          ? 'h-auto gap-0 p-0'
          : 'h-[120px] w-full gap-0 pt-10',
        className,
      )}
    >
      {socialLinks.map((link) => {
        const Icon = iconMap[link.id]

        return (
          <li key={link.id} className="flex items-center">
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={cn('social-icon', link.id)}
              aria-label={link.label}
            >
              <span className="social-icon-tooltip">{link.label}</span>
              <Icon />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
