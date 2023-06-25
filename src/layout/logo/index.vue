<template>
  <div class="logo" v-if="setting.logoShow">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script lang="ts" setup>
import setting from '@/setting'
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  display: flex;
  align-items: center;
  color: white;
  background-color: red;
  padding: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }
  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>
