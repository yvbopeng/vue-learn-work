import './assets/main.css'
import "@/assets/font/font.css"

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// main.ts
import 'virtual:uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueKonva from 'vue-konva';

import App from './App.vue'
import router from './router'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueKonva);

app.mount('#app')
