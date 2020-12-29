<template>
  <div class="ele-switch">
    <button @click="toogleVal" :class="{ active: value }">
      <!-- 开 关 -->
      <span :class="{ active: value }"> </span>
    </button>
    <div>
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Switch',
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toogleVal = () => {
      context.emit('input', !props.value)
    }
    return { toogleVal }
  },
}
</script>

<style lang="scss">
.ele-switch {
  button {
    width: 52px;
    height: 22px;
    background-color: #ddd;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    transition: all 300ms ease-in;
    &:focus {
      outline: none;
    }
    &.active {
      background-color: green;
    }
    span {
      display: block;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      border: 1px solid #fff;
      background-color: #fff;
      transform: translateX(1px);
      transition: all 300ms ease-in;
      &.active {
        transform: translateX(calc(50px - 18px));
      }
    }
  }
}
</style>
