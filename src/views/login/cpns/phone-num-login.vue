<template>
  <div class="account-login">
    <el-form label-width="80px" :model="account" :rules="rules" ref="phoneRef">
      <el-form-item label="手机号" prop="phoneNum">
        <el-input v-model="account.phoneNum"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="smsCode">
        <div class="sms-code">
          <el-input v-model="account.smsCode" type="passWord"></el-input>
          <el-button type="primary" class="get-sms-btn"
            >获取短信验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-rule'
import { ElForm } from 'element-plus'

export default defineComponent({
  setup() {
    const account = reactive({
      phoneNum: '',
      smsCode: ''
    })
    // 获取表单元素用于表单校验
    const phoneRef = ref<InstanceType<typeof ElForm>>()
    // 登入操作
    const loginAction = () => {
      phoneRef.value?.validate((res) => {
        if (res) {
          console.log('real longin Action')
        }
      })
    }
    return {
      account,
      rules,
      phoneRef,
      loginAction
    }
  }
})
</script>

<style scoped lang="less">
.sms-code {
  display: flex;
  .get-sms-btn {
    margin-left: 10px;
  }
}
</style>
