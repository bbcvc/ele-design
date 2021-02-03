<template>
  <ele-switch v-model:value="checked" />
</template>

<script>
import Switch from '../../lib/switch/Switch.vue'
import { ref } from 'vue'
export default {
  components: {
    'ele-switch': Switch,
  },
  setup() {
    const checked = ref(false)
    return { checked }
  },
}
</script>

<style lang="scss" scoped></style>
