const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    productionSourceMap: false,
    lintOnSave: true,
    configureWebpack: (config) => {
        config.resolve ={
            alias:{
                "@": path.resolve(__dirname, './src'),
                "components": path.resolve(__dirname, 'src/components'),
                "views": path.resolve(__dirname, 'src/views'),
                "store": path.resolve(__dirname, 'src/store'),
                "router": path.resolve(__dirname, 'src/router'),
            },
            extensions: ['.js', '.json', '.vue',".ts"],
        }
    }
};