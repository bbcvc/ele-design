<template>
  <div class="home">
    <Topnav></Topnav>
    <div class="banner">
      <h1>ele-design</h1>
      <h2>基于vue3的组件库</h2>
      <p class="action">
        <a href="https://github.com/Libidos24/ele-design" target="_blank"
          >Github</a
        >
        <router-link to="/doc">开始</router-link>
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

<style lang="scss" scoped>
.home {
  // min-height: 100vh;

  .banner {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      margin: 16px 0 16px;
    }

    .action {
      display: flex;
      width: 220px;
      justify-content: space-evenly;

      a {
        height: 28px;
        border-radius: 14px;
        background-color: rgb(64, 158, 255);
        color: rgb(255, 255, 255);
        font-weight: 600;
        line-height: 28px;
        text-align: center;
        padding: 0px 14px;

        &:hover {
          border: none;
        }
      }
    }
  }
}
</style>
