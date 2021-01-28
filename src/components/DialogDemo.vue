<template>
  <div>组件</div>
  <ele-dialog
    v-model:visible="x"
    @update:visble="x = $event"
    :ok="f1"
    :cancel="f2"
  ></ele-dialog>
  <ele-button @click="toggle">展示</ele-button>
</template>

<script lang="ts">
import Dialog from '../lib/dialog/Dialog.vue'
import Button from '../lib/button/Button.vue'
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
