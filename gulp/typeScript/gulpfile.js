const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tssconfig.json')

function transformacaoTS(cb){
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

module.exports.default = series(transformacaoTS)