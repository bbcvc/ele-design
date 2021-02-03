<template>
  <article
    class="markdown-body entry-content container-lg f5"
    v-html="content"
  ></article>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    path: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const content = ref<String>(null)
    import(props.path).then((result) => {
      content.value = result.default
    })
    return {
      content,
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
  li {
    list-style: outside;
  }
}
</style>
