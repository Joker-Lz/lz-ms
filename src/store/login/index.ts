import { Module } from 'vuex'
import { ILoginState, IRootState } from '../type'
import {
  requestUserInfoById,
  accountLoginRequest,
  requestUserMenusByRoleId
} from '@/service/login/login'
import storage from '@/utils/storage'
import routers from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      id: 0,
      userMenus: {}
    }
  },
  mutations: {
    // 保存Token
    changeToken(state, token: string) {
      state.token = token
      storage.setLocalStorage('TOKEN', state.token)
    },
    changeId(state, id: number) {
      state.id = id
    },
    // 保存用户信息
    saveUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    // 保存菜单信息
    saveMenuInfo(state, menus: any) {
      state.userMenus = menus
    }
  },
  actions: {
    // 真正的登入操作
    async accountLoginAction({ commit }, paload: any) {
      const loginRes = await accountLoginRequest(paload)
      const { token, id } = loginRes.data
      commit('changeToken', token)

      // 请求用户信息
      const userInfoRes = await requestUserInfoById(id)
      const userInfo = userInfoRes.data
      commit('saveUserInfo', userInfo)
      storage.setLocalStorage('userInfo', userInfo)

      // 请求菜单信息
      const menusRes = await requestUserMenusByRoleId(userInfo.role.id)
      const menus = menusRes.data
      commit('saveMenuInfo', menus)
      storage.setLocalStorage('menus', menus)

      // 页面路由跳转
      routers.push('/main')
    },

    // 刷新页面后重新在vuex里面保存用户信息
    getLocalInfo({ commit }) {
      const token = storage.getLocalStorge('TOKEN')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = storage.getLocalStorge('userInfo')
      if (token) {
        commit('saveUserInfo', userInfo)
      }
      const menus = storage.getLocalStorge('menus')
      if (token) {
        commit('saveMenuInfo', menus)
      }
    }
  },
  getters: {}
}
export default loginModule
