// 引入要注册的全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
// 将组件的对象集合
const allGlobalComponent: any = { SvgIcon }
// 引入注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入app的类型
import type { App } from 'vue'
//暴露出组件的install方法
export default {
  install(app: App) {
    // console.log(allGlobalComponent)
    //遍历每一项并统一注册
    Object.keys(allGlobalComponent).forEach((key) => {
      // console.log(key)
      app.component(key, allGlobalComponent[key])
    })
    //注册elIcon图标
    // console.log(ElementPlusIconsVue)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}
