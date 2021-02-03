<template>
  <div class="ele-switch">
    <button
      @click="toogleVal"
      :class="[value ? 'active' : '', disabled ? 'disabled' : '']"
      :style="{ fontSize: size }"
    >
      <!-- 开 关 -->
      <span :class="{ active: value }"> </span>
    </button>
    <div>
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Switch',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '30px',
    },
  },
  setup(props, context) {
    const toogleVal = () => {
      if (props.disabled) return
      context.emit('update:value', !props.value)
    }
    return { toogleVal }
  },
}
</script>

<style lang="scss">
.ele-switch {
  display: inline-block;
  & + .ele-switch {
    margin-left: 15px;
  }
  button {
    position: relative;
    width: 2em;
    height: 1em;
    padding: 2px;
    background-color: #ddd;
    border: 1px solid #ddd;
    border-radius: 1em;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
    &.disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
    &:focus {
      outline: none;
    }
    &.active {
      background-color: #1989fa;
    }
    span {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(0);
      display: block;
      width: 1em;
      height: 1em;
      border-radius: 100%;
      border: 1px solid #fff;
      background-color: #fff;
      transition: all 300ms ease-in;
      &.active {
        transform: translateX(1em);
      }
    }
  }
}
</style>
