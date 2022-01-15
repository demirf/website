<script>
import Page from '../../components/Page';

export default {
  components: {
    Page
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
      <article class="mt-12 pb-24 md:px-0 px-4 ">
        <nuxt-content :document="content" />
      </article>
    </div>
  </page>
</template>
