<template>
  <!-- svg组件 -->
  <svg aria-hidden="true" :style="{ width, height }">
    <!-- #icon-文件夹名称-图片名称 -->
    <use :href="prefix + `${name}`" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  // href属性前缀
  prefix: {
    type: String,
    default: '#icon-'
  },
  //使用图标的名字
  name: String,
  //使用图标的颜色
  color: {
    type: String,
    default: ''
  },
  // 图标的宽度
  width: {
    type: String,
    default: '16px'
  },
  // 图标的高度
  height: {
    type: String,
    default: '16px'
  }
})
</script>
<style scoped lang="scss"></style>
