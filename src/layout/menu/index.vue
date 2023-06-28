<template>
  <div>
    <!-- <h1>{{ menu_list }}</h1> -->
    <template v-for="(item, index) in menu_list" :key="index.path">
      <!-- <div style="color: white">哈哈{{ index }}啊啊</div> -->
      <!-- 没有子路由 -->
      <el-menu-item
        v-if="!item.children && !item.meta.hidden"
        :index="item.path"
      >
        <template #title>
          <span>标&nbsp;</span>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      <!-- 只有一个子路由 -->
      <el-menu-item
        v-if="
          item.children &&
          item.children.length == 1 &&
          !item.children[0].meta.hidden
        "
        :index="item.children[0].path"
      >
        <template #title>
          <span>标&nbsp;</span>
          <span>{{ item.meta.title }}哈哈</span>
        </template>
      </el-menu-item>
      <!-- 有两个及以上的子路由 -->
      <el-sub-menu
        :index="item.path"
        v-if="item.children && item.children.length > 1"
      >
        <template #title>
          <span>标&nbsp;</span>
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- <el-menu-item :index="item.children.path">{{ item }}</el-menu-item> -->
        <myMenu :menu_list="item.children"></myMenu>
      </el-sub-menu>
    </template>
  </div>
</template>

<script lang="ts" setup>
defineProps(['menu_list'])
</script>
<!-- 导出组件 -->
<script lang="ts">
export default {
  name: 'myMenu'
}
</script>
<style scoped lang="scss">
h1 {
  color: white;
}
</style>
