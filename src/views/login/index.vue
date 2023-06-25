<template>
  <!-- <div>这是登录页面</div> -->
  <div class="login-container">
    <!-- <h1>我是一级路由</h1> -->
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-card class="login_form">
          <h1 class="login_title">Hello</h1>
          <h2 class="login_title">欢迎登录</h2>
          <el-form class="login_pass">
            <el-form-item>
              <el-input v-model="loginForm.userName" :prefix-icon="User">{{
                name
              }}</el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                type="password"
                v-model="loginForm.password"
                :prefix-icon="Lock"
                :suffix-icon="Hide"
              ></el-input>
            </el-form-item>
            <el-button
              type="primary"
              style="width: 100%"
              :prefix-icon="Warning"
              @click="login"
              >登录</el-button
            >
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { User, Lock, Warning, Hide } from '@element-plus/icons-vue'
import userUsersStore from '@/store/modules/user'

let userStore = userUsersStore()
const name = ref('admin')
// const password = ref(123456)
const loginForm = reactive({
  userName: 'admin',
  password: '123456'
})
// 登录
const login = () => {
  userStore.userLogin(loginForm)
}
</script>
<style scoped scss>
.login-container {
  width: 100%;
  height: 100vh;
  background-color: pink;
  .login_form {
    position: relative;
    width: 55%;
    top: 35vh;
    left: 10vw;
    padding: 10px;
    background: transparent;
    .login_title {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }
    .login_pass {
      padding: 20px;
    }
  }
}
</style>
