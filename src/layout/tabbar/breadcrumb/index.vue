<template>
  <!-- 顶部左侧静态 -->
  <el-icon @click="changeIcon">
    <!-- <Expand></Expand> -->
    <component :is="isExpand ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <el-breadcrumb :separator-icon="ArrowRight" style="margin-left: 10px">
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户权限</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { ref } from 'vue'
let changeIcon = () => {
  console.log('哈哈')
}
let isExpand = ref(false)
</script>
<style scoped></style>
