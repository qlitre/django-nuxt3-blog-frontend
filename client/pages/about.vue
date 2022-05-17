<script setup lang="ts">
import { About } from '../types/blog'

const { data: about } = await useFetch<About>(`/api/about`)
</script>

<template>
  <div class="main">
    <div class="top">
      <h1 class="main-title">About</h1>
      <p class="image-area">
        <img :src="about.profile_image" alt="">
      </p>
      <div class="markdown-body" v-html="about.body" style="margin-top:20px;"></div>
      <TopToButton />
    </div>

  </div>
</template>

<style scoped>
.top {
  text-align: center;
}

.body {
  margin-top: 50px;
  text-align: center;
}

.image-area {
  margin-top: 20px;
  text-align: center;
}

img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  text-align: center;
}

.main-title {
  font-size: 3rem;
  text-align: center;
}

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

@media (max-width: 1024px) {
  .markdown-body:deep(img) {
    max-width: 100%;
  }
}

p:deep(code) {
  background-color: #eee;
  color: #333;
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

blockquote {
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

ul,
ol {
  padding-left: 1.5em;
  margin: 1rem 0;
  line-height: 1.7;
}

ul {
  list-style-type: disc;
}

ol {
  list-style-type: decimal;
}

ul:deep(li),
ol:deep(li) {
  margin-bottom: 1rem;
}


.markdown-body:deep(ul) {
  list-style-type: none;
}
</style>
