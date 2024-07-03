import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import postCssPxToRem from "postcss-pxtorem";
// const VITE_BASE_URL =import.meta.env.VITE_BASE_URL

export default ({ mode }) => {
  // console.log(loadEnv().VITE_BASE_URL);
  const VITE_BASE_URL = loadEnv(mode, process.cwd()).VITE_BASE_URL;
  // console.log(mode);
  return defineConfig({
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

    server: {
      host: "0.0.0.0",
      port: 8080,
      open: true,
      proxy: {
        "/proxyApi": {
          target: VITE_BASE_URL || "/",
          // target: "https://sit.yzy-dht.com", // 代理目标地址
          // 代理websockets
          ws: true,
          // 开启代理 (允许跨域)
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/proxyApi/, ""), // 可选的重写路径
        },
      },
    },
  });
};
