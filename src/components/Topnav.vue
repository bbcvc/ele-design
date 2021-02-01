<template>
  <div class="topnav">
    <div
      class="m-toggle"
      @click="togglemenu"
      :style="[isComponted === 'doc' ? '' : 'display: none;']"
    >
      <svg
        t="1608647860361"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2686"
        width="25"
        height="25"
      >
        <path
          d="M100.185088 101.376l835.15392 0c21.961728 0 39.769088 17.806336 39.769088 39.769088 0 21.961728-17.80736 39.768064-39.769088 39.768064L100.185088 180.913152C78.222336 180.914176 60.416 163.106816 60.416 141.145088 60.416 119.182336 78.222336 101.376 100.185088 101.376zM100.185088 419.529728l835.15392 0c21.961728 0 39.769088 17.80736 39.769088 39.769088 0 21.962752-17.80736 39.769088-39.769088 39.769088L100.185088 499.067904c-21.962752 0-39.769088-17.80736-39.769088-39.769088C60.416 437.337088 78.222336 419.529728 100.185088 419.529728zM100.185088 737.683456l835.15392 0c21.961728 0 39.769088 17.806336 39.769088 39.769088 0 21.961728-17.80736 39.769088-39.769088 39.769088L100.185088 817.221632c-21.962752 0-39.769088-17.80736-39.769088-39.769088C60.416 755.489792 78.222336 737.683456 100.185088 737.683456z"
          p-id="2687"
          fill="#ccc"
        ></path>
      </svg>
    </div>
    <div class="logo" @click="linkTo">
      <svg
        t="1612096119188"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="697"
        width="30"
        height="30"
      >
        <path
          d="M535.317153 488.682847v46.541224h-46.541224v-46.541224h46.541224m139.623671-139.623671h-325.788565v325.788565h325.788565V349.059176z"
          fill="#1866D6"
          p-id="698"
        ></path>
        <path
          d="M1024 418.871012l0-139.623671-116.353059 0L907.646941 116.353059l-162.894282 0L744.752659 0l-139.623671 0 0 116.353059-186.164894 0L418.964094 0l-139.62367 0 0 116.353059-162.894283 0 0 162.894282-116.353059 0 1e-8 139.623671 116.35305899 0 0 186.164894-116.353059 0 0 139.62367 116.353059 0 0 162.894283 162.894283 0 0 116.353059 139.62367 0 0-116.353059 186.164894 0 0 116.35305899 139.623671 1e-8 0-116.353059 162.894282 0 0-162.894283 116.353059 0 0-139.62367-116.353059 0 0-186.164894z m-255.976729 186.164894l0 162.894282-511.953459 0L256.069812 255.976729l511.953459 0 1e-8 162.894283z"
          fill="#1989fa"
          p-id="699"
        ></path>
      </svg>
    </div>
    <ul class="menu">
      <li @click="linkTo('https://github.com/bbcvc/ele-design')">github</li>
      <li @click="linkTo('https://gitee.com/eric_Libidos')">gitee</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import { router } from '../router'
export default {
  props: {
    isComponted: {
      type: String,
      default: 'home',
    },
  },
  setup() {
    const menuVisable = inject<Ref<boolean>>('menu')
    const togglemenu = () => {
      menuVisable.value = !menuVisable.value
    }
    const linkTo = (link) => {
      if (typeof link !== 'string') {
        router.push({
          path: '/',
        })
      } else {
        window.open(link)
      }
    }
    return {
      togglemenu,
      linkTo,
    }
  },
}
</script>

<style lang="scss" scoped>
.topnav {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
  height: 60px;
  background: #fff;
  display: flex;
  padding: 16px;
  box-shadow: 0 0 1px rgb(0 0 0 / 25%);
  > .logo {
    max-height: 6em;
    margin-right: auto;
    cursor: pointer;
  }

  > .m-toggle {
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: absolute;
    display: none;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 900px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .m-toggle {
      display: block;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
