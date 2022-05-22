<script setup lang="ts">
import { CategoryList, TagList, PostResponse, About } from '../types/blog'

const ctx = useRuntimeConfig();
const route = useRoute()
const page = Number(route.params.p || 1)
const tagSlug = route.params.tagSlug == undefined ? '' : String(route.params.tagSlug)
const categorySlug = route.params.categorySlug == undefined ? '' : String(route.params.categorySlug)

const params = {
    tagSlug: tagSlug,
    categorySlug: categorySlug,
    page: page
}

const { data: posts, refresh } = await useFetch<PostResponse>('/api/postList', { params: params })
const { data: categories } = await useFetch<CategoryList>('/api/categoryList')
const { data: tags } = await useFetch<TagList>('/api/tagList')
const { data: about } = await useFetch<About>(`/api/about`)

useHead({
    title: ctx.siteName,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    link: [{
        rel: "canonical",
        href: ctx.siteUrl + '/'
    }],
    meta: [
        { name: 'description', content: ctx.topDescription },
        { property: 'og:url', content: ctx.siteUrl },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: ctx.siteName },
        { property: 'og:description', content: ctx.topDescription },
        { property: 'og:site_name', content: ctx.siteName },
        { name: 'twitter:card', content: "summary_large_image" },
        { name: 'twitter:site', content: "@kuri_tter" },
    ],
})

watch(() => route.params, () => refresh())

</script>

<template>
    <v-container class="mt-5">
        <v-row>
            <v-col md="8" cols="12" sm="12">
                <Posts :posts="posts.results" />
            </v-col>
            <v-col md="4" cols="12" sm="12">
                <Categories :categories="categories" />
                <Tags :tags="tags" class="mt-5" />
                <AboutMe :about="about" class="mt-5" />
            </v-col>
        </v-row>
        <Pagination :totalPages="posts.total_pages" :currentPage="page" :categorySlug="categorySlug"
            :tagSlug="tagSlug" />
    </v-container>
</template>
