import { createWebHashHistory, createRouter } from 'vue-router'
import {h} from 'vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import Markdown from './components/Markdown.vue'
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
			{ path: 'Intro', component: h(<any>Markdown,{path:"../markdown/Intro.md",key:"Intro"}) },
			{ path: 'Install', component: h(<any>Markdown,{path:"../markdown/Install.md",key:"Install"}) },
			{ path: 'QuickStart', component: h(<any>Markdown,{path:"../markdown/QuickStart.md",key:"QuickStart"}) },
			]
	 	},
  ],
})

export {
  router
}