<script>
import Page from '../components/Page'

export default {
  components: {
    Page,
  },
  mounted() {
    window.addEventListener("load", () => {new Superpeer.Widget({embed:{type:"slide-in"},launcher:{type:"superpeer-logo",options:{}},config:{username:"ferhatdemir",serviceSlug:""}})})
  }
}
</script>

<template>
  <page>
    <div class="mt-24 px-4 md:px-0">
      <h1 class="text-3xl mb-6">Ferhat Demir</h1>
      <p>Software developer at Superpeer</p>
    </div>
  </page>
</template>
