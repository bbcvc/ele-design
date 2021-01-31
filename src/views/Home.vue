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
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='128' viewBox='0 0 1440 128'%3E%3Cpath class='header-wave' fill='%23FFF' d='M0,471 L1440,471 L1440,386.338583 C1331.33333,357.446194 1239,343 1163,343 C821.995497,343 821.995497,463.944882 426,463.944882 C262.447846,463.944882 120.447846,438.076115 0,386.338583 L0,471 Z' transform='translate(0 -343)'/%3E%3C/svg%3E"
        alt=""
      />
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
  .banner {
    height: 500px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url('../assets/header@2x.8791c662.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    h1 {
      font-size: 48px;
      color: #fff;
    }
    h2 {
      font-size: 16px;
      margin: 16px 0 16px;
      color: #fff;
    }
    img {
      position: absolute;
      width: 100%;
      bottom: -2px;
    }
    .action {
      display: flex;
      justify-content: space-evenly;

      a {
        height: 64px;
        border-radius: 32px;
        background-color: #fff;
        color: rgb(255, 255, 255);
        font-weight: 600;
        font-size: 24px;
        line-height: 64px;
        text-align: center;
        padding: 0px 30px;
        color: black;
        & + a {
          margin-left: 15px;
        }
        &:hover {
          border: none;
        }
      }
    }
  }
}
</style>
