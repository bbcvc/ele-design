<template>
  <article class="markdown-body">
    <h3>常规引入</h3>
    <dialog-demo></dialog-demo>
    <pre><code  v-html="Prism.highlight( DialogDemo.__sourceCode,Prism.languages.html,'html')"></code></pre>

    <h3>一句引入</h3>
    <dialog-func></dialog-func>
    <pre><code  v-html="Prism.highlight( Dialogfunc.__sourceCode,Prism.languages.html,'html')"></code></pre>
  </article>
</template>

<script lang="ts">
import DialogDemo from '../demo/Dialog/Dialogdefault.vue'
import Dialogfunc from '../demo/Dialog/Dialogfunc.vue'
import 'prismjs'
const Prism = (window as any).Prism
export default {
  components: {
    'dialog-demo': DialogDemo,
    'dialog-func': Dialogfunc,
  },
  setup(props) {
    return {
      DialogDemo,
      Dialogfunc,
      Prism,
    }
  },
}
</script>
