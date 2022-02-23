class Storage {
  // 存缓存
  setLocalStorage(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  setSessionStorage(key: string, value: any): void {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }

  // 取缓存
  getLocalStorge(key: string): any {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  getSessionStorge(key: string): any {
    const value = window.sessionStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  // 删除缓存
  remLocalStorage(key: string): void {
    window.localStorage.removeItem(key)
  }
  remSessionStorage(key: string): void {
    window.sessionStorage.removeItem(key)
  }
}

export default new Storage()
