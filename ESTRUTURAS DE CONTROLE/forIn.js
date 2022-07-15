// usado para mostrar os indices de um array ou de um objeto

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(i in notas){
    console.log(i) // imprime os indices
    console.log(i , notas[i]) // imprime os indices e os valores
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa){
    console.log(atributo)// imprime os atributos
    console.log(atributo, pessoa[atributo])// imprime os atributos e os valores
}
    