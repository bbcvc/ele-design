<template>
  <div class="switch-demo">
    <div class="context">
      <h3>switch组件</h3>
      <p>默认Switch</p>
      <ele-switch />
      <p>禁止Switch</p>
      <ele-switchs />
      <p>自定义大小Switch</p>
      <ele-switchss />
    </div>
  </div>
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
</style>
