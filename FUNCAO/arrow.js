// já tem o this associado a função
// sintaxe reduzida
// função anonima (armazenada em uma variável ou uma constante 
//o this é fixo em uma função arrow

let dobro = function(a){ // declaração normal de uma função
    return 2 * a
}

dobro = (a) => { // arrow function
    return 2 * a
}

// posso reduzir ainda mais, se tiver somente um parametro posso tirar os parenteses
// possos retirar os parenteses e trabalhar com retorno implícito
dobro = a => 2 * a

console.log(dobro(2))



