<demo>
自定义大小switch
</demo>
<template>
  <ele-switch v-model:value="checked" size="24px" />
  <ele-switch v-model:value="checked" size="30px" />
  <ele-switch v-model:value="checked" size="36px" />
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
