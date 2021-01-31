<template>
  <div class="ele-tabs">
    <div class="ele-tabs-nav">
      <div
        class="ele-tabs-nav--item"
        v-for="(item, index) in titles"
        :key="item + index"
        @click="slecte(item)"
        :class="{ selected: item === selected }"
      >
        {{ item }}
      </div>
    </div>
    <div class="ele-tabs-content">
      <component
        class="ele-tabs-content--item"
        :key="current"
        :is="current"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default()
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签必须为Tab')
      }
    })
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected
      })[0]
    })
    const slecte = (title: string) => {
      context.emit('update:selected', title)
    }
    return {
      defaults,
      titles,
      slecte,
      current,
    }
  },
}
</script>

<style lang="scss">
.ele-tabs {
  .ele-tabs-nav {
    display: inline-block;
    border-bottom: 1px solid #ddd;
    min-width: 300px;
    &--item {
      display: inline-block;
      padding: 5px 12px;
      cursor: pointer;
      &.selected {
        color: #1989fd;
      }
    }
  }
}
</style>
