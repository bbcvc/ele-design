<template>
  <div class="switch-demo">
    <p>switch</p>
    <ele-switch v-model:value="checked" />
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

<style lang="scss">
.switch-demo {
  height: 1500px;
  background-color: pink;
  padding: 20px;
}
</style>
