const path = require('path')

module.exports ={
    dev: {},
    build: {
        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
    }
}