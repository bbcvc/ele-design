<template>
  <div>
    tab组件
    <component :is="defaults[0]"></component>
    <component :is="defaults[1]"></component>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签必须为Tab')
      }
    })
    return {
      defaults,
    }
  },
}
</script>

<style lang="scss"></style>
