const valores = [7.7, 8.9, 6.3, 9.2]    
console.log(valores[0], valores[3]) // imprime os valres no indice 0 e 3
console.log(valores[4]) // imprime o valor no indice 4 (undefined)
valores[4] = 10 // adiciona o valor 10 no indice 4 que ants não existia
console.log(valores)
console.log(valores.length) // imprime o tamanho do array
valores.push({id: 3}, false, null, 'teste') // adiciona um novo valor no array
console.log(valores)
console.log(valores.pop()) // remove o ultimo valor do array
delete valores[0] // deleta o valor do indice 0
console.log(valores)
console.log(typeof valores)
