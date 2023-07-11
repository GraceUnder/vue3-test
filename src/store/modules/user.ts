//创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入定义的登录数据类型
import type { LoginFormData } from '@/api/user/type'
//引入操作本地存储的方法
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
//引入路由数组
import { constantRouter } from '@/router/router'
//引入登录请求
import { reqLogin } from '@/api/user'
//错误提示
// import { ElMessage } from 'element-plus'
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
    //小仓库的登录请求
    async userLogin(data: LoginFormData) {
      //用户登录的方法
      //登录请求
      const result = await reqLogin(data)
      if (result.code === 200) {
        //将token存储在仓库
        this.token = result.data?.token as string
        //本地持久化存储一份token
        SET_TOKEN(result.data?.token as string)
        //保证当前的async函数返回一个成功的promise
        return 'ok'
      } else {
        //接受返回数据的message
        const message = result.data?.message
        // console.log(message)
        return Promise.reject(new Error(message))
        // 使用错误提示ui
        // ElMessage({
        //   type: 'error',
        //   message: message
        // })
      }
    }
  },
  getters: {}
})

//暴露获取小仓库
export default userUsersStore
