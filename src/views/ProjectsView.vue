<script setup lang="ts">
import { useProjectStore } from '@/stores/ProjectStore'
import { storeToRefs } from 'pinia';
import ProjectCard from '@/components/ProjectCard.vue'
const projectStore = useProjectStore();
const { projects } = storeToRefs(projectStore);
</script>

<template>
    <div>
        <h1 class="title">My Projects</h1>
        <p class="subtitle">Here's a selection of my recent work.</p>

        <div class="columns is-multiline">

            <div v-for="project in projects" :key="project.id" class="column is-one-third">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.subtitle {
    margin-bottom: 2rem;
}
</style>