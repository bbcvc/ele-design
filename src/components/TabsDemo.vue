<template>
  <article class="markdown-body">
    <h3>示例</h3>
    <Tabs> </Tabs>
    <pre><code>{{Tabs.__sourceCode}}</code></pre>
  </article>
</template>

<script lang="ts">
import Tabs from '../demo/Tabs/Tabsdemo.vue'

export default {
  components: {
    Tabs,
  },
  setup(props) {
    return {
      Tabs,
    }
  },
}
</script>
