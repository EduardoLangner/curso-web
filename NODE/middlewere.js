// middleewere pattern (chain of responsibility)
// é um padrão de projeto de software que permite que vários objetos possam passar por uma série de filtros antes de chegar ao objeto final.

const pessoa1 = function(ctx, next){
    ctx.valor1 = 'mid1' // ctx é o contexto, ou seja, o objeto que vai ser passado para o próximo middleware
    next() // chama o próximo middleware
}

const pessoa2 = function(ctx, next){
    ctx.valor2 = 'mid2'
    next()
}

const pessoa3 = function(ctx){ // não precisa passar o next, pois não vai chamar o próximo middleware
    ctx.valor3 = 'mid3'
}

const exec = function(ctx, ...middleware){ // ...middleware é um operador rest, que permite que vários parâmetros sejam passados para uma função
    const execPasso = function(indice){ // indice é o índice do middleware que está sendo executado
        middleware && indice < middleware.length && // se o middleware existir e o indice for menor que o tamanho do array
        middleware[indice](ctx, () => execPasso(indice + 1)) // chama o próximo middleware
    }
    execPasso(0) // chama o primeiro middleware
}

const ctx = {} //
exec(ctx, pessoa1, pessoa2, pessoa3) // passa o contexto e os middlewares
console.log(ctx)      