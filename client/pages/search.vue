<script setup lang="ts">
import { PostResponce } from '../types/blog'

const route = useRoute()
const page = Number(route.query.page || 1)
const query = String(route.query.q)

const params = {
  keyword: query,
  page: page,
}

const { data: posts, refresh } = await useFetch<PostResponce>('/api/postList', { params: params })

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
  <div class="main">
    <div class="search-form">
      <input v-model="query" type="text" @keyup.enter="(e) => submit((e.target as HTMLInputElement).value)" />
    </div>
    <Posts :posts="posts.results" />
    <div>
      <Pagination :totalPages="posts.total_pages" :currentPage="page" :keyword="query" />
    </div>
  </div>
</template>

<style>
.search-form {
  margin-top: 2rem;
  position: relative;
  margin-bottom: 2rem;
}

input[type=text] {
  border: 1px solid #ccc;
  background-color: #eee;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
  box-shadow: none;
  -webkit-appearance: none;
  transition: box-shadow 0.2s ease;
}

input[type=text]:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(0, 134, 107, 0.25);
}
</style>
