import './assets/main.css'
import "@/assets/font/fonst.css"

// main.ts
import 'virtual:uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueKonva from 'vue-konva';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueKonva);

app.mount('#app')
