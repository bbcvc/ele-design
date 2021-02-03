<template>
  <div>组件</div>
  <dialog-demo></dialog-demo>
  <dialog-func></dialog-func>
</template>

<script lang="ts">
import DialogDemo from '../demo/Dialog/Dialogdefault.vue'
import Dialogfunc from '../demo/Dialog/Dialogfunc.vue'
import Dialog from '../lib/dialog/Dialog.vue'
import Button from '../lib/button/Button.vue'
import { openDialog } from '../lib'
import { ref } from 'vue'
export default {
  components: {
    'ele-dialog': Dialog,
    'ele-button': Button,
    'dialog-demo': DialogDemo,
    'dialog-func': Dialogfunc,
  },
  setup(props) {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
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
      toggle,
      f1,
      f2,
      showDialog,
    }
  },
}
</script>

<style></style>
