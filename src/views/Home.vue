<template>
<div>
  <Topnav></Topnav>
  <div class="banner">
    <h1>ele-design</h1>
    <h2>基于vue3的组件库</h2>
    <p class="action">
      <a href="#">Github</a>
      <a href="#">开始</a>
    </p>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav,
  },
}
</script>

<style lang="scss"></style>
