<template>
  <Topnav isComponted="doc" />
  <div :class="menuVisable ? 'open' : ''" class="sidebar">
    <aside>
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/Intro"> 介绍 </router-link>
        </li>
        <li>
          <router-link to="/doc/Install"> 安装 </router-link>
        </li>
        <li>
          <router-link to="/doc/QuickStart"> 快速开始 </router-link>
        </li>
      </ol>
      <h2>简单组件</h2>
      <ol>
        <li>
          <router-link to="/doc/SwitchDemo"> Switch 组件 </router-link>
        </li>
        <li>
          <router-link to="/doc/ButtonDemo"> Button 组件 </router-link>
        </li>
        <li>
          <router-link to="/doc/DialogDemo"> Dialog 组件 </router-link>
        </li>
        <li>
          <router-link to="/doc/TabsDemo"> Tabs组件 </router-link>
        </li>
      </ol>
    </aside>
  </div>
  <!-- 主题内容区 -->
  <main>
    <div class="main-body">
      <router-view></router-view>
    </div>
    <section>
      <div class="phone phone-m">
        <div class="mobile"></div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisable = inject<Ref<boolean>>('menu')
    return {
      menuVisable,
    }
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 120px;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #fff;
  top: 60px;
  left: 0;
  bottom: 0;
  z-index: 2020;
  padding-left: 20px;
  box-sizing: content-box;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  aside {
    padding-top: 10px;

    h2 {
      margin-bottom: 8px;
    }

    ol {
      li {
        height: 30px;
        line-height: 30px;
        position: relative;
        a {
          font-size: 16px;
        }
        a.router-link-exact-active {
          color: #1296db;
        }
      }
    }
    .router-link-exact-active {
      &::after {
        content: '';
        display: block;
        background-image: url('../assets/对号.png');
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background-size: cover;
        background-position: center;
        width: 16px;
        height: 16px;
      }
    }
  }
}

main {
  .main-body {
    position: absolute;
    left: 150px;
    top: 65px;
    right: 400px;
    bottom: 10px;
    overflow: hidden;
  }
  section {
    transform: scale(0.7);
    position: fixed;
    height: 100%;
    right: 0;
    top: 0;
    .phone {
      width: 408px;
      height: 884px;
      display: block;
      float: right;
      margin: 10px 0 0;
      background-image: url('../assets/phone.png');
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
      font-size: 16px;
      .mobile {
        margin: auto;
        margin-top: 40px;
        width: 375px;
        height: 812px;
        background-color: pink;
        opacity: 0.8;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .sidebar {
    position: fixed;
    height: 100%;
    left: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    transform: translate(-280px, 0);
  }
  .sidebar.open {
    transform: translate(0, 0);
  }

  main section,
  main section .phone-m {
    display: none;
  }

  main .main-body {
    left: 10px;
    right: 10px;
  }

  .topnav .m-toggle {
    display: block;
  }
}
</style>
