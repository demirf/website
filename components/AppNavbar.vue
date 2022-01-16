<template>
  <nav class="sticky px-4 md:px-0 pt-24">
    <div class="flex justify-between items-center">
      <nuxt-link to="/" class="app-logo">
        <p class="app-logo">
          Home
        </p>
      </nuxt-link>
      <div class="space-x-4">
        <nuxt-link to="/blog" class="text-2xl nav-link">Blog</nuxt-link>
        <nuxt-link to="/contact" class="text-2xl nav-link">Contact</nuxt-link>
      </div>
    </div>
  </nav>
</template>
