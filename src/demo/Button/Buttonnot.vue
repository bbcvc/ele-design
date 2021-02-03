<template>
  <ele-button @click="onClick" theme="primary">默认按钮</ele-button>
  <ele-button @click="onClick" theme="primary" disabled="true"
    >禁止按钮</ele-button
  >
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
