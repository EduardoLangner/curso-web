const moduloA = require('../../moduloA.js') // 1° ../ sai da pastab e vai pra pastaA, e o segundo ../ sai da pastaA e vai pra Node para acessar ModuloA
console.log(moduloA.ola)
// posso tambem colocar o caminho absoluto que e o local onde está o arquivo mas n é muito bomm usar 

//utilizando os módulos instalados da pasta node_modules e os cores que vem junto com o NODE

const http = require('http')// por ser um módulo interno do NODE nõ preciso informar o caminho relativo
http.createServer(function(requisicao, resposta){
    resposta.write('Bom dia!') // escreve na página web
    resposta.end() // finaliza a requisição
}).listen(7519) // porta que o servidor vai ouvir //http://localhost:7519/


    