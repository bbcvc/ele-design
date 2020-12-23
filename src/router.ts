import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'


const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
		{ path: '/doc', component: Doc,
		children:[
			{ path: '/SwitchDemo', component: SwitchDemo },
			]
	 	},
  ],
})

export {
  router
}