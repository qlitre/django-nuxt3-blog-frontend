<script setup lang="ts">
import { Post } from '../../types/blog'

const ctx = useRuntimeConfig();
const route = useRoute();
const slug = route.params.slug;

const { data: article } = await useFetch<Post>(`/api/postDetail`, {
  params: { slug: slug }
})

useHead({
  title: article.value.title,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  link: [{
    rel: "canonical",
    href: `${ctx.siteUrl}/${article.value.slug}/`
  }],
  meta: [
    { name: 'description', content: article.value.description },
    { property: 'og:url', content: `${ctx.siteUrl}/${article.value.slug}/` },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: `${article.value.title} | Qlitre` },
    { property: 'og:description', content: article.value.description },
    { property: 'og:site_name', content: ctx.siteName },
    { property: 'og:image', content: article.value.thumbnail },
    { name: 'twitter:card', content: "summary_large_image" },
    { name: 'twitter:site', content: "@kuri_tter" },
  ],
})

</script>

<template>
  <div class="main">
    <PostDetail :post="article" />
  </div>
</template>