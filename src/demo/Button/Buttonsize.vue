<template>
  <ele-button @click="onClick" large="large">超大按钮</ele-button>
  <ele-button @click="onClick">默认按钮</ele-button>
  <ele-button @click="onClick" mini="mini">小按钮</ele-button>
</template>

<script lang="ts">
import Button from '../../lib/button/Button.vue'
export default {
  components: {
    'ele-button': Button,
  },
  setup() {
    const onClick = () => {
      console.log('click')
    }
    return { onClick }
  },
}
</script>
