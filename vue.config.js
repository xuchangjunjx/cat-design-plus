const webpackConfig = () => {
  if (process.env.npm_build_lib) {
    return {};
  }
  return {
    optimization: {
      splitChunks: {
        cacheGroups: {
          // components: {
          //   name: "chunk-ui",
          //   test: /[\\/]src\/ui[\\/]/,
          //   chunks: "all",
          //   priority: 6,
          //   reuseExistingChunk: true,
          //   enforce: true
          // },
          runtimeChunk: {
            name: "manifest"
          }
        }
      }
    }
  };
};

const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  chainWebpack: config => {
    // 配置一个别名
    config.resolve.alias.set("$cat-design", resolve("rollup-build"));
    if (process.env.npm_config_report) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
  },
  configureWebpack: webpackConfig()
};
