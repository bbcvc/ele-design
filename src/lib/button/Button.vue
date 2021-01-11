<template>
  <button class="ele-button" :class="`ele-button--${theme}`">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: 'default',
    },
  },
  setup(props, context) {
    const { ...rest } = context.attrs
    const theme = props.theme
    return {
      rest,
      theme,
    }
  },
}
</script>

<style lang="scss">
.ele-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 44px;
  margin: 0;
  padding: 0 18px;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s;
  border: 1px solid #fff;
  color: #fff;
  &--default {
    background-color: #fff;
    color: black;
  }
  &--primary {
    background-color: #07c160;
    border-color: #07c160;
  }
  &--info {
    background-color: #1989fa;
    border-color: #1989fa;
  }
  &--warning {
    background-color: #ff976a;
    border-color: #ff976a;
  }
  &--danger {
    background-color: red;
    border-color: red;
  }
}
</style>
