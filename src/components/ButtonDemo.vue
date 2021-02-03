<template>
  <div class="button-demo">
    <div class="context">
      <ele-button></ele-button>
      <br />
      <round-button></round-button>
      <br />
      <not-button></not-button>
      <br />
      <size-button></size-button>
    </div>
  </div>
</template>

<script>
import Button from '../demo/Button/Buttondefault.vue'
import roundButton from '../demo/Button/Buttonround.vue'
import sizeButton from '../demo/Button/Buttonsize.vue'
import notButton from '../demo/Button/Buttonnot.vue'
export default {
  components: {
    'ele-button': Button,
    'round-button': roundButton,
    'size-button': sizeButton,
    'not-button': notButton,
  },
  setup() {
    const onClick = () => {
      console.log('click')
    }
    return { onClick }
  },
}
</script>

<style lang="scss">
.button-demo {
  height: 100%;
  overflow: auto;
  .context {
    padding: 30px;
  }
  .ele-button.ele-button {
    margin-left: 10px;
  }
  .ele-button {
    margin: 5px 0;
  }
}
</style>
