<demo>
按钮形状
</demo>
<template>
  <ele-button @click="onClick" theme="default" square="true"
    >直角按钮</ele-button
  >
  <ele-button @click="onClick" theme="primary" round="true"
    >圆角按钮</ele-button
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
