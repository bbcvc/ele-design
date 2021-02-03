<demo>
默认按钮
</demo>
<template>
  <ele-button @click="onClick" theme="default">默认按钮</ele-button>
  <ele-button @click="onClick" theme="primary">主要按钮</ele-button>
  <ele-button @click="onClick" theme="info">信息按钮</ele-button>
  <ele-button @click="onClick" theme="warning">警告按钮</ele-button>
  <ele-button @click="onClick" theme="danger">危险按钮</ele-button>
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
