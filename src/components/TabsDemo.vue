<template>
  <div>Tabs示例</div>
  <h1>示例</h1>
  <Tabs>
    <Tab title="tab1"></Tab>
    <Tab title="tab2"></Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/tabs/Tabs.vue'
import Tab from '../lib/tabs/Tab.vue'
export default {
  components: {
    Tabs,
    Tab,
  },
}
</script>

<style lang="scss"></style>
