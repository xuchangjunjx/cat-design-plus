import vueplugin from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";

let baseconfig = format => {
  return {
    input: "../src/ui/index.js",
    output: {
      name: "cat-design",
      globals: {
        vue: "Vue"
      },
      extend: true,
      format,
      // sourceMap: false,
      file:`dist/cat-design.${format}.js`
    },
    external: ["vue"],
    plugins: [
      vueplugin({
        css: true
      }),
      scss({
        output: "dist/cat-design.css"
      }),
      resolve(),
      babel({
        exclude: "node_modules/**", // 只编译我们的源代码
      })
    ]
  };
};
// 打包2种
export default [baseconfig("esm"), baseconfig("umd")];