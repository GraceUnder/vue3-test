/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-19 17:16:03
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-23 21:32:17
 */
// 登录接口需要携带参数ts类型
export interface LoginFormData {
  username?: string
  password?: string
}

//登录信息  返回的data数据
export interface ResponseData {
  // code?: number
  token: string
  message?: string
  ok?: boolean
}

export interface LoginResponseData extends ResponseData {
  code?: number
  data?: ResponseData
}

export interface userInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
