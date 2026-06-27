/**
 * Reads EmailJS public configuration from `process.env`. Safe to import in client
 * components because every variable consumed here is prefixed with `NEXT_PUBLIC_`
 * (and Next.js auto-inlines any `NEXT_PUBLIC_*` reference that is statically
 * resolvable at build/dev time).
 *
 * IMPORTANT: only read env vars with **literal** keys (e.g.
 * `process.env.NEXT_PUBLIC_EMAILJS_USER_ID`). Dynamic lookups
 * (`process.env[someKey]`) are NOT inlined by webpack's `DefinePlugin` and
 * resolve to `undefined` in the browser.
 */

export type EmailJsConfig = {
  publicKey: string
  serviceId: string
  templateId: string
  missingKeys: readonly string[]
}

export const getEmailJsConfig = (): EmailJsConfig => {
  // Static lookups — must remain literal so Next.js inlines them.
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ''
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''

  const missingKeys = (
    [
      ['NEXT_PUBLIC_EMAILJS_USER_ID', publicKey],
      ['NEXT_PUBLIC_EMAILJS_SERVICE_ID', serviceId],
      ['NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', templateId],
    ] as const
  )
    .filter(([, value]) => !value)
    .map(([key]) => key)

  return { publicKey, serviceId, templateId, missingKeys }
}