module.exports = {
    lintOnSave: undefined,
    productionSourceMap: false,
    configureWebpack: {
        devtool: "eval-source-map",
    },
    css: {
        loaderOptions: {
            css: {
                sourceMap: true,
                importLoaders: 2,
            },
            scss: {
                prependData: `@import "~bootstrap/scss/functions";@import "~@/assets/scss/variables";`,
            },
        },
    },
};
