<script setup lang="ts">

import { PropType } from 'vue';
import { TagList } from '../types/blog';


const props = defineProps({
    tags: Array as PropType<TagList>,
})

</script>

<template>
    <div class="wrapper">
        <h1 class="pageTitle">タグ</h1>
        <ul>
            <li v-for="tag in tags" :key="tag.id" class="list">
                <nuxt-link :to="`/tag/${tag.slug}/page/1`" class="link">
                    {{ tag.name }}
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