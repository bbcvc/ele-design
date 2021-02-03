<template>
  <article
    class="markdown-body entry-content container-lg f5"
    v-html="content"
  ></article>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
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
