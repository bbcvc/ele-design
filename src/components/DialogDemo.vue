<template>
  <article class="markdown-body">
    <h3>常规引入</h3>
    <dialog-demo></dialog-demo>
    <pre><code>{{DialogDemo.__sourceCode}}</code></pre>

    <h3>一句引入</h3>
    <dialog-func></dialog-func>
    <pre><code>{{Dialogfunc.__sourceCode}}</code></pre>
  </article>
</template>

<script lang="ts">
import DialogDemo from '../demo/Dialog/Dialogdefault.vue'
import Dialogfunc from '../demo/Dialog/Dialogfunc.vue'
export default {
  components: {
    'dialog-demo': DialogDemo,
    'dialog-func': Dialogfunc,
  },
  setup(props) {
    return {
      DialogDemo,
      Dialogfunc,
    }
  },
}
</script>
