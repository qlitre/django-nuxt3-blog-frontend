<script setup lang="ts">
import { Category, Tag, CategoryList, TagList, PostResponce } from '../types/blog'

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

const { data: posts, refresh } = await useFetch<PostResponce>('/api/postList', { params: params })
const { data: categories } = await useFetch<CategoryList>('/api/categoryList')
const { data: tags } = await useFetch<TagList>('/api/tagList')

const category: Category =
    categorySlug !== '' ?
        categories.value.find((content) => content.slug === categorySlug) : { id: '', name: '', slug: '' };

const tag: Tag =
    tagSlug !== '' ?
        tags.value.find((content) => content.slug === tagSlug) : { id: '', name: '', slug: '' };

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


</script>

<template>
    <div>
        <div class="divider">
            <section class="container">
                <Breadcrumb :category="category" :tag="tag" />
                <Posts :posts="posts.results" />
            </section>
            <aside class="aside">
                <SearchForm />
                <Categories :categories="categories" />
                <Tags :tags="tags" />
            </aside>
        </div>
        <Pagination :totalPages="posts.total_pages" :currentPage="page" :categorySlug="categorySlug"
            :tagSlug="tagSlug" />
    </div>
</template>

<style scoped>
@media (min-width: 1160px) {
    .divider {
        display: flex;
        justify-content: space-between;
        width: 1080px;
        margin: 50px auto 0;
        padding-top: 84px;
    }

    .container {
        width: 820px;
    }

    .aside {
        width: 300px;
    }
}

@media (min-width: 820px) and (max-width: 1160px) {
    .divider {
        margin: 20px auto 0;
        width: 740px;
        padding-top: 112px;
    }

    .aside {
        margin-top: 60px;
    }
}

@media (max-width: 820px) {
    .divider {
        margin: 20px 0 0;
        padding: 0 20px;
        padding-top: 112px;
    }

    .aside {
        margin-top: 60px;
        width: 100%;
    }
}
</style>
