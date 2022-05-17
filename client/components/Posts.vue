<script setup lang="ts">
import { PropType } from 'vue';
import { PostList } from '../types/blog';

const props = defineProps({
    posts: Array as PropType<PostList>,
})
</script>

<template>
    <div>
        <article class="article" v-for="post in posts" :key="post.id">
            <picture v-if="post.thumbnail">
                <img :src="post.thumbnail" class="thumbnail" />
            </picture>
            <div class="detail">
                <nuxt-link :to="`/${post.slug}`">
                    <h1 class="title">
                        {{ post.title }}
                    </h1>
                </nuxt-link>
                <span class="created">{{ $formatDate(post.created_at) }}</span>
               
                <div class="bottom">
                    <span class="category">{{ post.category.name }}</span>
                    <ul class="tag-block">
                        <li v-for="tag in post.tag" :key="tag.id" class="tag">
                            <span class="tag-span">{{ tag.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    </div>
</template>

<style scoped>
.created {
    display: block;
    margin-top: 10px;
    font-size: 1.4rem;
    color: #888;
}

.title {
    font-size: 2rem;
    color: #0d1a3c;
    line-height: 1.6;
    font-weight: bold;
}

.title:hover {
    opacity: .5;
}

.category {
    display: inline-block;
    padding: 2px 8px;
    border: 1px solid #00866B;
    color: #00866B;
    white-space: nowrap;
    border-radius: 3px;
    font-size: 1.6rem;
    margin: 0 0 2px;
}

.tag-block {
    margin: 0 0 0 16px;
}

.tag {
    color: #00866B;
    font-size: 1.6rem;
    display: inline-block;
    margin-right: 20px;
}

.tag-span {
    color: inherit;
    display: inline-block;
    padding-left: 22px;
    position: relative;
}

.tag-span::before {
    content: '';
    display: inline-block;
    background: url('../assets/images/icon_tag_green.svg') center no-repeat;
    color: #00866B;
    background-size: contain;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}



@media (min-width: 1160px) {
    .article {
        margin-bottom: 6rem;
        display: grid;
        grid-template-columns: 360px 360px;
        column-gap: 20px;
    }

    .detail {
        margin-left: 1rem;
        position: relative;
    }

    .thumbnail {
        max-width: 300px;
        height: auto;
    }

    .bottom {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
    }
}

@media (min-width: 820px) and (max-width: 1160px) {
    .article {
        margin: 0 auto;
        margin-bottom: 6rem;
        display: grid;
        grid-template-columns: 360px 360px;
        column-gap: 20px;        
    }

    .detail {
        margin-left: 1rem;
        position: relative;
    }

    .thumbnail {
        max-width: 300px;
        height: auto;
    }

    .bottom {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
    }
}

@media (max-width: 820px) {
    .article {
        margin: 0 auto;
        margin-bottom: 6rem;        
    }

    .title{
        margin-top: 16px;
        font-size: 2.4rem;
    }

    .detail {
        position: relative;
    }

    .thumbnail {
        max-width: 100%;
        height: auto;
    }

    .bottom {
        margin-top: 2rem;
        display: flex;
        align-items: center;
    }    
}
</style>