<script>
  export default {
    async asyncData({ $content, params }) {
      const content = await $content(params.slug).fetch()

      return {
        content
      }
    }
  }
</script>

<template>
  <div :key="$route.params.slug">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{$route.params.slug}}
          </h1>
          <h2 class="subtitle">
            A dynamic markdown file
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <nuxt-content :document="content" />
    </div>
  </div>
</template>
