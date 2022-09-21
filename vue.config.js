module.exports = {
  // css: {
  //   loaderOptions: {
  //     sass: {
  //     },
  //   }
  // },
  chainWebpack: config => {
    if (process.env.npm_config_report) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          components: {
            name: "chunk-ui",
            test: /[\\/]src\/ui[\\/]/,
            chunks: "all",
            priority: 6,
            reuseExistingChunk: true,
            enforce: true
          },
          runtimeChunk: {
            name: "manifest"
          }
        }
      }
    }
  }
};
