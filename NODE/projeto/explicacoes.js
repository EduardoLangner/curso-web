// começei criando o arquivo de configuração package.json (npm init -y) dentro da pasta do projeto 
/*{
  "name": "projeto",
  "version": "1.0.0",
  "description": "",
  "main": "explicações.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}*/

// após isso instalei o express (npm install --save express@4.16.2 -E) que criou a package.lock.json e node modulese  atualizou o package.json
/*{
  "name": "projeto",
  "version": "1.0.0",
  "description": "",
  "main": "explicações.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "4.16.2"
  }
}*/

//criei a pasta src que é a pasta do código fonte do projeto
//criei o arquivo server.js dentro da pasta src
// dentro da psta server.js configurei o express (framework web)
/*
const porta = 3003 // defini a porta que o servidor vai rodar
const express = require('express') // importa o express(framework web) que esta dentro de node_modules
const app = express() // cria a aplicação 

app.get('/produtos', (req, res, next) => { // cria a rota /produtos
    res.send({nome: 'notebook', preco: 123.45}) // envia os produtos pelo send e transforma eles em json
})

app.listen(porta, () => { // cria a porta que o servidor vai rodar
    console.log(`servidor rodando na porta ${porta}`) // mostra no console que o servidor está rodando
})
*/

// Após isso alterei o package.json para usar o nodemon que serve para rodar o servidor automaticamente
//(npm install --save-dev nodemon@1.14.11 -E) 
/*
{
  "name": "projeto",
  "version": "1.0.0",
  "description": "",
  "main": "explicações.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "4.16.2"
  },
  "devDependencies": {
    "nodemon": "1.14.11"
  }
}
*/

// mudei o arquivo principal do package.json para servidor.js (que é o que o nodemon vai rodar)
// criei uma flag chamada start que vai rodar o servidor automaticamente
/*
{ (para rodar chamo nmp start)
  "name": "projeto",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.js",
  "scripts": {
    "start": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "4.16.2"
  },
  "devDependencies": {
    "nodemon": "1.14.11"
  }
}
*/

// testei no postman e no browser http://localhost:3003/produtos

//criei um banco de dados para o projeto bancoDeDados.js
/*
const sequence = { // objeto para retornar os ids em sequencia
    _id: 1, // o _valor é um atributo privado
    get id(){ return this._id++ }, // get id é um método público que retorna o valor do atributo privado
}

const produtos = {} // objeto que vai armazenar os ids dos produtos

function salvarProduto(produto){ // function que vai salvar o produto em produtos{}
    if(!produto.id){ // se o produdo tive setado ele atualiza para a versão mais nova
        produto.id = sequence.id 
    }else{ // se não tiver setado ele cria um novo produto e armanzena o id dele dentro de produtos{}
        produto[produto.id] = produto    
    }
    return produto
}

function getProduto(id){ // function que vai retornar o produto pelo id
    return produtos[id] || "ERROR 404" // se o produto existir ele retorna ele, se não ele retorna mensagem de erro
}

function getProdutos(){ // function que vai retornar todos os produtos
    return Object.values(produtos) // retorna todos os produtos que estão dentro de produtos{}
}

module.exports = { salvarProduto, getProduto, getProdutos } // exporta as funções para o server.js
*/

// entrei de novo em server.js e importei o banco lá com o require
// alterei o produto setado como notebook para os produtos que estão dentro de produtos{}
// criei um post para salvar os produtos
/*app.post('/produtos', (req, res, next) => { // cria a rota /produtos e utiliza o padrão middleware(req, res, next)
    const produto = bancoDeDados.salvarProduto({ // salva o produto no banco de dados
        nome: req.body.nome, // pega o nome do corpo da requisição
        preco: req.body.preco
    })
    res.send(produto) // envia o produto pelo send e transforma eles em json
})*/
// foi no postman e tentei criar novos produtos com o post e deu um erro
/*<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Error</title>
</head>

<body>
	<pre>TypeError: Cannot read property &#39;nome&#39; of undefined<br> &nbsp; &nbsp;at C:\Users\eduar\OneDrive\Área de Trabalho\JAVA SCRIPT\NODE\projeto\main\server.js:12:24<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (C:\Users\eduar\OneDrive\Área de Trabalho\JAVA SCRIPT\NODE\projeto\node_modules\express\lib\router\layer.js:95:5)<br> &nbsp; &nbsp;at next (C:\Users\eduar\OneDrive\Área de Trabalho\JAVA SCRIPT\NODE\projeto\node_modules\express\lib\router\route.js:137:13)<br> &nbsp; &nbsp;at Route.dispatch (C:\Users\eduar\OneDrive\Área de Trabalho\JAVA SCRIPT\NODE\projeto\node_modules\express\lib\router\route.js:112:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (C:\Users\eduar\OneDrive\Área de Trabalho\JAVA SCRIPT\NODE\projeto\node_modules\express\lib\router\layer.js:95:5)<br> &nbsp; &nbsp;at C:\Users\eduar\OneDrive\Área de Trabalho\JAVA SCRIPT\NODE\projeto\node_modules\express\lib\router\index.js:281:22<br> &nbsp; &nbsp;at Function.process_params (C:\Users\eduar\OneDrive\Área de Trabalho\JAVA SCRIPT\NODE\projeto\node_modules\express\lib\router\index.js:335:12)<br> &nbsp; &nbsp;at next (C:\Users\eduar\OneDrive\Área de Trabalho\JAVA SCRIPT\NODE\projeto\node_modules\express\lib\router\index.js:275:10)<br> &nbsp; &nbsp;at expressInit (C:\Users\eduar\OneDrive\Área de Trabalho\JAVA SCRIPT\NODE\projeto\node_modules\express\lib\middleware\init.js:40:5)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (C:\Users\eduar\OneDrive\Área de Trabalho\JAVA SCRIPT\NODE\projeto\node_modules\express\lib\router\layer.js:95:5)</pre>
</body>

</html>*/
// o que aconteceu é que o corpo da mensagem está correto, porem não está sendo enviado o produto porque ele ta enviando como JSON
// e precisa ser enviado como objeto
// para resolver instalei o body-parser que vai transormar o corpo da mensagem em objeto (npm i --save body-parser@1.18.2 -E)
// dei um require no servidor para ter o body-parser
// criei um parser para o corpo da mensagem
//app.use(bodyParser.urlencoded({ extended: true }))