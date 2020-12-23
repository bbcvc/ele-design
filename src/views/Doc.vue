<template>
<Topnav />
<div :class="menuVisable?'open':''" class="sidebar">
  <aside>
    <h2>组件列表</h2>
    <ol>
      <li>
        <router-link to="/SwitchDemo">
          Switch 组件
        </router-link>
      </li>
      <li>
        <router-link to="">
          Button 组件
        </router-link>
      </li>
      <li>
        <router-link to="">
          Dialog 组件
        </router-link>
      </li>
      <li>
        <router-link to="">
          Tabs组件
        </router-link>
      </li>
    </ol>
  </aside>
</div>
<!-- 主题内容区 -->
  <main>
		<div class="main-body">
    	<router-view></router-view>
		</div>
		<section>
			<div class="phone phone-m"></div>
		</section>
  </main>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisable = inject < Ref < boolean >> ("menu")
    return {
      menuVisable
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 120px;
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  position: fixed;
  top: 60px;
  left: 0;
	bottom: 0;
	z-index: 2020;
	padding-left: 20px;
	box-sizing: content-box;
  aside {
    padding-top: 10px;

    h2 {
      margin-bottom: 8px;
    }

    ol {
      li {
        height: 30px;
      }
    }
  }
}

	main{
		padding-top: 60px;
		.main-body{
			position: fixed;
			left: 150px;
			top: 65px;
			right: 400px;
			bottom: 10px;
			overflow: auto;
		}
		section{
			position: fixed;
			height: 100%;
			right: 0;
			top: 60px;
			.phone{
				width: 360px;
				height: 780px;
				display: block;
				float: right;
				margin: 10px 35px 0 0;
				background-image: url("../assets/phone.png");
				background-size: contain;
				background-repeat: no-repeat;
				cursor: pointer;
				font-size: 16px;
			}
		}
	}
@media screen and (max-width: 900px){
	.sidebar {
    position: fixed;
    height: 100%;
    left: 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    transform: translate(-280px, 0);
	}
	.sidebar.open {
			transform: translate(0, 0);
	}

	main section,main section .phone-m{
		display: none;
	}
	main .main-body{
		left: 10px;
		right: 10px;
	}
}

</style>
