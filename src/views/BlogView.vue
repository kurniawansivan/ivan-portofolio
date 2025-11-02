<script setup lang="ts">
import { useArticleStore } from '@/stores/articleStore'
import { storeToRefs } from 'pinia'
import ArticleCard from '@/components/ArticleCard.vue'
const articleStore = useArticleStore()
const { articles } = storeToRefs(articleStore)
</script>

<template>
    <div>
        <h1 class="title">Blog</h1>
        <p class="subtitle">My thoughts on tech, life, and everything in between.</p>

        <div class="articles-list">
            <div v-for="article in articles" :key="article.id" class="mb-5">
                <ArticleCard :article="article" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.subtitle {
    margin-bottom: 2rem;
}
</style>