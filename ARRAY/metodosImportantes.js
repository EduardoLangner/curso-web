const pilotos = ['Hamilton', 'Bottas', 'Vettel', 'Verstappen', ' Massa'];
console.log(pilotos);

pilotos.pop() // Retira o ultimo elemento do array
console.log(pilotos)

pilotos.push('Alonso') // Adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift() // Retira o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Kimi') // Adiciona um elemento no inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Ricciardo', 'Massa') // antes do indice 2 ele adiciona 2 elementos (Ricciardo e Massa)
console.log(pilotos)

//remover
pilotos.splice(3, 1) // a partir do indice 3 ele remove 1 elemento (massa)
console.log(pilotos)

const novosPilotos = pilotos.slice(2) // cria um novo array a partir do indice 2 de pilotos (a partir do Ricciardo)
console.log(novosPilotos)
const novospilotos2 = pilotos.slice(1, 4) // cria um novo array a partir do indice 1 até o indice 4 de pilotos (a partir do Bottas)
console.log(novospilotos2)

