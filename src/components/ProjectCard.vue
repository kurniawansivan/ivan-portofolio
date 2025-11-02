<script setup lang="ts">
import type { Project } from '@/types/Project';

defineProps<{
  project: Project
}>();
</script>

<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="project.image" :alt="project.title">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ project.title }}</p>
        </div>
      </div>

      <div class="content">
        {{ project.shortDescription }}
      </div>

      <div class="tags">
        <span v-for="tag in project.tags" :key="tag" class="tag is-primary is-light">
          {{ tag }}
        </span>
      </div>
    </div>
    </div>
</template>

<style scoped>
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex-grow: 1;
}
</style>