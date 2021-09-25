<demo>
dialog快速引入
</demo>
<template>
  <ele-button @click="showDialog">打开</ele-button>
</template>

<script lang="ts">
import Button from '../../lib/button/Button.vue'
import { openDialog } from '../../lib/Dialog'
import { ref } from 'vue'
export default {
  components: {
    'ele-button': Button,
  },
  setup() {
    const x = ref(false)
    const showDialog = () => {
      openDialog({
        title: 'title',
        content: 'content',
      })
    }
    const f1 = () => {
      console.log('f1')
    }
    const f2 = () => {
      console.log('f2')
    }
    return {
      x,
      f1,
      f2,
      showDialog,
    }
  },
}
</script>

<style></style>
