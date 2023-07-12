<template>
  <el-button icon="Refresh" circle />
  <el-button icon="FullScreen" circle />
  <el-dropdown style="margin-left: 10px">
    <el-button icon="Setting" circle />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>设置</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- //用户头像 -->
  <div class="demo-type">
    <div>
      <el-avatar :src="setting.logo" />
    </div>
  </div>
  <!-- 用户登录退出 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      用户名
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import setting from '@/setting'
</script>
<style scoped lang="scss">
.demo-type {
  margin: 0 10px;
}
</style>
