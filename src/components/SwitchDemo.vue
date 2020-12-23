<template>
	<div class="switch-demo">
		<p>switch</p>
		<Switch/>
	</div>
</template>

<script>
import Switch from "../lib/Switch.vue"
export default {
	components:{
		Switch
	}
}
</script>

<style lang="scss">
.switch-demo{
	height: 1500px;
	background-color: pink;
}
</style>