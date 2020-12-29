<template>
  <div class="switch-demo">
    <p>switch</p>
    <ele-switch />
  </div>
</template>

<script>
import Switch from '../lib/switch/Switch.vue'
export default {
  components: {
    'ele-switch': Switch,
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
