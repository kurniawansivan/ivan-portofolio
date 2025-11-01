<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <!-- <div class="navbar-brand">
        <RouterLink class="navbar-item" to="/">
          <strong>Portofolio Saya</strong>
        </RouterLink>
      </div> -->
      <div class="navbar-menu">
        <div class="navbar-start">
          <RouterLink class="navbar-item" to="/">Home</RouterLink>
          <RouterLink class="navbar-item" to="/projects">Proyek</RouterLink>
          <RouterLink class="navbar-item" to="/blog">Blog</RouterLink>
          <RouterLink class="navbar-item" to="/contact">Contact</RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <main class="section">
    <div class="container">
      <RouterView />
    </div>
  </main>

  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Vue Portofolio</strong> oleh Ivan Kurniawan Sentosa. Vue 3, TypeScript, dan Bulma
      </p>
    </div>
  </footer>
</template>

<style scoped>
.router-link-active {
  background-color: #4a4a4a;
  font-weight: bold;
  color: white;
}
</style>
