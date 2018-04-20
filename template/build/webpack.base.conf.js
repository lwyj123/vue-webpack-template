var path = require('path');
var utils = require('./utils');
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
var src = path.resolve(__dirname, '../src');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV !== 'development' ?  config.build.assetsPublicPath: config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'src': resolve('src'),
            'filters': resolve('src/filters'),
            'assets': path.join(__dirname, '../src/assets'),
            'components': path.join(__dirname, '../src/components'),
            'views': path.join(__dirname, '../src/views'),
            'styles': path.join(__dirname, '../src/styles'),
            'api': path.join(__dirname, '../src/api'),
            'utils': path.join(__dirname, '../src/utils'),
            'vuex-store': path.join(__dirname, '../src/store'),
            'router': path.join(__dirname, '../src/router'),
            'vendor': path.join(__dirname, '../src/vendor'),
            'static': path.join(__dirname, '../static')
        }
    },
    externals: {
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: "pre",
                include: [resolve('src')],
                // options: {
                //     formatter: require('eslint-friendly-formatter')
                // }
            },
            {   
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
//    注入全局mixin
//     sassResources: path.join(__dirname, '../src/styles/mixin.scss'),
//     sassLoader: {
//         data:  path.join(__dirname, '../src/styles/index.scss')
//     },
}