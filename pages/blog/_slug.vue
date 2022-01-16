<script>
import Page from '../../components/Page';

export default {
  components: {
    Page
  },
  computed: {
    formatDate() {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };

      return new Date(this.content.createdAt).toLocaleDateString('en', options)
    }
  },
  async asyncData({ $content, params }) {
    const content = await $content(params.slug).fetch()

    return {
      content
    }
  }
}
</script>

<template>
  <page>
    <div :key="$route.params.slug">
      <article class="mt-14 pb-24 md:px-0 px-4 ">
        <p class="mb-2 text-sm"> {{ formatDate }} </p>
        <nuxt-content :document="content" />
      </article>
    </div>
  </page>
</template>
