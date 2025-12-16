import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { motion } from 'motion-v'

const app = createApp(App)

app.use(motion)
app.mount('#app')
