const path = require('path')
const config = require('../config/index.js')
exports.assetsPath = function (_path) {
    const assetsSubDirectory = config.build.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}