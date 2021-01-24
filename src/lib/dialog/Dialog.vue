<template>
  <div class="ele-dialog">
    <div class="ele-dialog--wrapper">
      <i class="ele-dialog--close">
        <svg
          t="1611491642929"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2593"
          width="16"
          height="16"
        >
          <path
            d="M891.264 901.248a30.784 30.784 0 0 1-21.76-9.024L128.256 150.976a30.72 30.72 0 1 1 43.52-43.52l741.312 741.312a30.848 30.848 0 0 1-21.824 52.48"
            fill="#434243"
            p-id="2594"
          ></path>
          <path
            d="M150.016 901.248a30.72 30.72 0 0 1-21.76-52.544l741.312-741.248a30.784 30.784 0 0 1 43.456 43.52L171.776 892.224a30.72 30.72 0 0 1-21.76 9.024"
            fill="#434243"
            p-id="2595"
          ></path>
        </svg>
      </i>
      <header>标题</header>
      <main>
        <p>第一行字</p>
        <p>第二行字</p>
      </main>
      <footer>
        <Button theme="primary">ok</Button>
        <Button>cancel</Button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../button/Button.vue'
export default {
  components: {
    Button,
  },
  setup(props) {},
}
</script>

<style lang="scss">
.ele-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.68);
  z-index: 2021;
  .ele-dialog {
    &--wrapper {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      width: 300px;
      border: 1px solid #d8d8d8;
      border-radius: 6px;
      padding: 0 18px;
      i {
        position: absolute;
        top: 14px;
        right: 30px;
      }
      header {
        font-size: 24px;
        line-height: 2;
        text-align: center;
        &::after {
          content: '';
        }
      }
      main {
        min-height: 50px;
        line-height: 1.5;
        padding: 6px;
        border-top: 1px solid #d8d8d8;
        border-bottom: 1px solid #d8d8d8;
      }
      footer {
        padding: 6px;
        text-align: right;
      }
    }
  }
}
</style>
