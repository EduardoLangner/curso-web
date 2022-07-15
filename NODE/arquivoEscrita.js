const fs = require('fs') // file system (fs) está dentro da pasta node_modules

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { // o writeFile é para escrever um arquivo, o primeiro parâmetro é o caminho do arquivo, o segundo é o conteúdo do arquivo, o terceiro é um callback que é executado quando a escrita for bem sucedida ou não)
    console.log(err || 'Arquivo salvo!')
})
    