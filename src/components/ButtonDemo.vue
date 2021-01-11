<template>
  <div class="button-demo">
    <div class="context">
      <ele-button>你好</ele-button>
    </div>
  </div>
</template>

<script>
import Button from '../lib/button/Button.vue'
import { ref } from 'vue'
export default {
  components: {
    'ele-button': Button,
  },
  setup() {},
}
</script>

<style lang="scss" scoped>
.button-demo {
  height: 100%;
  background-color: pink;
  overflow: auto;
  .context {
    height: 5000px;
    background-color: pink;
  }
}
</style>
