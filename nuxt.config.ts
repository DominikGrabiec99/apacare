import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  // ssr: false,
  target: 'static',
  app: {
    baseURL: '/apacare/',
  },
  generate: {
    fallback: '404.html',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['@/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    'shadcn-nuxt',
  ],
  icon: {
    serverBundle: {
      collections: ['material-symbols', 'lucide-lab', 'ri'],
    },
    componentName: 'NuxtIcon',
  },
  googleFonts: {
    families: {
      'DM Sans': true,
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
});
