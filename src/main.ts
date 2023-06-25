import { createApp } from 'vue'
//引入仓库
// import { createPinia } from 'pinia'
import pinia from './store'

// import './styles/main.scss'
import './styles/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
