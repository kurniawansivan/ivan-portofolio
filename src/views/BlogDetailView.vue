<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useArticleStore } from '@/stores/articleStore'

const route = useRoute()
const articleStore = useArticleStore()
const article = computed(() => {
    return articleStore.getArticleById(Number(route.params.id))
})

function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}
</script>

<template>
    <div class="mb-4">
        <RouterLink to="/blog" class="button is-light">
            &larr; Back to Blog
        </RouterLink>
    </div>

    <div v-if="article">
        <h1 class="title is-2">{{ article.title }}</h1>
        <p class="subtitle is-5">
            Published on: {{ formatDate(article.publishDate) }}
        </p>

        <figure class="image is-16by9 mb-4">
            <img :src="article.image" :alt="article.title">
        </figure>

        <div class="content" v-html="article.content"></div>
    </div>

    <div v-else>
        <h1 class="title has-text-danger">Article Not Found</h1>
        <p>Sorry, an article with that ID could not be found.</p>
    </div>
</template>

<style scoped>
.image {
    max-width: 800px;
}

.content :deep(p) {
    font-size: 1.125rem;
    line-height: 1.6;
}
</style>