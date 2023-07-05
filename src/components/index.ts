import SvgIcon from '@/components/SvgIcon/index.vue'
const allGlobalComponent: any = { SvgIcon }
//引入app的类型
import type { App } from 'vue'
//暴露出组件的install方法
export default {
  install(app: App) {
    // console.log(allGlobalComponent)
    Object.keys(allGlobalComponent).forEach((key) => {
      // console.log(key)
      app.component(key, allGlobalComponent[key])
    })
    // console.log(app)
  }
}
