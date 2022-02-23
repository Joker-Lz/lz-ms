<template>
  <div class="account-login">
    <el-form label-width="60px" :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'
import { rules } from '../config/account-rule'
import storage from '@/utils/storage'
export default defineComponent({
  setup() {
    // 获取vuex的store，用于执行登入操作
    const store = useStore()
    let account = reactive({})
    // 是否有缓存账号和和密码
    const storageAccount = storage.getLocalStorge('ACCOUNT')
    if (storageAccount) {
      account = reactive(storageAccount)
    } else {
      account = reactive({
        name: 'coderwhy',
        password: '123456'
      })
    }

    // 获取表单元素
    const formRef = ref<InstanceType<typeof ElForm>>()
    // 真正的登入操作
    const loginAction = (isKeepPwd: boolean) => {
      // 登入按钮检验
      formRef.value?.validate((res) => {
        // 验证是否通过
        if (res) {
          // 是否保存密码
          if (isKeepPwd) {
            // 保存账号密码
            storage.setLocalStorage('ACCOUNT', account)
          } else {
            // 删除账号密码
            storage.remLocalStorage('ACCOUNT')
          }
        }
        // 执行vuex里面的登入操作
        store.dispatch('loginModule/accountLoginAction', { ...account })
        // if (storage.getLocalStorge('TOKEN')) {
        //   store.dispatch('loginModule/_getUserInfo',)
        // }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
