// crirar de forma literal 
function fun1(){}

//armazenar em uma variavel
const fun2 = function(){}

//armazenar em um array
const array = [function(a,b){return a+b}, fun1, fun2]// criei a função dentro de um array e coloquei duas funções junto (fun1 e fun2)
console.log(array[0](2,3)) // chamei a função dentro do array e passei os parametros 2 e 3 para fun1 e fun2

// armazenar em um atributo de objeto
const obj = {} // criei um obj vazio
obj.falar = function(){return 'Opa'} // pasei como atributo a função falar que recebece a function e retorna o valor opa
console.log(obj.falar())// chamei a função falar e passo o objeto como parametro

// passar função como parametro para outra função
function run(fun){
    fun()
}
run(function(){console.log('Executando...')}) // chamei a função run e passo como parametro a função que recebe a função que retorna o console.log


// uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4) // chamei a função soma e passo os parametros 2 e 3 e depois chamei a função que recebeu os parametros 2 e 3 e passo o parametro 4