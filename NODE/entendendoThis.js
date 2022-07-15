console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === module.exports)
    console.log(this === exports)
    console.log(this === global)
}

logThis()

/* Dentro do escopo de uma função, o this aponta para o objeto global.
   Fora do escopo de uma função, o this aponta para module.exports. */