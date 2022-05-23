<script setup lang="ts">
import { About } from '../types/blog'
import { PropType } from 'vue';

const props = defineProps({
  about: Object as PropType<About>,
})

</script>

<template>
  <v-card>
    <v-card-title>
      About
    </v-card-title>
    <v-card-text>
      <p class="image-area">
        <img :src="about.profile_image" alt="">
      </p>
      <div class="markdown-body" v-html="about.body" style="margin-top:20px;"></div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
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

.markdown-body:deep(*) {
  margin-top: 0;
  line-height: 1.5;
  font-size: 1rem;
  margin-bottom: 2rem;
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


.markdown-body:deep(a) {
  text-decoration: none;
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
