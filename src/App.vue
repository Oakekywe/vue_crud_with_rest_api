<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="max-w-6xl mx-auto">
      <nav class=" pt-5">
        <!-- <RouterLink class=" px-4 py-2 mr-4 bg-indigo-500 text-white hover:bg-indigo-700 rounded" to="/">Home</RouterLink> -->
        <RouterLink class=" px-4 py-2 mr-4 bg-indigo-500 text-white hover:bg-indigo-700 rounded" to="/skills">Skills</RouterLink>
      </nav>
    </div>
  </header>

  <main class="max-w-6xl mx-auto min-h-screen">
    <RouterView />
  </main>
</template>
