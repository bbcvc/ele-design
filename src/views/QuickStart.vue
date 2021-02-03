<template>
  <article class="markdown-body" v-html="QuickStart"></article>
</template>

<script>
import QuickStart from '../markdown/QuickStart.md'
export default {
  data() {
    return {
      QuickStart,
    }
  },
}
</script>

<style></style>
