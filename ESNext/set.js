// set serve para percorrer um array e retornar um novo array sem repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Vasco')
console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.size)
console.log(times.has('Vasco'))

// por exemplo, se eu tenho um array com nomes repetidos posso fazer isso
const nomes = ['Raquel', 'Lucas', 'Gustavo', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
