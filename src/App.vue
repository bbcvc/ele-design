<template>
<router-view />
</template>

<script lang="ts">
import {
  provide,
  ref
} from 'Vue'
export default {
  name: 'App',
  setup() {
    const menuVisable = ref(false)
    provide('menu', menuVisable)
  }
}
</script>

<style lang="css">
  
</style>
