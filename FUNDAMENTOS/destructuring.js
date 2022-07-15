// serve para extrair elementos de uma estrutura  (Substitui a notação .)

//1° objeto

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//extraindo o nome e idade de pessoa
const { nome, idade } = pessoa
console.log(nome, idade) // nome e idade se tornaram duas variaveis 

const {nome: n, idade: i} = pessoa // nome e idade se tornaram duas variaveis com nome n e i
console.log(n, i)



