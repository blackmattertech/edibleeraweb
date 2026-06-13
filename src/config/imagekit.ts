const urlEndpoint = (
  import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT as string | undefined
)?.replace(/\/$/, '')

export const IMAGEKIT_URL_ENDPOINT = urlEndpoint ?? ''
export const IMAGEKIT_PUBLIC_KEY =
  (import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY as string | undefined) ?? ''
export const IMAGEKIT_ID =
  (import.meta.env.VITE_IMAGEKIT_ID as string | undefined) ?? ''

export const isImageKitEnabled = Boolean(IMAGEKIT_URL_ENDPOINT)

/** Cache-bust query param for ImageKit assets (bump when files are re-uploaded). */
export const IMAGEKIT_UPDATED_AT = '1781355429537'
export const IMAGEKIT_ANSWERS_UPDATED_AT = '1781355388303'

function getUpdatedAtForPath(path: string): string {
  if (path.startsWith('answers/')) {
    return IMAGEKIT_ANSWERS_UPDATED_AT
  }

  return IMAGEKIT_UPDATED_AT
}

/**
 * Build an ImageKit CDN URL from a path in your ImageKit media library.
 * Falls back to local `/public` paths when ImageKit is not configured.
 *
 * @example imagekitUrl('/cards/1.png')
 * @example imagekitUrl('/cards/1.png', 'w-800,f-auto,q-80')
 */
export function imagekitUrl(path: string, transformations?: string): string {
  const normalizedPath = path.replace(/^\//, '')

  if (!isImageKitEnabled) {
    return path.startsWith('/') ? path : `/${normalizedPath}`
  }

  const base = transformations
    ? `${IMAGEKIT_URL_ENDPOINT}/tr:${transformations}/${normalizedPath}`
    : `${IMAGEKIT_URL_ENDPOINT}/${normalizedPath}`

  return `${base}?updatedAt=${getUpdatedAtForPath(normalizedPath)}`
}
