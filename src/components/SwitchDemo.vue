<template>
  <div class="switch-demo">
    <div class="context">
      <p>switch组件</p>
      <ele-switch v-model:value="checked" />
      <ele-switch v-model:value="checkeds" disabled />
      <ele-switch v-model:value="checkedss" size="24px" />
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
    const checkeds = ref(true)
    const checkedss = ref(false)
    return { checked, checkeds, checkedss }
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
