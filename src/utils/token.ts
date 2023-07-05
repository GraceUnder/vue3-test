// 封装本地存储数据与读取数据反复噶
//本地存储token
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}
//拿到本地存储的token
export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}
//删除本地存储的token
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('TOKEN')
}
