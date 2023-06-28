<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <!-- Logo -->
      <Logo></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <!-- <div>
            <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">快递管理</el-menu-item>
          <el-menu-item index="3">快递员管理</el-menu-item>
          <el-sub-menu index="4">
            <template #title>订单管理</template>
            <el-menu-item index="4-1">订单管理分一</el-menu-item>
            <el-menu-item index="4-2">订单管理分二</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="5">分成管理</el-menu-item>
          <el-menu-item index="6">驿站管理列表</el-menu-item>
          <el-menu-item index="7">数据统计管理列表</el-menu-item>
          <el-menu-item index="8">提现记录列表</el-menu-item>
          <el-menu-item index="9">售后服务</el-menu-item> 
          </div> -->

          <Menu :menu_list="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 导航栏 -->
    <div class="layout_tabbar">456</div>
    <!-- 内容展示 -->
    <div class="layout_main">789</div>
  </div>
</template>

<script lang="ts" setup>
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
//引入用户相关的小仓库
import userUsersStore from '@/store/modules/user'
let userStore = userUsersStore()
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  // background-color: blue($color: #000000);
  background-color: skyblue;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
      // .scrollbar-demo-item {
      //   display: flex;
      //   align-items: center;
      //   justify-content: center;
      //   height: 50px;
      //   margin: 10px;
      //   text-align: center;
      //   border-radius: 4px;
      //   background: var(--el-color-primary-light-9);
      //   color: var(--el-color-primary);
      // }
    }
  }
  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: #d2f319;
    top: 0;
    right: 0;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: pink;
    top: $base-tabbar-height;
    right: 0;
  }
}
</style>
