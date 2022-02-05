import { createApp, useAttrs } from 'vue'
import Index from './Index.vue'
import './registerServiceWorker'
import './assets/main.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import gsap from 'gsap'
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(Index).use(store).use(router).use(ElementPlus).use(gsap).component('GDialog', GDialog).mount('#app')
