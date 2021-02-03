<template>
  <article
    class="markdown-body entry-content container-lg f5"
    v-html="mIntro"
  ></article>
</template>

<script>
import mIntro from '../markdown/Intro.md'
export default {
  data() {
    return {
      mIntro,
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
