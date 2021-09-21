<template>
  <div class="ele-tabs">
    <div class="ele-tabs-nav" ref="container">
      <div
        class="ele-tabs-nav--item"
        v-for="(item, index) in titles"
        :key="item + index"
        @click="slecte(item)"
        :class="{ selected: item === selected }"
        :ref="
          (el) => {
            if (item === selected) selectedItem = el
          }
        "
      >
        {{ item }}
      </div>
      <div class="ele-tabs-nav--indicator" ref="indicator"></div>
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
import { computed, ref, onMounted, watchEffect } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const defaults = context.slots.default()
    const titles: any[] = defaults.map((tag) => {
      return tag.props.title
    })
    onMounted(() => {
      const { width } = selectedItem.value.getBoundingClientRect()
      indicator.value.style.width = width + 'px'

      const { left: cLeft } = container.value.getBoundingClientRect()
      const { left: rLrft } = selectedItem.value.getBoundingClientRect()
      const left = rLrft - cLeft
      indicator.value.style.left = left + 'px'
      watchEffect(
        () => {
          const { width } = selectedItem.value.getBoundingClientRect()
          indicator.value.style.width = width + 'px'

          const { left: cLeft } = container.value.getBoundingClientRect()
          const { left: rLrft } = selectedItem.value.getBoundingClientRect()
          const left = rLrft - cLeft
          indicator.value.style.left = left + 'px'
        },
        {
          flush: 'post',
        }
      )
    }),
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
      container,
      indicator,
      slecte,
      selectedItem,
      current,
    }
  },
}
</script>

<style lang="scss">
$blue: #1989fd;
.ele-tabs {
  .ele-tabs-nav {
    position: relative;
    display: inline-block;
    border-bottom: 1px solid #ddd;
    min-width: 300px;
    &--item {
      display: inline-block;
      padding: 5px 12px;
      cursor: pointer;
      &.selected {
        color: $blue;
      }
    }
    &--indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      width: 100px;
      left: 0;
      bottom: -1px;
      transition: all 250ms ease-out 0s;
    }
  }
}
</style>
