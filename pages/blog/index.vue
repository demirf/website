<script>
import Page from '../../components/Page'
import ContentItem from '../../components/ContentItem'

export default {
  components: {
    Page,
    ContentItem
  },
  async asyncData({ $content, params }) {
    const contents = await $content().fetch()

    return {
      contents
    }
  }
}
</script>

<template>
<page>
  <div class="mt-12 px-4 md:px-0">
    <content-item
      v-for="(content, index) in contents"
      :key="index"
      :content="content"
    />
  </div>
</page>
</template>
