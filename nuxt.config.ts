import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'path'
import { createCommonJS } from 'mlly'
const { __dirname } = createCommonJS(import.meta.url)

const { BASE_URL, API_KEY } = process.env;


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: 'client/',
    ssr: true,
    privateRuntimeConfig: {
        baseUrl: BASE_URL,
        apiKey: API_KEY,
    },
    publicRuntimeConfig: {
        siteUrl: 'https://roaring-gelato-42d6f2.netlify.app',
        siteName: "Qlitre's Life",
        topDescription: "Django+Nuxt3で作った日記サイトです。"
    },
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css: ["vuetify/lib/styles/main.sass",],
    build: {
        transpile: ["vuetify"],
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },
    //css: ['@/assets/css/reset.css', '@/assets/css/style.css', '@/assets/css/root.css',],
    hooks: {
        'pages:extend'(pages) {
            pages.push({
                name: 'page',
                path: '/page/:p',
                file: resolve(__dirname, 'client/pages/index.vue')
            }),
                pages.push({
                    name: 'tag',
                    path: '/tag/:tagSlug/page/:p',
                    file: resolve(__dirname, 'client/pages/index.vue')
                }),
                pages.push({
                    name: 'category',
                    path: '/category/:categorySlug/page/:p',
                    file: resolve(__dirname, 'client/pages/index.vue')
                })
        }
    },
})
