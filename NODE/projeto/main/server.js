const porta = 3000  // defini a porta que o servidor vai rodar
const express = require('express') // importa o express(framework web) que esta dentro de node_modules
const bancoDeDados = require('./bancoDeDados') // importa o banco de dados
const bodyParser = require('body-parser') // importa o body-parser que vai fazer o parse do corpo da requisição
const app = express() // cria a aplicação express que fornece uma camada fina de recursos fundamentais de aplicativos da Web

app.use(bodyParser.urlencoded({ extended: true })) // usa o body-parser para fazer o parse do corpo da requisição
//como usei o use sem especificar uma url ele vai ser usado pra tudo
// ele transforma o bady em objeto que usam o padrão urlencoded

app.get('/produtos', (req, res, next) => { // cria a rota /produtos e utiliza o padrão middleware(req, res, next)
    res.send(bancoDeDados.getProdutos()) // envia os produtos pelo send e transforma eles em json
})

app.get('/produtos/:id', (req, res, next) => { // cria a rota /produtos e utiliza o padrão middleware(req, res, next)
    res.send(bancoDeDados.getProduto(req.params.id)) // envia os produtos pelo send e transforma eles em json
})

app.post('/produtos', (req, res, next) => { // cria a rota /produtos e utiliza o padrão middleware(req, res, next)
    const produto = bancoDeDados.salvarProduto({ // salva o produto no banco de dados
        nome: req.body.nome, // pega o nome do corpo da requisição
        preco: req.body.preco
    })
    res.send(produto) // envia o produto pelo send e transforma eles em json
})

app.put('/produtos/:id', (req, res, next) => { // cria a rota /produtos e utiliza o padrão middleware(req, res, next) e put altera os dados
    const produto = bancoDeDados.salvarProduto({ // salva o produto no banco de dados
        id: req.params.id, // pega o id do corpo da requisição
        nome: req.body.nome, // pega o nome do corpo da requisição
        preco: req.body.preco
    })
    res.send(produto) // envia o produto pelo send e transforma eles em json
})

app.delete('/produtos/:id', (req, res, next) => { // cria a rota /produtos e utiliza o padrão middleware(req, res, next) e deletade acordo com o id pedido
    const produto = bancoDeDados.deletaProdutos(req.params.id)// salva o produto no banco de dados
    res.send(produto) // envia o produto pelo send e transforma eles em json
})

app.listen(porta, () => { // cria a porta que o servidor vai rodar e chama uma função que mostra no console que o servidor está rodando
    console.log(`servidor rodando na porta ${porta}`) // mostra no console que o servidor está rodando
})

