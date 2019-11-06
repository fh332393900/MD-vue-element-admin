const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const config = require('../config/index.js')
const utils = require('./utils.js')

 
const webpackConfig = merge(common,{
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    }
})
module.exports = webpackConfig
