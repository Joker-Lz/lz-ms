// 根state 类型
export interface IRootState {
  name: string
  age: number
}
// 登入模块state类型
export interface ILoginState {
  token: string
  userInfo: any
  id: number
  userMenus: any
}
