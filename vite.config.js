import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import postCssPxToRem from "postcss-pxtorem";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // postcss.config.js配置
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // 1rem的大小
          // rootValue({ file }) {
          //   return file.indexOf("vant") !== -1 ? 37.5 : 75;
          // },
          propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ["van"], // 过滤掉.norem-开头的class，不进行rem转换
          propBlackList: ["font-size,fontSize"], //黑名单
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        }),
      ],
    },
  },
});
