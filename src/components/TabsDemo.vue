<template>
  <article class="markdown-body">
    <h3>示例</h3>
    <Tabs> </Tabs>
    <pre><code  v-html="Prism.highlight( Tabs.__sourceCode,Prism.languages.html,'html')"></code></pre>
  </article>
</template>

<script lang="ts">
import Tabs from '../demo/Tabs/Tabsdemo.vue'
import 'prismjs'
const Prism = (window as any).Prism
export default {
  components: {
    Tabs,
  },
  setup(props) {
    return {
      Tabs,
      Prism,
    }
  },
}
</script>
