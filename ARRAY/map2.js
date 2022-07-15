//prototipando o MAP (vendo por baixo dos panos)
Array.prototype.mapDoDUDU = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


//pegando somente os valores de um json
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Lápis", "preco": 10.00 }',
    '{ "nome": "Caneta", "preco": 4.50 }'
]

const convertendoJson = (json) => JSON.parse(json) //converte um json em um objeto
const apenasPreco = (objeto) => objeto.preco //pega o preco do objeto
console.log(carrinho.mapdoDUDU(convertendoJson).mapDoDUDU(apenasPreco))



