<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<template>
  <header>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <RouterLink class="navbar-item" to="/">
          <strong>Ivan Kurniawan Sentosa</strong>
        </RouterLink>

        <a role="button" class="navbar-burger" :class="{ 'is-active': isMenuOpen }" @click="isMenuOpen = !isMenuOpen"
          aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
        <div class="navbar-start">
          <RouterLink class="navbar-item" to="/" @click="isMenuOpen = false">
            Home
          </RouterLink>
          <RouterLink class="navbar-item" to="/projects" @click="isMenuOpen = false">
            Proyek
          </RouterLink>
          <RouterLink class="navbar-item" to="/blog" @click="isMenuOpen = false">
            Blog
          </RouterLink>
          <RouterLink class="navbar-item" to="/contact" @click="isMenuOpen = false">
            Contact
          </RouterLink>
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

.navbar-item.router-link-active {
  color: white;
}
</style>