<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useProjectStore } from '@/stores/ProjectStore'
const route = useRoute();
const projectStore = useProjectStore();
const project = computed(() => {
    return projectStore.getProjectById(Number(route.params.id));
}
)
</script>

<template>
    <div class="mb-4">
        <RouterLink to="/projects" class="button is-light">
            &larr; Back to Projects
        </RouterLink>
    </div>

    <div v-if="project">
        <h1 class="title">{{ project.title }}</h1>

        <figure class="image is-16by9 mb-4">
            <img :src="project.image" :alt="project.title">
        </figure>

        <div class="content">
            <p class="is-size-5">{{ project.shortDescription }}</p>
        </div>

        <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag is-primary is-medium">
                {{ tag }}
            </span>
        </div>
    </div>

    <div v-else>
        <h1 class="title has-text-danger">Project Not Found</h1>
        <p>Sorry, a project with that ID could not be found.</p>
    </div>
</template>

<style scoped>
.image {
    max-width: 800px;
}
</style>