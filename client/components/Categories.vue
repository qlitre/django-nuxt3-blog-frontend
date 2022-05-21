<script setup lang="ts">
import { PropType } from 'vue';
import { CategoryList } from '../types/blog';


const props = defineProps({
    categories: Array as PropType<CategoryList>,
})

</script>

<template>
    <div class="wrapper">
        <h1 class="pageTitle">カテゴリー</h1>
        <ul>
            <li v-for="category in categories" :key="category.id" class="list">
                <nuxt-link :to="`/category/${category.slug}/page/1`" class="link">
                    {{ category.name }} ({{ category.post_count }})
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 20px 0;
}

.pageTitle {
    font-size: 1.6rem;
    font-weight: bold;
    color: #0d1a3c;
    background-color: #DBDDDA;
    padding: 6px 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}

.list {
    list-style-type: none;
}

.link {
    display: block;
    padding: 10px;
    color: #888;
    font-size: 1.4rem;
}
</style>