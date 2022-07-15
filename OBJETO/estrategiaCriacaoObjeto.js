// usando a notação literal
const obj1 = {} // criando um objeto
console.log(obj1)

// uando Object 
const obj2 = new Object // criando um objeto
console.log(obj2)

// criando minha própria função construtora
function Produto(nome, preco, desc) { // criando uma função construtora
    this.nome = nome // atributos
    this.getPrecoComDesconto = () => { // métodos
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15) // criando um objeto com a função construtora
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// classe 
class Teste { // criando uma classe
    constructor(nome, preco, desc) { // criando um construtor
        this.nome = nome // atributos
        this.getPrecoComDesconto = () => {
            return preco * (1 - desc)
        }
    }
}
const teste1 = new Teste('rola', 7.99, 0.15) // criando um objeto com a função construtora
const teste2 = new Teste('buceta', 2998.99, 0.25)
console.log(teste1.getPrecoComDesconto())
console.log(teste2.getPrecoComDesconto())

//função factory
function criarFuncionaio(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionaio('João', 7980, 4)
const f2 = criarFuncionaio('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null) // criando um objeto sem herança
filha.nome = 'Ana'
console.log(filha)

// uma função famosa que retorna um objeto JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)