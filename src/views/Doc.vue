<template>
<Topnav />
<div class="content">
  <aside v-show="menuVisable">
    <h2>组件列表</h2>
    <ol>
      <li>
        <router-link to="">
          Switch 组件
        </router-link>
      </li>
      <li>
        <router-link to="">
          Button 组件
        </router-link>
      </li>
      <li>
        <router-link to="">
          Dialog 组件
        </router-link>
      </li>
      <li>
        <router-link to="">
          Tabs组件
        </router-link>
      </li>
    </ol>
  </aside>
  <main>
    <router-view></router-view>
  </main>
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisable = inject < Ref < boolean >> ("menu")
    console.log(`doc获取到的是${menuVisable.value}`)
    return {
      menuVisable
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 120px;
  display: flex;
  flex-direction: column;
  background-color: rgba(221, 221, 221, .46);
  position: fixed;
  top: 53px;
  left: 0;

  aside {
    padding-top: 10px;

    h2 {
      margin-bottom: 8px;
    }

    ol {
      li {
        height: 30px;
      }
    }
  }

}
</style>
