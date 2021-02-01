import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import QuickStart from './views/QuickStart.vue'

import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
		{ path: '/doc', component: Doc,
		children:[
			{ path: '', redirect:'/doc/Intro', },
			{ path: 'SwitchDemo', component: SwitchDemo },
			{ path: 'ButtonDemo', component: ButtonDemo },
			{ path: 'DialogDemo', component: DialogDemo },
			{ path: 'TabsDemo', component: TabsDemo },
			{ path: 'Intro', component: Intro },
			{ path: 'Install', component: Install },
			{ path: 'QuickStart', component: QuickStart },
			]
	 	},
  ],
})

export {
  router
}