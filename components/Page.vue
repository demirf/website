<script>
import AppNavbar from './AppNavbar'
export default {
  components: {
    AppNavbar
  },
}
</script>

<template>
  <div class="max-w-2xl mx-auto w-full">
    <app-navbar />
    <slot class="px-4" />
  </div>
</template>
