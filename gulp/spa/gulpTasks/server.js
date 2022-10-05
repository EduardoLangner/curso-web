const gulp = require('gulp')
const webserver = require('gulp-webserver')

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            livereload: true,
            port: 3000,
            open: true
        }))
}

module.exports = {
    servidor
}