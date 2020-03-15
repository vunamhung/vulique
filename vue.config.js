module.exports = {
    lintOnSave: undefined,
    productionSourceMap: false,
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
