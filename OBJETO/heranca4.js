console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// como todos são funções todos tem um método chamado prototype
// prototype é um objeto que todos os objetos herdam

String.prototype.reverse = function(){
    console.log(this.split('')) // imprime um array com todas as letras do texto caractere por caractere
    console.log(this.split('').reverse()) // imprime um array com todas as letras do texto invertidas
    console.log(this.split('').reverse().join('')) // imprime o texto invertido mas junto como uma string
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){ // first é um método do array
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())
