<script setup lang="ts">
import { Post } from '../types/blog'
import { PropType } from 'vue';

import * as cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'

const props = defineProps({
    post: Object as PropType<Post>,
})

const $ = cheerio.load(props.post.main_text);
$('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
});


const body = $.html()

</script>

<template>
    <div>
        <span class="published">{{ $formatDate(post.created_at) }}</span>
        <h1 class="title">{{ post.title }}</h1>
        <div class="markdown-body" v-html="body"></div>
    </div>
</template>

<style scoped>
.published {
    font-size: 1.4rem;
    color: #888;
    margin-right: 20px;
}

.title {
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 2.4rem;
    color: #0d1a3c;
    line-height: 1.6;
}

.tag {
    font-size: 1.4rem;
    color: 888;
    opacity: 0.7;
    letter-spacing: 1px;
    margin-right: 1rem;
}

/* 記事詳細のマークダウン */
.markdown-body:deep(*) {
    margin-top: 0;
    margin-bottom: 2rem;
    line-height: 1.9;
    font-size: 1.6rem;
    font-weight: 500;
}

strong {
    background-color: yellow;
}

.markdown-body:deep(img) {
    display: block;
    max-width: 100%;
    margin-top: 20px;
    margin-bottom: 0px;
    height: auto;
    border: solid 1px #ccc;
}


.markdown-body:deep(p) code {
    background-color: #DBDDDA;
    color: #eb5757;
    padding: 0.2em 0.4em;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

pre {
    line-height: 1.2;
    background-color: #1D1F21;
    padding: 2% 4%;
    overflow-x: scroll;
}

pre:deep(*) {
    margin-bottom: 0;
    line-height: 1.4;
    font-weight: lighter;
}

.markdown-body:deep(blockquote) {
    padding: 15px;
    border-left: 5px solid #ccc;
    border-radius: 2px;
}

.markdown-body:deep(h1) {
    font-size: 24px;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
}

.markdown-body:deep(h2),
.markdown-body:deep(h3) {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-weight: bold;
}

.markdown-body:deep(h2) {
    border-bottom: 1px solid #ccc;
}

.cp_embed_wrapper {
    margin-top: 20px;
    margin-bottom: 20px;
}

.markdown-body:deep(a) {
    color: #1266f1;
}

.markdown-body:deep(a:hover) {
    opacity: .5;
}

.markdown-body:deep(ul),
.markdown-body:deep(ol) {
    padding-left: 1.5em;
    margin: 1rem 0;
    line-height: 1.7;
}

.markdown-body:deep(ul) {
    list-style-type: disc;
}

.markdown-body:deep(ol) {
    list-style-type: decimal;
}

.markdown-body:deep(ul:deep(li)),
.markdown-body:deep(ol:deep(li)) {
    margin-bottom: 1rem;
}
</style>