<template>
  <div id="app">
    <Top v-if="hasTop !== false"></Top>
    <div style="width: 100%;height: 100%;">
      <Left v-if="hasLeft !== false" style="width: 200px;height: 100%;"></Left>
      <el-main>
        <router-view />
      </el-main>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Top from "@/components/Top.vue";

import { routes } from "@/router";
import store from "@/store";
export default {
  name: "App",
  data() {
    return {
      routes
    };
  },
  computed: {
    hasLeft: () => {
      return store.state.hasLeft;
    },
    hasTop: () => {
      return store.state.hasTop;
    }
  },
  components: {
    Left,
    Top
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
