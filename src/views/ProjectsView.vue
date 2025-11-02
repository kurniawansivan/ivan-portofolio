<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/data/projects';
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