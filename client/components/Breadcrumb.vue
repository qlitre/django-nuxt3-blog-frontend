<script setup lang="ts">

import { Category, Tag } from '../types/blog';

type Props = {
  category?: Category
  tag?: Tag
}

const props = defineProps<Props>()

function hasTag(arg: Tag) {
  return !!arg.name
}

function hasCategory(arg: Category) {
  return !!arg.name
}

</script>

<template>
  <ul class="breadcrumb">
    <li class="breadcrumbList">
      <NuxtLink :to='`/`'>記事一覧</NuxtLink>
    </li>
    <li v-if="hasCategory(category)" class="breadcrumbList">
      <NuxtLink :to="`/category/${category.slug}/page/1`">{{ category.name }}</NuxtLink>
    </li>
    <li v-if="hasTag(tag)" class="breadcrumbList">
      <NuxtLink :to="`/tag/${tag.slug}/page/1`">{{ tag.name }}</NuxtLink>
    </li>
  </ul>
</template>


<style scoped>
ul {
  list-style-type: none;
  margin-bottom: 2rem;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
}

.breadcrumbList {
  color: #616269;
  font-size: 1.4rem;
}

.breadcrumbList a {
  color: #331cbf;
}

.breadcrumbList::after {
  content: '>';
  margin: 0 10px;
}

.breadcrumbList:last-child:after {
  content: '';
  margin: 0;
}



@media (max-width: 600px) {
  .breadcrumbList {
    font-size: 14px;
  }
}
</style>
