// serve apra filtrar um array 

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2000 && p.fragil === true
}))

// outra maneira de fazer o filter e usando o filter2
const caro = p => p.preco >= 500
const fragil = p => p.fragil 
console.log(produtos.filter2(caro).filter2(fragil))

////////////////////////////////////////////////////////
// prototipando o filter

Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){ //this.length é o tamanho do array
        if(callback(this[i], i , this)){
            newArray.push(this[i])
        }
    }
}