<script>
export default {
  props: {
    content: { type: Object, required: true }
  },
  computed: {
    url() {
      return `/blog/${this.content.slug}`;
    }
  },
}
</script>

<template>
  <nuxt-link :to="url" class="content-item">
    <section>
      <p class="mb-2">
        {{ content.title }}
      </p>
      <p class="text-gray-500 dark:text-zinc-400 leading-6">
        {{ content.description }}
      </p>
    </section>
  </nuxt-link>
</template>
