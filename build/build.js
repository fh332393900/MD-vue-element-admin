const path = require('path')
const ora = require('ora')
const chalk = require('chalk')
const rm = require('rimraf')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.js')
const config = require('../config/index.js')

const spinner = new ora({
    color: 'magenta',
    text: `${chalk.cyan('building for production...')}`
})
spinner.start()
rm(path.join(config.build.assetsRoot,config.build.assetsSubDirectory), err => {
    if (err) throw err
    webpack(webpackConfig,(err,stats) => {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false, 
            chunks: false,
            chunkModules: false
        }) + '\n\n')
    
        if (stats.hasErrors()) {
            console.log(`${chalk.red('error!')}`)
            process.exit(1)
        }
        spinner.succeed(`${chalk.green('Build complete!')}`)
        console.log(chalk.cyan(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
          ))
    })
})
