module.exports = {
  lintOnSave: "warning",
  productionSourceMap: false,
  configureWebpack: {
    devtool: "eval-source-map",
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.transformAssetUrls = {
          img: "src",
          image: "xlink:href",
          "b-avatar": "src",
          "b-img": "src",
          "b-img-lazy": ["src", "blank-src"],
          "b-card": "img-src",
          "b-card-img": "src",
          "b-card-img-lazy": ["src", "blank-src"],
          "b-carousel-slide": "img-src",
          "b-embed": "src",
        };

        return options;
      });
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `@import "~bootstrap/scss/functions";@import "~@/assets/scss/variables";`,
      },
    },
  },
};
