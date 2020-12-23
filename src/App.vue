<template>
<router-view />
</template>

<script lang="ts">
import {
  provide,
  ref
} from 'vue'
import {router} from "./router"
export default {
  name: 'App',
  setup() {
		let a:Number=document.documentElement.clientWidth
		const menuVisable = ref(a>=500?true:false)
		provide('menu', menuVisable)
		router.afterEach((to, from) => {
			// to and from are both route objects.
		})
  }
}
</script>

<style lang="scss">
  
</style>
