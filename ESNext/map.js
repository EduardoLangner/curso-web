//map serve para percorrer um array e retornar um novo array

const chaves = new Map([ //criando um map
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
    ['Opa', 'String']
])

chaves.forEach((valor, chave) => {//forEach percorre o map e retorna um novo array
    console.log(chave, valor)
})

console.log(chaves.has(123))//verifico se o map possui o valor 123
console.log(chaves.get(123))//retorna o valor 123
console.log(chaves.size)//retorna o tamanho do map
console.log(chaves.delete(123))//deleta o valor 123
console.log(chaves.size)//retorna o tamanho do map

