//ES8: Object.values, Object.keys e Object.entries
const obj = { a: 1, b: 2, c: 3 }

console.log(Object.keys(obj)) //retorna um array com as chaves do objeto [ 'a', 'b', 'c' ]
console.log(Object.values(obj))//retorna um array com os valores do objeto [ 1, 2, 3 ]
console.log(Object.entries(obj))//retorna um array com as chaves e valores do objeto [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//Melhorias na notação literal de objetos
const nome = 'Carla'
const pessoa = {
    nome, //mesma coisa que nome: nome
    ola(){ //mesma coisa que ola: function() {}
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class
class animal{}
class cachorro extends animal{
    falar(){
        return 'Au au!'
    }
}
console.log(new cachorro().falar())