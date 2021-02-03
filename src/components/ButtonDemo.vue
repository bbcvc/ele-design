<template>
  <article class="markdown-body">
    <h3>默认按钮</h3>
    <ele-button></ele-button>
    <pre><code v-html="Prism.highlight( Button.__sourceCode,Prism.languages.html,'html')"></code></pre>
    <br />
    <h3>按钮形状</h3>
    <round-button></round-button>
    <pre><code v-html="Prism.highlight( roundButton.__sourceCode,Prism.languages.html,'html')"></code></pre>
    <br />
    <h3>禁止选中</h3>
    <not-button></not-button>
    <pre><code v-html="Prism.highlight( sizeButton.__sourceCode,Prism.languages.html,'html')"></code></pre>
    <br />
    <h3>按钮大小</h3>
    <size-button></size-button>
    <pre><code v-html="Prism.highlight( notButton.__sourceCode,Prism.languages.html,'html')"></code></pre>
  </article>
</template>

<script>
import Button from '../demo/Button/Buttondefault.vue'
import roundButton from '../demo/Button/Buttonround.vue'
import sizeButton from '../demo/Button/Buttonsize.vue'
import notButton from '../demo/Button/Buttonnot.vue'
import 'prismjs'
const Prism = window.Prism
export default {
  components: {
    'ele-button': Button,
    'round-button': roundButton,
    'size-button': sizeButton,
    'not-button': notButton,
  },
  setup() {
    const onClick = () => {
      console.log('click')
    }
    return { onClick, Button, roundButton, sizeButton, notButton, Prism }
  },
}
</script>

<style lang="scss">
.ele-button.ele-button {
  margin-left: 10px;
}
.ele-button {
  margin: 5px 0;
}
</style>
