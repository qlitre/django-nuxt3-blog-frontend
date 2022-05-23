<script setup lang="ts">

import { PropType } from 'vue';
import { TagList } from '../types/blog';


const props = defineProps({
    tags: Array as PropType<TagList>,
})

</script>

<template>
    <v-card>
        <v-card-title>
            Tags
        </v-card-title>
        <v-card-text>
            <v-chip v-for="(tag, i) in tags" :key="i" :value="tag" :to="`/tag/${tag.slug}/page/1`" class="mt-2 mr-4"
                color="green" text-color="white">
                {{ tag.name }} ({{ tag.post_count }})
            </v-chip>
        </v-card-text>
    </v-card>
</template>