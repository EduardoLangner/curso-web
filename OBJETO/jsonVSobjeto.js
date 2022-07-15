// JSON = Java Script Object Notation 
// JSON é uma forma textual de representar objetos 
// JSON é uma string que pode ser lida por qualquer linguagem de programação
// pegar um objeto e transformar em JSON e vice-versa

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){
        return a + b + c
    }
}
console.log(JSON.stringify(obj)) // transforma o objeto em JSON
// a sída disso é uma string {"a":1,"b":2,"c":3}

console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // transforma o JSON em objeto
// a sída disso é um objeto {a:1,b:2,c:3}
// para converter json para objeto é necessário colocar os parametros dentro de aspas duplas

