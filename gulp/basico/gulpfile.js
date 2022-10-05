const gulp = require('gulp')
// const {series, parallel} = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

// const antes1 = cb => {
//     console.log('Tarefa Antes 1!')
//     return cb()
// }

// const antes2 = cb => {
//     console.log('Tarefa Antes 2!')
//     return cb()
// }

// const antes3 = cb => {
//     console.log('Tarefa Antes 3!')
//     return cb()
// }

// const antes4 = cb => {
//     console.log('Tarefa Antes 4!')
//     return cb()
// }

function copiar(callback) {
    console.log('Exeução da tarefa copiar!')
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // gulp.src('pastaA/**/*.txt')  
        .pipe(gulp.dest('pastaB'))
    return callback()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

module.exports.default = series(
    // antes1,
    // antes2,
    // parallel(antes3, antes4),
    copiar,
    fim
)