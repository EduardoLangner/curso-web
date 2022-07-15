const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const filha1 = Object.create(pai)   // criando um objeto com herança
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // retorna o valor do atributo corCabelo do objeto pai

const filha2 = Object.create(pai, { // criando um objeto com herança e atributos
    nome: {value: 'Bia', writable: false, enumerable: true} // nome não pode ser alterado (privado)
})
console.log(filha2.nome, filha2.corCabelo)
filha2.nome = 'Carla' // não pode ser alterado
console.log(filha2.nome, filha2.corCabelo)


console.log(Object.keys(filha1)) // retorna todas as chaves do objeto
console.log(Object.keys(filha2)) // retorna todas as chaves do objeto (não retorna o atributo nome) linha 11

for(let key in filha2){ // percorrendo todas as chaves do objeto
    filha2.hasOwnProperty(key) ? // verificando se o atributo pertence ao objeto
    console.log(key) : console.log(`Por herança: ${key}`) // se sim, retorna a chave
} 