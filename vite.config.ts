import { defineConfig } from "vite";
const path = require("path");
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "127.0.0.1",
    port: 4000,
    open: true,
    https: false,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index"),
      name: "KakoUtils",
      fileName: (format) => `kakoutils.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
