const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

////////////////////////////////////////////////////////

//criar um array que pega todas as notas <7 e coloca em outro array

const notas = [6.7, 7.4, 9.8, 8.1, 7.7, 6.9, 9.2]

//sem calback
let notasbaixas = [] // crio um novo array para armazenar as notas baixas
for(i in notas){ //leio cada índice do array notas
    if(notas[i] < 7){
        notasbaixas.push(notas[i]) // adiciono a nota ao array notasbaixas
    }
}
console.log(notasbaixas)

//com callback
let notasbaixasCallback = notas.filter(function(nota){//crio uma função que recebe uma nota e retorna true ou false pe
    return nota < 7 // armazena a nota na variavel nota e coloca no array notasbaixasCallback
})

console.log(notasbaixasCallback)

//calback + arrow function
let notasBaixasArrow = notas.filter(nota => nota < 7)
console.log(notasBaixasArrow)

//mais dinamico 
const menorque7 = nota => nota < 7
let notasBaixasArrow2 = notas.filter(menorque7)
console.log(notasBaixasArrow2)

//////////////////////////////////////////////////////////
    