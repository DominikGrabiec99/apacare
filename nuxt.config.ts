export default defineNuxtConfig({
  target: 'static',
  app: {
    head: {
      title: 'Kodent - dystrybutor produktów apacare',
      htmlAttrs: {
        lang: 'pl',
      },
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
  },
  runtimeConfig: {
    smpt: {
      host: process.env.NUXT_SMTP_HOST,
      port: process.env.NUXT_SMTP_PORT,
      secure: process.env.NUXT_SMTP_SECURE,
      user: process.env.NUXT_SMTP_USER,
      password: process.env.NUXT_SMTP_PASSWORD,
    },
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
    public: {
      turnstile: {
        siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
      },
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      failOnError: false,
    },
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
    '@nuxt/image',
    '@nuxtjs/turnstile',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
  turnstile: {
    siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
  },
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
