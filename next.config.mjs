/** @type {import('next').NextConfig} */
// Env vars prefixed with `NEXT_PUBLIC_*` are auto-inlined into the client bundle
// by Next.js from `.env*` files and the shell environment. Declaring them in
// `env` here would *override* that inlining (and `next.config.mjs` runs before
// `.env*` files are loaded, so any fallback chain in this file would always
// resolve to an empty string). Keep this config empty for env vars — rely on
// Next.js's automatic inlining and the canonical NEXT_PUBLIC_EMAILJS_* names.
const nextConfig = {
  output: 'export',
  distDir: 'build',
  reactStrictMode: true,
}

export default nextConfig