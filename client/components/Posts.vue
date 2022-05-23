<script setup lang="ts">
import { PropType } from 'vue';
import { PostList } from '../types/blog';

const props = defineProps({
    posts: Array as PropType<PostList>,
})
</script>

<template>
    <div>
        <article v-for="post in posts" :key="post.id">
            <v-card class="mx-auto mb-5" :href="`/${post.slug}`">
                <v-container :fluid="true">
                    <v-row>
                        <v-col md="5" cols="12" sm="12">
                            <v-img :src="post.thumbnail" class="img-fluid">
                            </v-img>
                        </v-col>
                        <v-col md="7" cols="12" sm="12">
                            <v-card-subtitle>
                                <v-btn variant="outlined" color="success" disabled size="small">
                                    {{ post.category.name }}
                                </v-btn>
                            </v-card-subtitle>
                            <v-card-title>
                                {{ post.title }}
                            </v-card-title>
                            <v-card-subtitle class="mt-2">
                                {{ $formatDate(post.created_at) }}
                            </v-card-subtitle>
                            <v-card-subtitle class="mt-2">
                                <span v-for="tag in post.tag" :key="tag.id" class="mr-2">
                                    {{ tag.name }}
                                </span>
                            </v-card-subtitle>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </article>
    </div>
</template>