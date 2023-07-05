import axios from 'axios'
import { ElMessage } from 'element-plus'
// import { ElMessage } from 'element-plus'

const instance = axios.create({
  //基础地址,超时时间
  // baseURL: import.meta.env.BASE_URL,基于vite.config里面设置的base
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000
})
instance.interceptors.request.use(
  (config) => {
    //携带token
    const token = 0
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    let message = ''
    const status = err.response.status
    switch (status) {
      case 401:
        message = 'TOKEN失效'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '访问地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    //提示错误
    ElMessage({
      type: 'error',
      message
    })
    return Promise.reject(err)
  }
)
export default instance
