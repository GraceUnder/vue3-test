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
          <el-form
            class="login_pass"
            ref="ruleFormRef"
            :rules="rules"
            :model="loginForm"
          >
            <el-form-item prop="username">
              <el-input
                v-model="loginForm.username"
                :prefix-icon="User"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                :type="passwordShow ? 'text' : 'password'"
                v-model="loginForm.password"
                :prefix-icon="Lock"
              >
                <!-- :suffix-icon="Hide" -->
                <template #append>
                  <el-button
                    :icon="passwordShow ? View : Hide"
                    @click="passwordShow = !passwordShow"
                  />
                </template>
                <!-- View -->
              </el-input>
            </el-form-item>
            <el-button
              type="primary"
              style="width: 100%"
              :prefix-icon="Warning"
              :loading="loading"
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
import { User, Lock, Warning, Hide, View } from '@element-plus/icons-vue'
//引入相关的小仓库
import userUsersStore from '@/store/modules/user'

//获取时间段函数
import { getTime } from '@/utils/getTime'

//引入路由
import { useRouter } from 'vue-router'
import { ElNotification, type FormInstance } from 'element-plus'
let userStore = userUsersStore()

//是否展示密码
let passwordShow = ref(false)

//定义登录按钮的加载
let loading = ref(false)
let $router = useRouter()
//登录表单初始数据
const loginForm = reactive({
  username: 'admin',
  password: '123456'
})
//=======表单验证
//表单实例
const ruleFormRef = ref<FormInstance>()

const validateUsername = (rule: any, value: any, callback: any) => {
  //rule校验对象
  //value:表单的文本内容
  //callback校验是否通过执行的函数 校验通过则执行这个函数 不通过则返回一个错误对象
  if (value === '') {
    callback(new Error('用户名不能为空'))
  } else if (value.length < 5 || value.length > 8) {
    callback(new Error('用户名长度不能小于5不能大于8'))
  } else {
    callback()
  }
}
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  } else if (value.length < 5 || value.length > 8) {
    callback(new Error('密码长度为5-8位'))
  } else {
    callback()
  }
}

const rules = {
  username: [{ validator: validateUsername, trigger: 'change' }],
  password: [{ validator: validatePass, trigger: 'blur' }]
}

// 登录
const login = async () => {
  // console.log(loginForm)
  // 启用加载
  loading.value = true
  // 调用仓库的里的登录方法
  try {
    await userStore.userLogin(loginForm)
    //登录成功后跳转
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功,欢迎回来',
      title: `${getTime()}好`
    })
    //登录成功后关闭加载
    loading.value = false
  } catch (error) {
    // console.log(error)
    loading.value = false
    ElNotification({
      type: 'error',
      //类型断言为error
      message: (error as Error).message
    })
  }
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
