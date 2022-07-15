console.log(soma(5, 5))
//function declaration
function soma(x, y){ // posso chamar a função antes de declarar
    return x + y;
}


//function expression
const sub = function(x, y){  
    return x - y;
}
console.log(sub(5, 5))


//named function expression
const mult = function mult(x, y){ //utilizado mais para debugar o cod
    return x * y;
}
console.log(mult(5, 5))
