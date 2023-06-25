//创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入定义的登录数据类型
import type { LoginFormData } from '@/api/user/type'

//引入操作本地存储的方法
import { GET_TOKEN } from '@/utils/token'

//引入路由数组
import { constantRouter } from '@/router/router'

const userUsersStore = defineStore('User', {
  //创建用户小仓库
  state: () => {
    return {
      //获取token
      token: GET_TOKEN(),
      menuRoutes: constantRouter //仓库存储生成菜单需要的数组
    }
  },
  //异步逻辑
  actions: {
    userLogin(data: LoginFormData) {
      //用户登录的方法
      console.log(data)
    }
  },
  getters: {}
})

//暴露获取小仓库
export default userUsersStore
