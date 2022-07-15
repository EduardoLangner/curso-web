//formas de criar

let aprovados = new Array('Agatha', 'Aldo', 'Daniel', 'Raquel') // forma n muito usada para criar array
console.log(aprovados)

aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'] // forma literal (mais usada para criar array)
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4]) // antes da linha 16 não existe o indice 3, então ele seta o indice como undefined

//formas de adicionar no array

aprovados[4] = 'Paulo' // adiciona um novo elemento no array de forma literal
aprovados.push('Abia') // adiciona um novo elemento no array pelo método push[adiciona sempre no final do array]
aprovados[9] = 'Rafael' // adiciona no indice 9, o indice 6, 7 e 8 são setados como undefined
console.log(aprovados)
console.log(`o tamanho do array é ${aprovados.length}`) // mostra o tamanho do array
aprovados.sort() // ordena o array em  ordem alfabética
console.log(aprovados)


    // formas de remover do array

    delete aprovados[0] // remove o indice 0 do array (Agatha)
//ele não diminui o array, apenas seta o indice como undefined
console.log(aprovados[0]) //printa undefined
console.log(`o tamanho do array é ${aprovados.length}`) // mostra o tamanho do array que continua com 10


//remover ou adicionar junto

aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.splice(1, 2) // a partir do indice 1 ele remove 2 elementos (aldo e daniel)
console.log(aprovados)
aprovados.splice(1, 0, 'Eduardo', 'Sergio') // a partir do indice 1 ele adiciona 2 elementos (Eduardo e Sergio)
console.log(aprovados)



