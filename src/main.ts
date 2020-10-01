import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Frank from './components/Frank.vue'
import Frank2 from './components/Frank2.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Frank },
    { path: '/xxx', component: Frank2 },
  ],
})
const app = createApp(App)
app.use(router)
app.mount('#app')
