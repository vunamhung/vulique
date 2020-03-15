module.exports = {
    lintOnSave: "warning",
    productionSourceMap: false,
    transpileDependencies: [/\bvue-awesome\b/],
    configureWebpack: {
        devtool: "eval-source-map",
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
