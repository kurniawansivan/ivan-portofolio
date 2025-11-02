<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Article } from '@/types/Article'
defineProps<{
    article: Article
}>()

function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}
</script>

<template>
    <div class="box">
        <article class="media">
            <div class="media-left">
                <figure class="image is-128x128">
                    <img :src="article.image" :alt="article.title">
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong class="title is-4">{{ article.title }}</strong>
                        <br>
                        <small>{{ formatDate(article.publishDate) }}</small>
                        <br>
                        {{ article.shortDescription }}
                    </p>
                </div>
                <RouterLink :to="{ name: 'BlogDetail', params: { id: article.id } }"
                    class="button is-primary is-small is-outlined">
                    Read Full Post
                </RouterLink>
            </div>
        </article>
    </div>
</template>

<style scoped>
.box {
    height: 100%;
}

.media-left {
    flex-shrink: 0;
}

.media-content {
    display: flex;
    flex-direction: column;
}

.content {
    flex-grow: 1;
}
</style>