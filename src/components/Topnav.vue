<template>
<div class="topnav">
  <div class="logo" @click="ismenu">LOGO</div>
  <ul class="menu">
    <li>菜单1</li>
    <li>菜单2</li>
  </ul>
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from 'vue'
export default {
  setup() {
    const menuVisable = inject < Ref < boolean >> ("menu")
    console.log(`topnav获取到的是${menuVisable.value}`)
    const ismenu = () => {
      menuVisable.value = !menuVisable.value
    }
    return {
      ismenu
    }
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  position: relative;
  z-index: 10;
  background: rgb(128 118 0 / 70%);
  display: flex;
  padding: 16px;

  >.logo {
    max-height: 6em;
    margin-right: auto;
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 1em;
    }
  }
}
</style>
