<template>
  <div class="left-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="vertical"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item
        v-for="(item, index) in menuItems"
        :key="index"
        :index="item.name"
        >{{ (item.meta && item.meta.title) || item.name }}</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
import { routes } from "@/router";

export default {
  name: "left",
  data() {
    return {
      menuItems: routes,
      activeIndex: 0,
      activeItem: 0
    };
  },
  //   components: { Nav },
  methods: {
    handleSelect(key, keyPath) {
      this.selectItem(key);
    },
    selectItem(name) {
      // this.activeItem = index;
      // 处理导航项点击事件
      this.$router.push({ name });
    }
  }
};
</script>
<style>
.left-container {
  height: 100%;
}
</style>
