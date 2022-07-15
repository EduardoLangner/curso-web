// função fábrica

const prod1 = {
    nome: 'Sapato',
    preco: 120
}

const prod2 = {
    nome: 'carro',
    preco: 45000
}

const prod3 = {
    nome: 'computador',
    preco: 8000
}

// ficar criando objetos fica repetitivo, e a função factory é uma forma de fazer isso
// é uma funçaõ que retorna um objeto, fabrica a instancia de um objeto

function criarPessoa() { // criando a factory sem parametros
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())

function criarProduto(nome, preco) { // criando a factory com parametros
    return {
        nome : nome,
        preco // posso fazer sem os : pq é o mesmo nome do parametro
    }
}
console.log(criarProduto('Cadeira', 1500))
console.log(criarProduto('Parafuso', 500))

