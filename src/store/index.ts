import { createStore } from 'vuex'

import { IRootState } from '../store/type'

import loginModule from './login/index'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderwhy',
      age: 20
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    loginModule
  }
})
export function setupLocalInfo(): any {
  store.dispatch('loginModule/getLocalInfo')
}
export default store
