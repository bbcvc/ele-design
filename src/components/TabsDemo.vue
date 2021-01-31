<template>
  <div>Tabs示例</div>
  <h1>示例</h1>
  <Tabs v-model:selected="x">
    <Tab title="导航一">组件一</Tab>
    <Tab title="导航二">组件二</Tab>
  </Tabs>
</template>

<script lang="ts">
import { ref } from 'vue'
import Tabs from '../lib/tabs/Tabs.vue'
import Tab from '../lib/tabs/Tab.vue'
export default {
  components: {
    Tabs,
    Tab,
  },
  setup(props) {
    const x = ref('导航一')
    return {
      x,
    }
  },
}
</script>

<style lang="scss"></style>
