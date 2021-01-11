<template>
  <div class="switch-demo">
    <div class="context">
      <p>switch</p>
      <ele-switch v-model:value="checked" />
    </div>
  </div>
</template>

<script>
import Switch from '../lib/switch/Switch.vue'
import { ref } from 'vue'
export default {
  components: {
    'ele-switch': Switch,
  },
  setup(props) {
    const checked = ref(false)
    return { checked }
  },
}
</script>

<style lang="scss" scoped>
.switch-demo {
  height: 100%;
  background-color: pink;
  padding: 20px;
  overflow: auto;
  .context {
    height: 5000px;
  }
}
</style>
