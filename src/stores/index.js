import { createPinia, defineStore } from "pinia";
import PiniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 导出 Pinia 实例
const store = createPinia();
 
// 使用 IndexedDB 持久化存储状态
// const piniaPluginPersistedstateOptions = {
//   storage: {
//     // 使用 IndexedDB
//     type: 'indexedDB',
//     // 可选项：数据库名称
//     database: 'myDatabaseName',
//     // 可选项：是否在浏览器重启后持久化
//     serialize: true,
//     // 可选项：是否增加时效性，即定时清理过期数据
//     debounce: 3000,
//   },
// }
 
// 应用 Pinia 插件
// store.use(PiniaPluginPersistedstate(piniaPluginPersistedstateOptions))
 

store.use(PiniaPluginPersistedstate);
export default store;