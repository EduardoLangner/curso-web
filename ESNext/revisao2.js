// Arrow function (função gerlmente usada para uma unica linha)
//Antes
function soma(a, b) {
    return a + b
}
console.log(soma(2, 3))

//Depois
const soma2 = (a, b) => a + b
console.log(soma2(2, 3))


//Arrow function (this)
const lexico1 = () => console.log(this === exports) 
const lexico2 = lexico1.bind({})
lexico1() 
lexico2()

//parametro default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Eu sou mais forte que o valor padrão')

//operador rest
function total(...numeros) { //...numeros é um array sem tamanho
    let total = 0
    numeros.forEach(n => total += n) //
    return total
}
console.log(total(2, 3, 4, 5)) //o rest agrupa tudo, então vai somar todos os valores

