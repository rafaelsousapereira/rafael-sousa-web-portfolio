import path from 'node:path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json-summary'],
      include: [
        'src/domain/**',
        'src/application/**',
        'src/infrastructure/**',
        'src/shared/content/**',
        'src/shared/lib/**',
        'src/components/contact-form.tsx',
        'src/components/language-switcher.tsx',
        'src/components/navbar-routes.tsx',
        'src/components/nav-link.tsx',
        'src/presentation/components/ui/timeline.tsx',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
