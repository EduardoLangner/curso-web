// um objeto tem uma coleção dinamica de pares chave/valor

const produto1 = { // criando um objeto (não preciso de construtor)
    nome: 'Caneta',// adicionando um atributos
    marca: 'BIC',
    preco: 1.90,
}

const produto2 = new Object // criando um objeto de outra maneira (aqui precio usar o construtor)
produto2.nome = 'Cadeira' // adicionando um atributo ao objeto
produto2['marca'] = 'Generica' // adicionando um atributo ao objeto de outra forma
produto2.preco = 220 // adicionando um atributo ao objeto

console.log(produto1)
console.log(produto2)

const carro = { // criando um objeto com vários objetos dentro
    modelo: 'A4',
    valor: 89000,
    proprietario: { // o propretario é um objeto dentro do carro
        nome: 'Raul',
        idade: 56,
        endereco: { // o endereco é um objeto dentro do propretario que está dentro do carro
            logradouro: 'Rua ABC',
            numero: 123
        }
    }, // fim do objeto proprietario
    condutores: [{ // condutores é um array de objetos dentro do carro
        nome: 'Junior',
        idade: 19
    }, { 
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() { // criando um método dentro do objeto
        //...
    }
}

// acessando e alterando o valor do atributo numero do objeto endereco dentro do objeto proprietario dentro do objeto carro
carro.proprietario.endereco.numero = 1000 
carro['proprietario']['endereco']['numero'] = 1000 // outra forma de acessar o objeto dentro do objeto
console.log(carro)

//deletar
delete carro.condutores // deletando o array condutores dentro do objeto carro
delete carro.proprietario.endereco // deletando o objeto endereco dentro do objeto proprietario dentro do objeto carro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)