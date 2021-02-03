// @ts-nocheck
import { createWebHashHistory, createRouter } from 'vue-router'
import {h} from 'vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import Markdown from './components/Markdown.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Intro from './markdown/Intro.md'
import Install from './markdown/Install.md'
import QuickStart from './markdown/QuickStart.md'

const history = createWebHashHistory()
const md = string => h(Markdown, { content: string, key: string })
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
		{ path: '/doc', component: Doc,
		children:[
			{ path: '', redirect:'/doc/Intro', },
			{ path: 'Intro', component: md(Intro) },
			{ path: 'Install', component: md(Install) },
			{ path: 'QuickStart', component: md(QuickStart) },
			{ path: 'SwitchDemo', component: SwitchDemo },
			{ path: 'ButtonDemo', component: ButtonDemo },
			{ path: 'DialogDemo', component: DialogDemo },
			{ path: 'TabsDemo', component: TabsDemo },

			]
	 	},
  ],
})

export {
  router
}