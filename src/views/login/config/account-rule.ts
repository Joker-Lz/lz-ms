// 表单校验规则
export const rules = {
  name: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '请输入正确的用户名',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '请输入正确密码',
      trigger: 'blur'
    }
  ],
  phoneNum: [
    { required: true, message: '手机号不能为空', trigger: 'blur' },
    {
      pattern: /^[0-9]{1,11}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur'
    }
  ],
  smsCode: [
    { required: true, message: '验证码不能为空', trigger: 'blur' },
    {
      pattern: /^[0-9]{4}$/,
      message: '请输入正确的验证码',
      trigger: 'blur'
    }
  ]
}
