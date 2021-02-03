<demo>
dialog默认引入
</demo>
<template>
  <ele-button @click="toggle">展示</ele-button>
  <ele-dialog
    v-model:visible="x"
    @update:visble="x = $event"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title>
      <div>提示</div>
    </template>
    <template v-slot:content>
      <div>hi1</div>
      <div>hi2</div>
    </template>
  </ele-dialog>
</template>

<script lang="ts">
import Dialog from '../../lib/dialog/Dialog.vue'
import Button from '../../lib/button/Button.vue'
import { ref } from 'vue'
export default {
  components: {
    'ele-dialog': Dialog,
    'ele-button': Button,
  },
  setup(props) {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      console.log('f1')
    }
    const f2 = () => {
      console.log('f2')
    }
    return {
      x,
      toggle,
      f1,
      f2,
    }
  },
}
</script>

<style></style>
