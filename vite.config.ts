import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";

const path = require("path");

const resolvePath = (str: string) => path.resolve(__dirname, str);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   lib: {
  //     entry: resolvePath("components/index.ts"),
  //     name: "twui",
  //     fileName: (format) => `twui.${format}.js`,
  //   },
  //   rollupOptions: {
  //     external: ["react", "react-dom", "antd"],
  //     output: {
  //       globals: {
  //         react: "react",
  //         antd: "antd",
  //         "react-dom": "react-dom",
  //       },
  //     },
  //     plugins: [
  //       typescript({
  //         target: "es2015", // 这里指定编译到的版本，
  //         rootDir: resolvePath("components/"),
  //         declaration: true,
  //         declarationDir: resolvePath("dist/"),
  //         exclude: resolvePath("node_modules/**"),
  //         allowSyntheticDefaultImports: true,
  //       }),
  //     ],
  //   },
  // },
});
