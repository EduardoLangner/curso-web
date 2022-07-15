var a = 3
var a = 4
let b = 4
//let b = 5
const c = 6
//const c = 4

console.log(a, b, c)  


// VAR PODE SER DECLRADA MAIS DE UMA VEZ COM O MESMO NOME (var pega sempre o ultimo valor decla)
var num1 = 1
{
    var num1 = 2
    console.log(num1)
}
console.log(num1) // vai imprimir 2 * o numero 2


// LET é melhor que var, não pode ser redeclarado
let num2 = 6
{
    let num2 = 5
    console.log(num2)
}
console.log(num2) // vai imprimir o numero 6 e o 5



