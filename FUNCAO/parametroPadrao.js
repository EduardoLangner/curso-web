// estratégia 1 para gerar valores padrão
function soma1(a,b,c){
    a = a || 1 // se a for undefined ou null na chamada da função, a recebe 1
    b = b || 1 // se b for undefined ou null na chamada da função, b recebe 1
    c = c || 1 // se c for undefined ou null na chamada da função, c recebe 1
    return a+b+c
}
console.log(soma1())// como não passo nenhum parametro, a recebe 1, b recebe 1 e c recebe 1
console.log(soma1(3))// como passo apenas o parametro 3, a recebe 3, b recebe 1 e c recebe 1
console.log(soma1(1,2,3))// como passo os parametros 1, 2 e 3, a recebe 1, b recebe 2 e c recebe 3
console.log(soma1(0,0,0))// como passo os parametros 0, 0 e 0, a recebe 1, b recebe 1 e c recebe 1

// estratégia 2,3 e 4 para gerar valores padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a+b+c
}
console.log(soma2())// como não passo nenhum parametro, a recebe 1, b recebe 1 e c recebe 1
console.log(soma2(3))// como passo apenas o parametro 3, a recebe 3, b recebe 1 e c recebe 1
console.log(soma2(1,2,3))// como passo os parametros 1, 2 e 3, a recebe 1, b recebe 2 e c recebe 3
console.log(soma2(0,0,0))// como passo os parametros 0, 0 e 0, a recebe 1, b recebe 1 e c recebe 1

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1){
    return a+b+c
}
console.log(soma3())// como não passo nenhum parametro, a recebe 1, b recebe 1 e c recebe 1
console.log(soma3(3))// como passo apenas o parametro 3, a recebe 3, b recebe 1 e c recebe 1
console.log(soma3(1,2,3))// como passo os parametros 1, 2 e 3, a recebe 1, b recebe 2 e c recebe 3
console.log(soma3(0,0,0))// como passo os parametros 0, 0 e 0, a recebe 1, b recebe 1 e c recebe 1
