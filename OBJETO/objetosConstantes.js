const pessoa = { // pessoa é uma constante que aponta para um endereço de memória, mas seus atributos e métodos são dinâmicos
    nome: 'João', 
}
pessoa.nome = 'Pedro' // alterei o atributo nome
console.log(pessoa)

// pessoa = { // issp não será possível, pois pessoa é uma constante
//     nome: 'Ana'
// }
// console.log(pessoa)

Object.freeze(pessoa) // congela o objeto pessoa, não conseguirá alterar o atributo nome
pessoa.nome = 'Maria' // não conseguirá alterar o atributo nome
console.log(pessoa) // não vai gerar um erro, vai somente ignorar a tentativa




