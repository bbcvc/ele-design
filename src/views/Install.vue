<template>
  <article class="markdown-body" v-html="mInatall"></article>
</template>

<script>
import mInatall from '../markdown/Install.md'
export default {
  data() {
    return {
      mInatall,
    }
  },
}
</script>

<style></style>
