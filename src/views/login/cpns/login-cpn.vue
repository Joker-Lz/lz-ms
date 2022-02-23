<template>
  <div class="container">
    <h2>请登入您的账户</h2>
    <el-tabs type="border-card" stretch v-model="loginType">
      <!-- 账号登入面板 -->
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <account-login ref="accountRef"></account-login>
      </el-tab-pane>
      <!-- 手机号登入面板 -->
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <phone-num-login></phone-num-login>
      </el-tab-pane>
    </el-tabs>
    <div class="slider">
      <el-checkbox v-model="isKeepPwd">记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>
    <!-- 登入按钮 -->
    <el-button class="login-btn" @click="loginClick" type="primary"
      >登入</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AccountLogin from './account-login.vue'
import PhoneNumLogin from './phone-num-login.vue'

export default defineComponent({
  components: {
    AccountLogin,
    PhoneNumLogin
  },
  setup() {
    // 是否保存密码
    const isKeepPwd = ref(false)
    // 监听登入的点击事件
    const accountRef = ref<InstanceType<typeof AccountLogin>>()
    // 登入方式切换
    const loginType = ref('account')
    const loginClick = () => {
      // 在组件内部监听
      if (loginType.value === 'account') {
        accountRef.value?.loginAction(isKeepPwd.value)
      } else {
        // 手机号登入
        console.log('手机号登入')
      }
    }

    return {
      loginClick, // 登入点击事件
      accountRef, // 登入组件元素
      isKeepPwd, // 是否保存密码
      loginType // 登入方式
    }
  }
})
</script>

<style scoped lang="less">
.container {
  width: 350px;
  text-align: center;
  margin-bottom: 150px;
  .slider {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
