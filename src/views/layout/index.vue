<template>
  <div>
    <HomePage v-if="active === 'HomePage'"></HomePage>
    <MyPage v-if="active === 'MyPage'"></MyPage>

    <van-tabbar v-model="active" :before-change="beforeChange">
      <van-tabbar-item @click="navigateTo('HomePage')">
        <span :style="active == 'HomePage' ? 'color: #0D9AEB' : ''">首页</span>
        <template #icon>
          <img :src="active == 'HomePage' ? homeAcIcon : homeIcon" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item @click="navigateTo('MyPage')">
        <span :style="active == 'MyPage' ? 'color: #0D9AEB' : ''">我的</span>
        <template #icon>
          <img :src="active == 'MyPage' ? myAcIcon : myIcon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import HomePage from "./HomePage/HomePage.vue";
import MyPage from "./MyPage/MyPage.vue";
import homeAcIcon from "@/assets/icons/home-ac-icon.png";
import homeIcon from "@/assets/icons/home-icon.png";
import myAcIcon from "@/assets/icons/my-ac-icon.png";
import myIcon from "@/assets/icons/my-icon.png";
import { useLayoutStore } from "@/stores/layout";

const active = ref("HomePage");
const router = useRouter(),
  route = useRoute(),
  layoutStore = useLayoutStore();
onMounted(() => {
  history.pushState(null, null, document.URL);
  window.addEventListener("popstate", disableBrowserBack, false);
  initData();
});
const initData = () => {
  active.value = "HomePage";
  console.log(route.path);
  // userStore.setUserObj(loginForm);
};
onUnmounted(() => {
  window.removeEventListener("popstate", disableBrowserBack, false); //false阻止默认事件
});
// 禁止浏览器返回
const disableBrowserBack = () => {
  history.pushState(null, null, document.URL);
};

const beforeChange = (to) => {
  console.log(to);
  return true;
  // if (!store.state.$user.userInfo?.phone) {
  //   return false;
  // } else {
  //   return true;
  // }
};

const navigateTo = (path) => {
  active.value = path;
  layoutStore.setActivePath(path);
  console.log(layoutStore);
};
</script>
<style lang="scss" scoped></style>
