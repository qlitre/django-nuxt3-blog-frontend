<script setup lang="ts">
import { PropType } from 'vue';
import { CategoryList } from '../types/blog';

const props = defineProps({
    categories: Array as PropType<CategoryList>,
})

</script>

<template>
    <v-card>
        <v-card-title>
            Category
        </v-card-title>
        <v-list density="compact">
            <v-list-item v-for="(category, i) in categories" :key="i" :value="category"
                :to="`/category/${category.slug}/page/1`">
                <v-list-item-title v-text="`${category.name} (${category.post_count})`"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>