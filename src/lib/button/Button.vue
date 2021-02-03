<template>
  <button
    class="ele-button"
    :class="[`ele-button--${theme}`, { disabled }, { round }, { square }]"
  >
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
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
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
  box-sizing: content-box;
  height: 36px;
  margin: 0;
  padding: 2px 8px;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;
  border: 1px solid #ddd;
  color: #fff;
  & + .ele-button {
    margin-left: 10px;
  }
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
  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &.square {
    border-radius: 0;
  }
  &.round {
    border-radius: 999px;
  }
}
</style>
