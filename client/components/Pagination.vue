<script setup lang="ts">

type Props = {
    totalPages: number;
    currentPage: number;
    tagSlug?: string;
    categorySlug?: string;
    keyword?: string;
}

const props = defineProps<Props>()

function getPath(p: number) {
    if (props.categorySlug) return `/category/${props.categorySlug}/page/${p}`
    if (props.tagSlug) return `/tag/${props.tagSlug}/page/${p}`
    if (props.keyword) return `/search?q=${props.keyword}&page=${p}`
    return `/page/${p}`
}

</script>

<template>
    <div class="pagination">
        <NuxtLink v-for="num in totalPages" :key="num" :class="[num == currentPage ? 'current' : 'link']"
            :to="getPath(num)">
            {{ num }}
        </NuxtLink>
    </div>
</template>

<style scoped>
.pagination {
    position: relative;
    width: 100%;
    margin: 8em 0 8rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    line-height: 1.1;
    text-align: center;
    vertical-align: middle;
}

.current,
.link {
    display: inline-block;
    margin: 0 2rem;
    padding: 2px 0;
    text-align: center;
    font-size: 3rem;
    font-weight: lighter;
}

.current {
    color: #000;
}


.link {
    color: #A2A2A6;
}
</style>