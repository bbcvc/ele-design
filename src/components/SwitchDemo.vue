<template>
  <article class="markdown-body">
    <h3>switch组件</h3>
    <p>默认Switch</p>
    <ele-switch />
    <pre><code>11</code></pre>

    <p>禁止Switch</p>
    <ele-switchs></ele-switchs>
    <pre><code>11</code></pre>

    <p>自定义大小Switch</p>
    <ele-switchss></ele-switchss>
    <pre><code>11</code></pre>
  </article>
</template>

<script>
import Switch from '../demo/Switch/Switchdemo.vue'
import Switch2 from '../demo/Switch/Switchdemo2.vue'
import Switch3 from '../demo/Switch/Switchdemo3.vue'
export default {
  components: {
    'ele-switch': Switch,
    'ele-switchs': Switch2,
    'ele-switchss': Switch3,
  },
}
</script>

<style lang="scss" scoped>
.switch-demo {
  height: 100%;
  padding: 20px;
  overflow: auto;
}
.button-demo {
  height: 100%;
  overflow: auto;
  .context {
    padding: 30px 15px 30px 0;
  }
}
</style>
