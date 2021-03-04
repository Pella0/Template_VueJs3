import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import mitt from 'mitt'

/* export const bus = new Vue(); */

/* createApp(App).mount('#app') */
export const emitter = mitt()

const app = createApp(App)

app.config.globalProperties.emitter = emitter
app.mount('#app')
