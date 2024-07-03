<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
onMounted(() => {
  getPhoneType();
});
const getPhoneType = () => {
  // 获取用户代理字符串
  const userAgent = navigator.userAgent;
  // 判断是否是苹果手机
  const isAppleDevice = /iPhone|iPad|iPod/.test(userAgent);
  // 判断是否是安卓手机
  const isAndroidDevice = /Android/.test(userAgent);
  // 输出结果
  if (isAppleDevice) {
    console.log("这是苹果手机");
    // store.commit("$user/setUserInfo", { phoneType: "apple" });
  } else if (isAndroidDevice) {
    console.log("这是安卓手机");
    // store.commit("$user/setUserInfo", { phoneType: "android" });
  } else {
    console.log("这是其他类型的设备");
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /* background-color: #f5f5f5; */
}
/* 在浏览器窗口宽度大于等于 1024 像素时应用其中定义的样式 */
/* @media (min-width: 1024px) {
} */
</style>
