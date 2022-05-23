<script setup lang="ts">
import { PostResponse } from '../types/blog'

const route = useRoute()
const page = Number(route.query.page || 1)
const query = String(route.query.q)

const params = {
  keyword: query,
  page: page,
}

const { data: posts, refresh } = await useFetch<PostResponse>('/api/postList', { params: params })

function submit(q: string) {
  return navigateTo({
    path: '/search',
    query: {
      q: q
    }
  })
}

watch(() => route.query, () => location.reload())

</script>

<template>
  <v-container class="mt-5">
    <v-form @submit.prevent="submit(query)">
      <v-text-field label="Search" variant="outlined" v-model="query" color="success"></v-text-field>
    </v-form>
    <Posts :posts="posts.results" />
    <div>
      <Pagination :totalPages="posts.total_pages" :currentPage="page" :keyword="query" />
    </div>
  </v-container>
</template>
