<template>
  <div class="ele-switch">
    <button @click="toogleVal" :class="{ active: checked }">
      <!-- 开 关 -->
      <span :class="{ active: checked }"> </span>
    </button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Switch',
  setup(props) {
    const checked = ref(false)
    const toogleVal = () => {
      checked.value = !checked.value
    }
    return { checked, toogleVal }
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
