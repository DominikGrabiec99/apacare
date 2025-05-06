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
    RECEIVER_EMAIL: process.env.NUXT_RECEIVER_EMAIL,
    RESEND_SENDER: process.env.NUXT_RESEND_SENDER,
    RESEND_API_KEY: process.env.NUXT_RESEND_API_KEY,
    SENDGRID_API_KEY: process.env.NUXT_SENDGRID_API_KEY,
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
  ],
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
