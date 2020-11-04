<template>
<Topnav></Topnav>
<div class="content">
  <aside>
    <h2>组件列表</h2>
    <ol>
      <li>
        Switch 组件
      </li>
      <li>
        Button 组件
      </li>
      <li>
        Dialog 组件
      </li>
      <li>
        Tabs组件
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
    console.log(`doc获取到的是${menuVisable}`)
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 120px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  background-color: rgba(221, 221, 221, .46);
  position: fixed;
  top: 53px;
  left: 0;

  aside {
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
