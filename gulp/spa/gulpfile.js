const gulp = require('gulp')
const { series, parallel } = require('gulp')
const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/server')

module.exports.default = series(
    parallel(
        series(depsCSS, depsFonts),
        series(appHTML, appCSS, appJS, appIMG)
    ),
    servidor,
    monitorarArquivos
)
      