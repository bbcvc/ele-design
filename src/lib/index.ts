import {createApp,h} from "vue"
import Dialog from './dialog/Dialog.vue'
const openDialog=(options)=>{
	const {title,content}=options
	const div=document.createElement('div')
	document.body.appendChild(div)
	const close=()=>{
		app.unmount(div)
		div.remove()
	}
	const app=createApp({
		render() {
			return h(
				Dialog,
			{visible:true,
				"onUpdate:visible":(newVisible)=>{
					newVisible===false&&close()
				}
			},{
				title,content
			})
		},
	})
	app.mount(div)
}
export {openDialog}