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
                prependData: `@import "~bootstrap/scss/functions.scss";@import "~@/assets/scss/_variables.scss";`,
            },
        },
    },
};
