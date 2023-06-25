import axios from 'axios'

const instance = axios.create({
  //基础地址,超时时间
  baseURL: '/',
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
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)
export default instance
