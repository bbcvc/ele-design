<template>
  <div class="button-demo">
    <div class="context">
      <ele-button @click="onClick" theme="default">默认按钮</ele-button>
      <ele-button @click="onClick" theme="primary">主要按钮</ele-button>
      <ele-button @click="onClick" theme="info">信息按钮</ele-button>
      <ele-button @click="onClick" theme="warning">警告按钮</ele-button>
      <ele-button @click="onClick" theme="danger">危险按钮</ele-button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/button/Button.vue'
import { ref } from 'vue'
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

<style lang="scss" scoped>
.button-demo {
  height: 100%;
  background-color: pink;
  overflow: auto;
  .context {
    padding: 30px;
    height: 5000px;
    background-color: pink;
  }
  .ele-button.ele-button {
    margin-left: 10px;
  }
}
</style>
