<template>
  <div class="page">
    <van-nav-bar fixed title="产品超市" placeholder @click-left="onClickLeft()" />
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

onMounted(async () => {});
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
    store.commit("$user/setUserInfo", { phoneType: "apple" });
  } else if (isAndroidDevice) {
    console.log("这是安卓手机");
    store.commit("$user/setUserInfo", { phoneType: "android" });
  } else {
    console.log("这是其他类型的设备");
  }
};

const onClickLeft = () => {
  history.back()
};
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 66px);
  overflow-y: "hidden";
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
.sticky-header {
  width: 343px;
  .type {
    margin-top: 15px;
    width: 100px;
    display: flex;
    align-items: center;
    :deep(.van-dropdown-menu__bar) {
      height: 24px;
      line-height: 24px;
      width: 100px;
      background-color: transparent;
      box-shadow: none;
      .van-dropdown-menu__title {
        color: white;
      }
    }
  }
}

.card-list {
  margin-top: 10px;
  padding-bottom: 66px;
  .card-item {
    height: 180px;
    background-color: #fff;
    margin-bottom: 15px;
    border-radius: 8px;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
    .card-item-img1 {
      position: absolute;
      width: 56px;
      height: 24px;
      right: 0;
      top: -5px;
    }
    .card-item-img2 {
      position: absolute;
      width: 90px;
      height: 84px;
      right: 0;
      bottom: 0;
    }

    .card-item-content {
      margin-top: 5px;
      padding: 15px;
      .row1 {
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        color: #333;
        margin-top: 2px;
        height: 22px;
        :first-child img {
          margin-top: 3px;
          width: 16px;
          height: 16px;
          object-fit: cover;
        }
        :last-child {
          font-size: 12px;
          font-weight: 500;
          color: #f39801;
        }
      }

      .row2 {
        display: flex;
        height: 50px;
        margin-top: 10px;
        .row2-text {
          line-height: 17px;
          color: #666;
          font-weight: 500;
          font-size: 12px;
        }
        .row2-left {
          flex: 1;
          font-weight: 600;
          color: #e62129;
          font-size: 24px;
          line-height: 33px;

          :first-child {
            height: 33px;
          }
          span {
            font-size: 14px;
          }
        }
        .row2-right {
          flex: 1;
          font-weight: 600;
          color: #333f4f;
          font-size: 20px;
          height: 33px;
          line-height: 33px;
          :first-child {
            height: 33px;
          }

          .row2-div-ht {
            height: 33px;
            font-size: 13px;
            line-height: 33px;
            // color: #e62129;
          }
        }
      }
      .row3 {
        line-height: 17px;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
