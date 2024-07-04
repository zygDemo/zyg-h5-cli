import axios from "axios";
import { showToast, showDialog } from "vant";


const navigatorFun = () => {
  if (!navigator.onLine) {
    console.log("网络异常");
    showDialog({
      title: "提示",
      message: "网络异常，请检查网络设置或稍后重试",
      confirmButtonColor: "#ee0a24",
    }).then(() => {
      // wx.miniProgram.navigateTo({
      //   url: `/pages/Transfer/Transfer`,
      // });
    });
  }
};
const store = JSON.parse(sessionStorage.getItem("vuex"));
/** 创建axios实例*/
const request = axios.create({});
request.defaults.baseURL =
  process.env.NODE_ENV !== "development"
    ? process.env.VUE_APP_BASE_URL
    : "/proxyApi";
request.defaults.headers.post["Content-Type"] = "application/json";
request.defaults.timeout = 90000;
request.defaults.withCredentials = true; //Send cross-domain request credentials

request.interceptors.request.use(
  (config) => {
    if (store && store.$user?.token) {
      config.headers.token = store.$user.token;
    }
    navigatorFun();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    // 请求成功的判断
    if (response.data.code == 200) {
      return response.data;
    } else {
      showToast({
        message: response.data.message,
        duration: 2 * 1000,
      });
      // 对返回的错误进行处理
      return response.data;
    }
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 302:
          error.message = "未授权，请重新登录";
          break;
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "授权错误，请重新登录";
          break;
        case 403:
          error.message = "没有相关权限，拒绝访问";
          break;
        case 404:
          error.message = "请求错误，未找到该资源或后端接口未部署";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 413:
          error.message = "请求内容过大";
          break;
        case 500:
          error.message = "服务出错，后端有未处理错误";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误,服务更新中,请稍后重试...";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "请求超时, 可能是网络问题, 请稍后重试";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
          break;
      }
    } else {
      // 跨域获取不到状态码或者其他状态码进行的处理
      error.message = "遇到点问题，服务开小差";
    }
    showToast({
      message: error.message,
      type: "error",
      duration: 2 * 1000,
    });

    return Promise.reject(error);
  }
);
export default request;
