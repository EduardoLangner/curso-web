function soma(){
    let soma = 0
    for(i in arguments){ // argumentos é um array 
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(2))
console.log(soma(2,3))
console.log(soma(2,3,4,5,6,7,8,9))