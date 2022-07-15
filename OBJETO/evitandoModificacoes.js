// Object.preventExtensions(impede que o objeto seja extendido)
const produto = Object.preventExtensions({ //permite mudar atributos do objeto e excluir atributos mas não permite adicionar novos atributos
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // retorna false porque o objeto não pode ser extendido
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal(impede que o objeto seja extendido e modificado)
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa) // impede que o objeto seja extendido e modificado
console.log('Selado:', Object.isSealed(pessoa)) // retorna true porque o objeto não pode ser modificado
pessoa.sobrenome = 'Silva' // não pode ser modificado
delete pessoa.nome // não pode ser excluído/deletado
pessoa.idade = 29 // pode ser modificado
console.log(pessoa)

