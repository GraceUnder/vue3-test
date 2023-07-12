<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <breadcrumb></breadcrumb>
    </div>
    <div class="tabbar_right">
      <setTing></setTing>
    </div>
  </div>
</template>

<script lang="ts" setup>
import breadcrumb from './breadcrumb/index.vue'
import setTing from './setting/index.vue'
</script>
<style scoped lang="scss">
.tabbar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-image: linear-gradient(to right, white, black, white);

  .tabbar_left {
    display: flex;
    // width: 100%;
    height: 100%;
    align-items: center;
  }
  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
</style>
