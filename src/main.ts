import { createApp } from 'vue'
//引入仓库
// import { createPinia } from 'pinia'
import pinia from './store'

// svg插件需要使用的配置
import 'virtual:svg-icons-register'
//全局引入封装好的svg组件
import SvgIcon from '@/components/SvgIcon/index.vue'

//自定义插件对象:注册整个项目的全局组件
import globalComponent from '@/components'

// 引入全局样式
// import './styles/main.scss'
import './styles/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)
//自定义插件的使用
app.use(globalComponent)
//全局注册svg组件
app.component('SvgIcon', SvgIcon)
app.mount('#app')
