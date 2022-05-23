<script setup lang="ts">

type Props = {
    totalPages: number;
    currentPage: number;
    tagSlug?: string;
    categorySlug?: string;
    keyword?: string;
}

const page = 1

const props = defineProps<Props>()

function navigate(p: number) {
    if (props.categorySlug) return navigateTo(`/category/${props.categorySlug}/page/${p}`)
    if (props.tagSlug) return navigateTo(`/tag/${props.tagSlug}/page/${p}`)
    if (props.keyword) return navigateTo(`/search?q=${props.keyword}&page=${p}`)
    return navigateTo(`/page/${p}`)
}

</script>

<template>
    <div class="text-center">
        <v-pagination v-model="page" :length="totalPages" v-on:click="navigate(page)"></v-pagination>
    </div>
</template>