<template>
  <div class="login">
    <login-cpn></login-cpn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginCpn from './cpns/login-cpn.vue'

export default defineComponent({
  components: {
    LoginCpn
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/img/login-bg.svg');
}
</style>
