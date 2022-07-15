// let e const
{
    let a = 1 // variavel de escopo de bloco, ou seja, não consigo acessar fora do bloco
    var b = 2 // var é uma variável global
    console.log(a)
}
console.log(b)

//Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const[x, , y] = [1, 2, 3]
console.log(x, y)
