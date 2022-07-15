// garante que o laco vai er executado pelo menos uma vez

//usado para um numero indeterminado de vezes

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`) //`` é uma string template que substirui a concatenação
}while(opcao != -1) // a oção já é diferente de -1, então o laço vai rodar mesmo assim 


console.log('Até a próxima!')