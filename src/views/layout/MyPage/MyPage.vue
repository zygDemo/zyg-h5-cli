<template>
  <div class="page">
    <van-nav-bar fixed title="我的" placeholder @click-left="onClickLeft()" />
    <div>
      我的
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

onMounted(async () => {});


const onClickLeft = () => {
  history.back()
};
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 50px);
  // overflow-y: "hidden";
  box-sizing: border-box;
  padding: 15px;

  background-image: linear-gradient(
    to bottom,
    #2085f3 0%,
    #9fd6f9 20%,
    #fff 30%,
    #f5f5f5 40%
  );
}


</style>
