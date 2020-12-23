<template>
<div class="topnav">
	<div class="m-toggle" @click="togglemenu">
		<svg t="1608647860361" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2686" width="25" height="25"><path d="M100.185088 101.376l835.15392 0c21.961728 0 39.769088 17.806336 39.769088 39.769088 0 21.961728-17.80736 39.768064-39.769088 39.768064L100.185088 180.913152C78.222336 180.914176 60.416 163.106816 60.416 141.145088 60.416 119.182336 78.222336 101.376 100.185088 101.376zM100.185088 419.529728l835.15392 0c21.961728 0 39.769088 17.80736 39.769088 39.769088 0 21.962752-17.80736 39.769088-39.769088 39.769088L100.185088 499.067904c-21.962752 0-39.769088-17.80736-39.769088-39.769088C60.416 437.337088 78.222336 419.529728 100.185088 419.529728zM100.185088 737.683456l835.15392 0c21.961728 0 39.769088 17.806336 39.769088 39.769088 0 21.961728-17.80736 39.769088-39.769088 39.769088L100.185088 817.221632c-21.962752 0-39.769088-17.80736-39.769088-39.769088C60.416 755.489792 78.222336 737.683456 100.185088 737.683456z" p-id="2687" fill="#ffffff"></path></svg>
	</div>
  <div class="logo">LOGO</div>
  <ul class="menu">
    <li>菜单1</li>
    <li>菜单2</li>
  </ul>
</div>
</template>
    





<script lang="ts">
import {
  inject,
  Ref
} from 'vue'
export default {
  setup() {
    const menuVisable = inject < Ref < boolean >> ("menu")
    const togglemenu = () => {
      menuVisable.value = !menuVisable.value
    }
    return {
      togglemenu
    }
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  position: fixed;
	left: 0;
	right: 0;
  z-index: 10;
	height: 60px;
  background: rgb(128 118 0 / 70%);
  display: flex;
  padding: 16px;

  >.logo {
    max-height: 6em;
    margin-right: auto;
  }

	>.m-toggle{
		width: 25px;
		height: 25px;
		cursor: pointer;
		display: none;
	}

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 1em;
    }
  }
	@media (max-width: 900px) {
		>.menu{
			display: none;
		}
		>.logo{
			margin: 0 auto;
		}
		>.m-toggle{
			display: block;
		}
	}
}
</style>
