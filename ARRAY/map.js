//serve para mapear um array para outro do mesmo tamanho mas com os dados mudados
//OBS: o MAP não altera o array original, ele cria um novo array

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(elementos) { //callback
    return elementos * 2
})
console.log(resultado)

const soma10 = elementos => elementos + 10
const triplo = elementos => elementos * 3
const paraDinheiro = elementos => `R$ ${parseFloat(elementos).toFixed(2).replace('.', ',')}` //parseFloat converto um numero pr um float

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)